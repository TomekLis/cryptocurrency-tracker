using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using CryptocurrencyTracker.Data;
using CryptocurrencyTracker.Dtos;
using CryptocurrencyTracker.Model;

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
    }
}
