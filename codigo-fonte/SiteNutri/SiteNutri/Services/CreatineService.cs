using System;
using System.Collections.Generic;
using System.Linq;

namespace HealthCalculatorAPI.Services
{
    public class CreatineService
    {
        private readonly List<CreatineRecommendation> _creatineTable;

        public CreatineService()
        {
            _creatineTable = new List<CreatineRecommendation>
            {
                new CreatineRecommendation { Weight = 50, CreatineAmount = 3 },
                new CreatineRecommendation { Weight = 60, CreatineAmount = 3.6 },
                new CreatineRecommendation { Weight = 70, CreatineAmount = 4.2 },
                new CreatineRecommendation { Weight = 80, CreatineAmount = 4.8 },
                new CreatineRecommendation { Weight = 90, CreatineAmount = 5.4 },
                new CreatineRecommendation { Weight = 100, CreatineAmount = 6 }
            };
        }

        public double GetCreatineAmount(double weight)
        {
            var recommendation = _creatineTable.LastOrDefault(c => c.Weight <= weight);

            if (recommendation == null)
            {
                throw new ArgumentException("Weight not supported.");
            }

            return recommendation.CreatineAmount;
        }
    }
}