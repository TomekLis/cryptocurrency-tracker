using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using AutoMapper;
using CryptocurrencyTracker.Data;
using CryptocurrencyTracker.Dtos;
using CryptocurrencyTracker.Model;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Linq;

namespace CryptocurrencyTracker.Services
{
    public class InvestmentService : IInvestmentService
    {
        private readonly ApplicationDbContext _dbContext;
        private readonly IMapper _mapper;

        public InvestmentService(ApplicationDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        public async Task GenerateInvestmentAsync(InvestmentDto investmentDto, string userId)
        {
            var investment = _mapper.Map<Investment>(investmentDto);
            investment.User = _dbContext.AppUsers.FirstOrDefault(x => x.UserName == userId);
            await _dbContext.Investments.AddAsync(investment);
            await _dbContext.SaveChangesAsync();
        }

        public async Task<IEnumerable<CalculatedInvestmentDto>> GetUsersInvestments(string userId)
        {
            var investments =
                _dbContext
                .Investments
                .Include(x => x.User)
                .Where(x => x.User.UserName == userId).ToList();


            using (var client = new HttpClient())
            {
                try
                {
                    var cryptocurrencies = investments.Count > 0 ? investments.GroupBy(x => x.Cryptocurrency).Select(x => x.Key) : new List<string> { "BTC" };
                    var cryptocurrenciesAsString = string.Join(",", cryptocurrencies);

                    client.BaseAddress = new Uri("https://min-api.cryptocompare.com");
                    client.DefaultRequestHeaders.Authorization =
                        new AuthenticationHeaderValue("Apikey", "9b19040948791a2d14d0d2648b9b4869b0d3cab5b0364b9e0c5948c16bbfa706");

                    var response = await client.GetAsync($"/data/pricemulti?fsyms={cryptocurrenciesAsString}&tsyms=USD");
                    response.EnsureSuccessStatusCode();

                    var currentPricesResponse = JObject.Parse(await response.Content.ReadAsStringAsync());

                    var investmentDtos = _mapper.Map<IEnumerable<CalculatedInvestmentDto>>(investments);
                    foreach (var investment in investmentDtos)
                    {
                        var currentCryptocurrencyJsonValue = currentPricesResponse[investment.Cryptocurrency];
                        if (currentCryptocurrencyJsonValue != null)
                        {
                            var currentCryptocurrencyValue = (decimal)currentCryptocurrencyJsonValue["USD"];

                            var investmentDateUnix = ((DateTimeOffset)DateTime.Parse(investment.Date)).ToUnixTimeSeconds();
                            var pastCryptocurrencyPriceResponse = await client.GetAsync($"/data/histoday?fsym={investment.Cryptocurrency}&tsym=USD&limit=1&aggregate=1&toTs={investmentDateUnix}");
                            pastCryptocurrencyPriceResponse.EnsureSuccessStatusCode();
                            var pastDataValue = (decimal)JObject.Parse(await pastCryptocurrencyPriceResponse.Content.ReadAsStringAsync())["Data"][0]["open"];
                            investment.RevenueFraction = Math.Round((currentCryptocurrencyValue - pastDataValue) / pastDataValue, 6);
                            investment.Revenue = Math.Round(investment.Value + (investment.RevenueFraction * investment.Value), 2);
                        }
                    }
                    return investmentDtos;

                }
                catch (HttpRequestException httpRequestException)
                {
                    throw new Exception();
                }
            }


        }
    }
}
