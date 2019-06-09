using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using CryptocurrencyTracker.Data;
using CryptocurrencyTracker.Dtos;
using CryptocurrencyTracker.Model;
using Microsoft.EntityFrameworkCore;

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


        public IEnumerable<CreateChartDto> GetUsersCharts(string userId)
        {
            var charts = 
                _dbContext
                .Charts
                .Include(x => x.User)
                .Where(x => x.User.UserName == userId);
            var chartDtos = _mapper.Map<IEnumerable<CreateChartDto>>(charts);

            return chartDtos;
        }

    }
}
