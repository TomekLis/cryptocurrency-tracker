using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using CryptocurrencyTracker.Data;
using CryptocurrencyTracker.Dtos;
using CryptocurrencyTracker.Model;

namespace CryptocurrencyTracker.Services
{
    public class ChartService : IChartService
    {
        private readonly ApplicationDbContext _dbContext;
        private readonly IMapper _mapper;

        public ChartService(ApplicationDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        public async Task GenerateChart(CreateChartDto createChartDataDto, string userId)
        {
            var chart = _mapper.Map<Chart>(createChartDataDto);
            chart.User = _dbContext.AppUsers.FirstOrDefault(x => x.UserName == userId);
            await _dbContext.Charts.AddAsync(chart);
            await _dbContext.SaveChangesAsync();
        }

        //public Task<CreateChartDto> GetUsersCharts(string userId)
        //{
        //    var usersCharts = _dbContext.Get
        //}
    }
}
