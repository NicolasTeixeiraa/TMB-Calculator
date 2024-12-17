"use client";

import React, { useState } from 'react';
import "../../styles/calculator-tmb.css";

const CalculatorTMBPage: React.FC = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [activityFactor, setActivityFactor] = useState(1.2);
  const [leanMass, setLeanMass] = useState(''); 
  const [formula, setFormula] = useState('mifflin');
  const [result, setResult] = useState<number | null>(null);

  const calculateTMB = async () => {
    let body, url;
    const apiBaseUrl = 'https://healthhub.criadoresdesoftware.com.br:7125/api/TMB';

    switch (formula) {
      case 'mifflin':
        url = `${apiBaseUrl}/mifflin`;
        body = JSON.stringify({
          weight: parseFloat(weight),
          height: parseFloat(height),
          age: parseInt(age),
          gender,
          activityFactor,
        });
        break;
      case 'harris-benedict':
        url = `${apiBaseUrl}/harris-benedict`;
        body = JSON.stringify({
          weight: parseFloat(weight),
          height: parseFloat(height),
          age: parseInt(age),
          gender,
          activityFactor,
        });
        break;
      case 'cunningham':
        url = `${apiBaseUrl}/cunningham`;
        body = JSON.stringify({
          leanMass: parseFloat(leanMass),
          activityFactor,
        });
        break;
      case 'tinsley':
        url = `${apiBaseUrl}/tinsley`;
        body = JSON.stringify({
          weight: parseFloat(weight),
          activityFactor,
          gender, 
        });
        break;
      case 'faooms':
        url = `${apiBaseUrl}/fao-oms`;
        body = JSON.stringify({
          weight: parseFloat(weight),
          age: parseInt(age),
          gender,
          FAOActivityFactor: activityFactor,
        });
        break;
      case 'faoadp':
        url = `${apiBaseUrl}/fao-adp`;
        body = JSON.stringify({
          weight: parseFloat(weight),
          height: parseFloat(height),
          age: parseInt(age),
          activityFactor,
        });
        break;
      default:
        console.error("Fórmula não reconhecida");
        return;
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Erro ao calcular TMB:", errorData.message);
        return;
      }

      const data = await response.json();
      setResult(data.result);
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };

  return (
    <div className="form-container">
      <h1>Calculadora de metabolismo basal (TMB)</h1>
      <form className="form">
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Peso (kg)"
        />
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Altura (cm)"
        />
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Idade"
        />
        <input
          type="number"
          value={leanMass}
          onChange={(e) => setLeanMass(e.target.value)}
          placeholder="Massa Livre de Gordura (MLG)"
        />
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="male">Masculino</option>
          <option value="female">Feminino</option>
        </select>
        <select
          value={activityFactor}
          onChange={(e) => setActivityFactor(parseFloat(e.target.value))}
        >
          <option value={1.2}>Sedentário (pouco ou sem exercício, trabalho de escritório)</option>
          <option value={1.35}>Atividade Leve (atividade leve de 3-5 dias na semana)</option>
          <option value={1.55}>Atividade Moderada (atividade moderada de 3-5 dias na semana)</option>
          <option value={1.75}>Muito Ativo (atividade pesada de 6-7 dias na semana)</option>
          <option value={1.95}>Extremamente Ativo (trabalho braçal durante a semana + treino ou treino 2x no dia)</option>
        </select>
        <select
          value={formula}
          onChange={(e) => setFormula(e.target.value)}
        >
          <option value="mifflin">Mifflin-St Jeor</option>
          <option value="harris-benedict">Harris-Benedict</option>
          <option value="cunningham">Cunningham</option>
          <option value="tinsley">Tinsley</option>
          <option value="faooms">FAO/OMS</option>
          <option value="faoadp">Fórmula/ADP</option>
        </select>
        <button type="button" onClick={calculateTMB}>Calcular TMB</button>
      </form>
      {result !== null && <p>Resultado: {result} kcal/dia</p>}
    </div>
  );
};

export default CalculatorTMBPage;