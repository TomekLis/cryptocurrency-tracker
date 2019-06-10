using System.Collections.Generic;
using System.Threading.Tasks;
using CryptocurrencyTracker.Dtos;

namespace CryptocurrencyTracker.Services
{
    public interface IInvestmentService
    {
        Task GenerateInvestmentAsync(InvestmentDto investmentDto, string userId);
        Task<IEnumerable<CalculatedInvestmentDto>> GetUsersInvestments(string userId);
    }
}
