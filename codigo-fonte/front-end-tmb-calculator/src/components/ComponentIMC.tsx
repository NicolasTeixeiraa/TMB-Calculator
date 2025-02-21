import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/ComponentCalculator.module.css';

const ComponentIMC: React.FC = () => {
  return (
    <Link href="/calculatorIMC" passHref style={{ textDecoration: 'none' }}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <Image src="/img/imc-image.jpg" alt="IMC" layout="fill" objectFit="cover" className={styles.image} />
          <span className={styles.label}>Calculadora</span>
        </div>
        <div className={styles.content}>
          <h3>ÍNDICE DE MASSA CORPORAL (IMC)</h3>
          <p>
            <span role="img" aria-label="Calculator">📊</span> Health Hub &nbsp;
          </p>
          <p className={styles.componentText}>
            Calcule seu IMC e avalie rapidamente se seu peso está dentro da faixa considerada saudável. Uma ferramenta simples para auxiliar no monitoramento do seu bem-estar.
          </p>
          <button className={styles.button}>LEIA MAIS</button>
        </div>
      </div>
    </Link>
  );
};

export default ComponentIMC;