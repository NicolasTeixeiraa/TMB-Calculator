import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/ComponentCalculator.module.css';

const ComponentRCA: React.FC = () => {
  return (
    <Link href="/calculatorRCA" passHref style={{ textDecoration: 'none' }}>
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
          <p className={styles.componentText}>
            Verifique a proporção entre sua circunferência abdominal e sua altura para avaliar possíveis riscos metabólicos. Um método prático para monitorar a saúde cardiovascular.
          </p>
          <button className={styles.button}>LEIA MAIS</button>
        </div>
      </div>
    </Link>
  );
};

export default ComponentRCA;