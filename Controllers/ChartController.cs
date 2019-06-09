using CryptocurrencyTracker.Dtos;
using CryptocurrencyTracker.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using System.Threading.Tasks;

namespace CryptocurrencyTracker.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class ChartController : ControllerBase
    {
        private readonly IChartService _chartService;

        public ChartController(IChartService chartService)
        {
            _chartService = chartService;
        }

        [HttpPost("createChart")]
        public async Task<IActionResult> Post([FromBody]CreateChartDto createChartDataDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            await _chartService.GenerateChart(createChartDataDto, userId);
            return Ok();
        }
        [HttpGet("usersCharts")]
        public async Task<IActionResult> GetUsersCharts()
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            var charts = _chartService.GetUsersCharts(userId);
            return Ok(charts);
        }

    }
}
