using Microsoft.AspNetCore.Mvc;
using HealthCalculatorAPI.Services;

[ApiController]
[Route("api/[controller]")] // Rota ajustada automaticamente com a mudança de nome do controlador
public class zIMCController : ControllerBase
{
    private readonly zIMCService _imcService; // Ajustado o tipo para zIMCService

    public zIMCController(zIMCService imcService) // Ajustado o tipo do parâmetro para zIMCService
    {
        _imcService = imcService;
    }

    [HttpPost]
    [Route("calculate")]
    public IActionResult CalculateIMC([FromBody] IMCRequest request)
    {
        try
        {
            double imc = _imcService.CalculateIMC(request.Weight, request.Height);
            string category = _imcService.DetermineIMCCategory(request.Weight, request.Height, request.Age, request.Gender);
            return Ok(new { IMC = imc, Category = category });
        }
        catch (ArgumentOutOfRangeException ex)
        {
            return BadRequest(new { Message = ex.Message });
        }
        catch (ArgumentException ex)
        {
            return BadRequest(new { Message = ex.Message });
        }
    }
}

public class IMCRequest // Classe IMCRequest mantida como está
{
    public double Weight { get; set; }
    public double Height { get; set; }
    public int Age { get; set; }
    public string Gender { get; set; }
}
