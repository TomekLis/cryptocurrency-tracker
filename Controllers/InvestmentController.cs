﻿using CryptocurrencyTracker.Dtos;
using CryptocurrencyTracker.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using System.Threading.Tasks;

namespace CryptocurrencyTracker.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class InvestmentController : Controller
    {
        private readonly IInvestmentService _investmentService;

        public InvestmentController(IInvestmentService investmentService)
        {
            _investmentService = investmentService;
        }

        [HttpPost("createInvestment")]
        public async Task<IActionResult> CreateInvestment([FromBody]InvestmentDto investmentDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            await _investmentService.GenerateInvestmentAsync(investmentDto, userId);
            return Ok();
        }

        [HttpGet("usersInvestments")]
        public async Task<IActionResult> GetUsersInvestments()
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            var investments = await _investmentService.GetUsersInvestments(userId);
            return Ok(investments);
        }

    }
}
