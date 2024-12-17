using Microsoft.AspNetCore.Mvc;
using HealthCalculatorAPI.Services;

namespace HealthCalculatorAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TMBController : ControllerBase
    {
        private readonly TMBService _tmbService;

        public TMBController(TMBService tmbService)
        {
            _tmbService = tmbService;
        }

        [HttpPost("harris-benedict")]
        public ActionResult PostTMBHarrisBenedict([FromBody] TMBRequest request)
        {
            try
            {
                var tmb = _tmbService.CalculateTMBHarrisBenedict(request.Weight, request.Height, request.Age, request.Gender, request.ActivityFactor);
                return Ok(new { result = tmb });
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("cunningham")]
        public ActionResult PostTMBCunningham([FromBody] TMBLeanMassRequest request)
        {
            var tmb = _tmbService.CalculateTMBCunningham(request.LeanMass, request.ActivityFactor);
            return Ok(new { result = tmb });
        }

        [HttpPost("tinsley")]
        public ActionResult PostTMBTinsley([FromBody] TMBRequest request)
        {
            var tmb = _tmbService.CalculateTMBTinsley(request.Weight, request.ActivityFactor);
            return Ok(new { result = tmb });
        }

        [HttpPost("mifflin")]
        public ActionResult PostTMBMifflin([FromBody] TMBRequest request)
        {
            try
            {
                var tmb = _tmbService.CalculateTMBMifflin(request.Weight, request.Height, request.Age, request.Gender, request.ActivityFactor);
                return Ok(new { result = tmb });
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("fao-oms")]
        public ActionResult PostTMBFAOOMS([FromBody] TMBFAOOMSRequest request)
        {
            try
            {
                var tmb = _tmbService.CalculateTMBFAOOMS(request.Weight, request.Age, request.Gender, request.FAOActivityFactor);
                return Ok(new { result = tmb });
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("fao-adp")]
        public ActionResult PostTMBFAOADP([FromBody] TMBActivityRequest request)
        {
            var tmb = _tmbService.CalculateTMBFAOADP(request.Weight, request.Height, request.Age, request.ActivityFactor);
            return Ok(new { result = tmb });
        }
    }

    public class TMBRequest
    {
        public double Weight { get; set; }
        public double Height { get; set; }
        public int Age { get; set; }
        public string Gender { get; set; }
        public double ActivityFactor { get; set; }
    }

    public class TMBLeanMassRequest
    {
        public double LeanMass { get; set; }
        public double ActivityFactor { get; set; }
    }

    public class TMBActivityRequest
    {
        public double Weight { get; set; }
        public double Height { get; set; }
        public int Age { get; set; }
        public double ActivityFactor { get; set; }
    }

    public class TMBFAOOMSRequest
    {
        public double Weight { get; set; }
        public int Age { get; set; }
        public string Gender { get; set; }
        public double FAOActivityFactor { get; set; }
    }
}