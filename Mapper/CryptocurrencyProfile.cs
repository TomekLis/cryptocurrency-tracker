using AutoMapper;
using CryptocurrencyTracker.Dtos;
using CryptocurrencyTracker.Model;

namespace CryptocurrencyTracker.Mapper
{
    public class CryptocurrencyProfile : Profile
    {
        public CryptocurrencyProfile()
        {
            CreateMap<CreateChartDto, Chart>()
                .ForMember(x => x.EndingDate, opts => opts.MapFrom(x => x.EndDate))
                .ForMember(x => x.StartingDate, opts => opts.MapFrom(x => x.StartDate));

            CreateMap<Chart, CreateChartDto>()
                .ForMember(x => x.EndDate, opts => opts.MapFrom(x => x.EndingDate))
                .ForMember(x => x.StartDate, opts => opts.MapFrom(x => x.StartingDate));

            CreateMap<Investment, InvestmentDto>();
            CreateMap<InvestmentDto, Investment>();
       }
    }
}
