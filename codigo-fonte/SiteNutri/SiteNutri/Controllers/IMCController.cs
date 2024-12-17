using Microsoft.AspNetCore.Mvc;
using HealthCalculatorAPI.Services;

namespace HealthCalculatorAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class IMCController : ControllerBase
    {
        private readonly IMCService _imcService;

        public IMCController(IMCService imcService)
        {
            _imcService = imcService;
        }

        [HttpPost("calculate")]
        public IActionResult CalculateIMC([FromBody] AdultIMCRequest request)
        {
            if (request == null)
            {
                return BadRequest("Request body is null.");
            }
            if (request.Weight <= 0)
            {
                return BadRequest("Weight must be a positive value.");
            }
            if (request.Height <= 0)
            {
                return BadRequest("Height must be a positive value.");
            }

            try
            {
                double imc = _imcService.CalculateAdultIMC(request.Weight, request.Height); // Passa altura em cm
                string category = _imcService.DetermineAdultIMCCategory(imc);
                return Ok(new { IMC = imc, Category = category });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred: {ex.Message}");
            }
        }
    }

    public class AdultIMCRequest
    {
        public double Weight { get; set; }
        public double Height { get; set; } // Altura em centímetros
    }
}