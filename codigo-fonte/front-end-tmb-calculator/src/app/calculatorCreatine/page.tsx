"use client";

import React, { useState } from 'react';
import "../../styles/calculator-tmb.css";

const CalculatorCreatine: React.FC = () => {
  const [weight, setWeight] = useState('');
  const [creatineAmount, setCreatineAmount] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculateCreatine = async () => {
    try {
      const response = await fetch(`https://healthhub.criadoresdesoftware.com.br:7125/api/supplement/creatine/${weight}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.Message || 'Erro ao calcular a creatina');
        setCreatineAmount(null);
        return;
      }

      const data = await response.json();
      console.log('Dados recebidos:', data); 
      setCreatineAmount(data.creatineAmount); 
      setError(null);
    } catch (error) {
      console.error('Erro ao calcular a creatina:', error);
      setError('Erro ao calcular a creatina');
      setCreatineAmount(null);
    }
  };

  return (
    <div className="form-container">
      <h1>Calculadora de Creatina</h1>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          calculateCreatine();
        }}
      >
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Peso (kg)"
          required
        />
        <button type="submit">Calcular Creatina</button>
      </form>
      {creatineAmount !== null && (
        <p>Quantidade de Creatina Recomendada: {creatineAmount}g</p>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default CalculatorCreatine;