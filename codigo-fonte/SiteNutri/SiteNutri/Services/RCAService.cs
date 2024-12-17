using System;

namespace HealthCalculatorAPI.Services
{
    public class RCAService
    {
        public (double, string) CalculateWaistToHeightRatio(double waistCircumference, double height, string gender) 
        {
            if (height <= 0)
            {
                throw new ArgumentException("Height must be greater than zero.");
            }

            if (string.IsNullOrWhiteSpace(gender))
            {
                throw new ArgumentException("Gender must be specified.");
            }


            double ratio = waistCircumference / height;
            string classification;

            if (gender.ToLower() == "female")
            {
                if (waistCircumference <= 80)
                {
                    classification = "Adiposidade central saudável";
                }
                else if (waistCircumference <= 88)
                {
                    classification = "Risco moderado";
                }
                else
                {
                    classification = "Alto risco";
                }
            }
            else if (gender.ToLower() == "male")
            {
                if (waistCircumference <= 94)
                {
                    classification = "Adiposidade central saudável";
                }
                else if (waistCircumference <= 102)
                {
                    classification = "Risco moderado";
                }
                else
                {
                    classification = "Alto risco";
                }
            }
            else
            {
                throw new ArgumentException("Gender not recognized.");
            }

            return (ratio, classification);
        }
    }
}