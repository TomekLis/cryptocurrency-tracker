using AutoMapper;
using CryptocurrencyTracker.Dtos;
using CryptocurrencyTracker.Model;

namespace CryptocurrencyTracker.Mapper
{
    public class CryptocurrencyProfile : Profile
    {
        public CryptocurrencyProfile()
        {
            CreateMap<CreateChartDto, Chart>();
        }
    }
}
