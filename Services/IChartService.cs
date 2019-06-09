using System.Collections.Generic;
using System.Threading.Tasks;
using CryptocurrencyTracker.Dtos;

namespace CryptocurrencyTracker.Services
{
    public interface IChartService
    {
        Task GenerateChart(CreateChartDto createChartDataDto, string userId);
        IEnumerable<CreateChartDto> GetUsersCharts(string userId);
    }
}
