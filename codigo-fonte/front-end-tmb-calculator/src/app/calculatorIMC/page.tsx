"use client";

import React, { useState } from 'react';
import "../../styles/calculator-tmb.css";
import "../../styles/radio-style.css"; 

const IMCPage: React.FC = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [imc, setIMC] = useState<number | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isChild, setIsChild] = useState(false);

  const calculateIMC = async () => {
    try {
      const url = isChild ? 
        'https://healthhub.criadoresdesoftware.com.br:7125/api/zIMC/calculate' : 
        'https://healthhub.criadoresdesoftware.com.br:7125/api/IMC/calculate';

      const body = JSON.stringify(
        isChild ? 
        { weight: parseFloat(weight), height: parseFloat(height), age: parseInt(age), gender } : 
        { weight: parseFloat(weight), height: parseFloat(height) }
      );

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.Message || 'Erro ao calcular o IMC');
        setIMC(null);
        setCategory(null);
        return;
      }

      const data = await response.json();
      
      setIMC(data.imc);
      setCategory(data.category);
      setError(null);
    } catch (error) {
      console.error('Erro ao calcular o IMC:', error);
      setError('Erro ao calcular o IMC');
      setIMC(null);
      setCategory(null);
    }
  };

  return (
    <div className="form-container">
      <h1>Calculadora de IMC</h1>
      <form className="form" onSubmit={(e) => { e.preventDefault(); calculateIMC(); }}>
        <div className="radio-group">
          <label className="radio-label">
            <input
              type="radio"
              value="adult"
              checked={!isChild}
              onChange={() => setIsChild(false)}
              className="hidden-radio"
            />
            <span className="custom-radio">Adulto</span>
          </label>
          <label className="radio-label">
            <input
              type="radio"
              value="child"
              checked={isChild}
              onChange={() => setIsChild(true)}
              className="hidden-radio"
            />
            <span className="custom-radio">Criança</span>
          </label>
        </div>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Peso (kg)"
          required
        />
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Altura (cm)"
          required
        />
        {isChild && (
          <>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Idade"
              required
            />
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="male">Menino</option>
              <option value="female">Menina</option>
            </select>
          </>
        )}
        <button type="submit">Calcular IMC</button>
      </form>
      {imc !== null && <p>Resultado do IMC: {imc}</p>}
      {category && <p>Categoria: {category}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default IMCPage;