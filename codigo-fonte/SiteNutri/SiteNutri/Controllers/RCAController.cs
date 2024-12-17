using Microsoft.AspNetCore.Mvc;
using HealthCalculatorAPI.Services;

namespace HealthCalculatorAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RCAController : ControllerBase
    {
        private readonly RCAService _rcaService;

        public RCAController(RCAService rcaService)
        {
            _rcaService = rcaService;
        }

        [HttpPost("waist-to-height")]
        public ActionResult CalculateWaistToHeight([FromBody] WaistToHeightRequest request)
        {
            try
            {
                var (ratio, classification) = _rcaService.CalculateWaistToHeightRatio(request.WaistCircumference, request.Height, request.Gender);
                return Ok(new { ratio, classification });
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }

    public class WaistToHeightRequest
    {
        public double WaistCircumference { get; set; }
        public double Height { get; set; }
        public string Gender { get; set; } 
    }
}