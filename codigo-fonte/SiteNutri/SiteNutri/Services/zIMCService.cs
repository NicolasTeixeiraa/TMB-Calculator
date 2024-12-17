using System;
using System.Collections.Generic;

namespace HealthCalculatorAPI.Services
{
    public class zIMCService
    {
        private readonly IDictionary<int, (double, double, double, double)> _imcRangesBoys;
        private readonly IDictionary<int, (double, double, double, double)> _imcRangesGirls;

        public zIMCService()
        {
            // Inicializando os dicionários com os dados fornecidos para meninos
            _imcRangesBoys = new Dictionary<int, (double, double, double, double)>
            {
                { 6, (14.5, 16.6, 18.0, double.MaxValue) },
                { 7, (15.0, 17.3, 19.1, double.MaxValue) },
                { 8, (15.6, 16.7, 20.3, double.MaxValue) },
                { 9, (16.1, 18.8, 21.4, double.MaxValue) },
                { 10, (16.7, 19.6, 22.5, double.MaxValue) },
                { 11, (17.2, 20.3, 23.7, double.MaxValue) },
                { 12, (17.8, 21.1, 24.8, double.MaxValue) },
                { 13, (18.5, 21.9, 25.9, double.MaxValue) },
                { 14, (19.2, 22.7, 26.9, double.MaxValue) },
                { 15, (19.9, 23.6, 27.7, double.MaxValue) }
            };

            // Inicializando os dicionários com os dados fornecidos para meninas
            _imcRangesGirls = new Dictionary<int, (double, double, double, double)>
            {
                { 6, (14.3, 16.1, 17.4, double.MaxValue) },
                { 7, (14.9, 17.1, 18.9, double.MaxValue) },
                { 8, (15.6, 18.1, 20.3, double.MaxValue) },
                { 9, (16.3, 19.1, 21.7, double.MaxValue) },
                { 10, (17.0, 20.1, 23.2, double.MaxValue) },
                { 11, (17.6, 21.1, 24.5, double.MaxValue) },
                { 12, (18.3, 22.1, 25.9, double.MaxValue) },
                { 13, (18.9, 23.0, 27.7, double.MaxValue) },
                { 14, (19.3, 23.8, 27.9, double.MaxValue) },
                { 15, (19.6, 24.2, 28.8, double.MaxValue) }
            };
        }

        public double CalculateIMC(double weight, double height)
        {
            if (height <= 0)
            {
                throw new ArgumentException("Height must be greater than zero.");
            }

            double heightInMeters = height / 100.0;
            double imc = weight / (heightInMeters * heightInMeters);
            return Math.Round(imc, 2);
        }

        public string DetermineIMCCategory(double weight, double height, int age, string gender)
        {
            double imc = CalculateIMC(weight, height);
            IDictionary<int, (double, double, double, double)> imcRanges;

            // Seleciona a tabela correta com base no gênero
            if (gender.Equals("male", StringComparison.OrdinalIgnoreCase))
            {
                imcRanges = _imcRangesBoys;
            }
            else if (gender.Equals("female", StringComparison.OrdinalIgnoreCase))
            {
                imcRanges = _imcRangesGirls;
            }
            else
            {
                throw new ArgumentException("Invalid gender specified.");
            }

            // Verifica se a idade está nas tabelas
            if (!imcRanges.ContainsKey(age))
            {
                throw new ArgumentOutOfRangeException("Age not supported.");
            }

            var (belowNormal, normalUpper, overweightUpper, obesityUpper) = imcRanges[age];

            // Determina a categoria do IMC
            if (imc < belowNormal)
            {
                return "Abaixo do Normal";
            }
            else if (imc <= normalUpper)
            {
                return "Normal";
            }
            else if (imc <= overweightUpper)
            {
                return "Sobrepeso";
            }
            else
            {
                return "Obesidade";
            }
        }
    }
}