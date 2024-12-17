using System;

namespace HealthCalculatorAPI.Services
{
    public class IMCService
    {
        public double CalculateAdultIMC(double weight, double heightCm)
        {
            // Converte altura de cm para metros
            double heightMeters = heightCm / 100.0;

            // Calcula o IMC
            double imc = weight / (heightMeters * heightMeters);
            return Math.Round(imc, 2);
        }

        public string DetermineAdultIMCCategory(double imc)
        {
            if (imc < 18.5)
            {
                return "Abaixo do peso";
            }
            else if (imc < 25)
            {
                return "Peso normal";
            }
            else if (imc < 30)
            {
                return "Sobrepeso";
            }
            else if (imc < 35)
            {
                return "Obesidade grau I";
            }
            else if (imc < 40)
            {
                return "Obesidade grau II";
            }
            else
            {
                return "Obesidade grau III (obesidade mórbida)";
            }
        }
    }
}