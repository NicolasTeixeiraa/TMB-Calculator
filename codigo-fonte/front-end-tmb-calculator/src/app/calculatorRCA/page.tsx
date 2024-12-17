"use client";

import React, { useState } from 'react';
import "../../styles/calculator-tmb.css"; 

const CalculatorRCAPage: React.FC = () => {
  const [waistCircumference, setWaistCircumference] = useState('');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('male'); 
  const [result, setResult] = useState<{ ratio: number, classification: string } | null>(null);

  const calculateRCA = async () => {
    const url = 'https://healthhub.criadoresdesoftware.com.br:7125/api/RCA/waist-to-height';
    const body = JSON.stringify({
      waistCircumference: parseFloat(waistCircumference),
      height: parseFloat(height),
      gender, 
    });

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
        console.error("Erro ao calcular RCA:", errorData.message);
        return;
      }

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Erro ao calcular RCA:", error);
    }
  };

  return (
    <div className="form-container">
      <h1>Calculadora de Relação Cintura-Altura (RCA)</h1>
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="number"
          value={waistCircumference}
          onChange={(e) => setWaistCircumference(e.target.value)}
          placeholder="Circunferência da Cintura (cm)"
          required
        />
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Altura (cm)"
          required
        />
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="male">Masculino</option>
          <option value="female">Feminino</option>
        </select>
        <button type="button" onClick={calculateRCA}>Calcular RCA</button>
      </form>
      {result && (
        <div>
          <p>Índice RCA: {result.ratio.toFixed(2)}</p>
          <p>Classificação: {result.classification}</p>
        </div>
      )}
    </div>
  );
};

export default CalculatorRCAPage;