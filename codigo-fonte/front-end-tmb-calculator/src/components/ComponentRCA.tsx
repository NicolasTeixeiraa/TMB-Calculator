import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; 
import styles from '../styles/ComponentCalculator.module.css'; 

const ComponentRCA: React.FC = () => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image src="/img/rca-image.jpg" alt="RCA" layout="fill" objectFit="cover" className={styles.image} />
        <span className={styles.label}>Calculadora</span>
      </div>
      <div className={styles.content}>
        <h3>RELAÇÃO CIRCUNFERÊNCIA ABDOMINAL E ALTURA (RCA)</h3>
        <p>
          <span role="img" aria-label="Calculator">📊</span> Health Hub &nbsp;
        </p>
        <Link href="/calculatorRCA" passHref>
          <button className={styles.button}>LEIA MAIS</button>
        </Link>
      </div>
    </div>
  );
};

export default ComponentRCA;