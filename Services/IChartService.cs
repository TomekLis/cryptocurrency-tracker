using System.Threading.Tasks;
using CryptocurrencyTracker.Dtos;

namespace CryptocurrencyTracker.Services
{
    public interface IChartService
    {
        Task GenerateChart(CreateChartDto createChartDataDto, string userId);
        Task<CreateChartDto> GetUsersCharts(string userId);
    }
}
