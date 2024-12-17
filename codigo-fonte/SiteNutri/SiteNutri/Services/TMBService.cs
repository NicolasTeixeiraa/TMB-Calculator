using System;
using HealthCalculatorAPI.Models; 

namespace HealthCalculatorAPI.Services
{
    public class TMBService
    {
        private double ApplyActivityFactor(double tmb, double activityFactor)
        {
            return tmb * activityFactor;
        }

        private double RoundTMB(double tmb)
        {
            return Math.Round(tmb);
        }

        public double CalculateTMBHarrisBenedict(double weight, double height, int age, string gender, double activityFactor)
        {
            double tmb;
            if (gender.ToLower() == "male")
            {
                tmb = 66.47 + (13.75 * weight) + (5.003 * height) - (6.775 * age);
            }
            else if (gender.ToLower() == "female")
            {
                tmb = 655.09 + (9.563 * weight) + (1.85 * height) - (4.676 * age);
            }
            else
            {
                throw new ArgumentException("Gender not recognized.");
            }
            tmb = ApplyActivityFactor(tmb, activityFactor);
            return RoundTMB(tmb);
        }

        public double CalculateTMBCunningham(double leanMass, double activityFactor)
        {
            double tmb = (22 * leanMass) + 500;
            tmb = ApplyActivityFactor(tmb, activityFactor);
            return RoundTMB(tmb);
        }

        public double CalculateTMBTinsley(double weight, double activityFactor)
        {
            double tmb = (24.8 * weight) + 10;
            tmb = ApplyActivityFactor(tmb, activityFactor);
            return RoundTMB(tmb);
        }

        public double CalculateTMBMifflin(double weight, double height, int age, string gender, double activityFactor)
        {
            double tmb;
            if (gender.ToLower() == "male")
            {
                tmb = (10 * weight) + (6.25 * height) - (5 * age) + 5;
            }
            else if (gender.ToLower() == "female")
            {
                tmb = (10 * weight) + (6.25 * height) - (5 * age) - 161;
            }
            else
            {
                throw new ArgumentException("Gender not recognized.");
            }
            tmb = ApplyActivityFactor(tmb, activityFactor);
            return RoundTMB(tmb);
        }

        public double CalculateTMBFAOOMS(double weight, int age, string gender, double faoActivityFactor)
        {
            double tmb;

            if (gender.ToLower() == "male")
            {
                if (age >= 18 && age < 30)
                {
                    tmb = (15.057 * weight) + 692.2;
                }
                else if (age >= 30 && age < 60)
                {
                    tmb = (11.472 * weight) + 873.1;
                }
                else
                {
                    throw new ArgumentException("Age not supported for FAO/OMS calculation.");
                }
            }
            else if (gender.ToLower() == "female")
            {
                if (age >= 18 && age < 30)
                {
                    tmb = (14.818 * weight) + 486.6;
                }
                else if (age >= 30 && age < 60)
                {
                    tmb = (8.126 * weight) + 845.6;
                }
                else
                {
                    throw new ArgumentException("Age not supported for FAO/OMS calculation.");
                }
            }
            else
            {
                throw new ArgumentException("Gender not recognized.");
            }
            tmb *= faoActivityFactor; 
            return RoundTMB(tmb);
        }

        public double CalculateTMBFAOADP(double weight, double height, int age, double activityFactor)
        {
            double tmb = 66.47 + (13.75 * weight) + (5 * height) - (6.8 * age);
            tmb = ApplyActivityFactor(tmb, activityFactor);
            return RoundTMB(tmb);
        }
    }
}