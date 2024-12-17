using Microsoft.AspNetCore.Mvc;
using HealthCalculatorAPI.Services;

namespace HealthCalculatorAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SupplementController : ControllerBase
    {
        private readonly CreatineService _creatineService;

        public SupplementController(CreatineService creatineService)
        {
            _creatineService = creatineService;
        }

        [HttpGet("creatine/{weight}")]
        public IActionResult GetCreatineRecommendation(double weight)
        {
            try
            {
                double creatineAmount = _creatineService.GetCreatineAmount(weight);
                return Ok(new { Weight = weight, CreatineAmount = creatineAmount });
            }
            catch (ArgumentException ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }
    }
}