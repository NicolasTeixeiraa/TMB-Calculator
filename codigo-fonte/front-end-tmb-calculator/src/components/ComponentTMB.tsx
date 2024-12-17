import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; 
import styles from '../styles/ComponentCalculator.module.css'; 

const ComponentTMB: React.FC = () => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image src="/img/tmb-image.jpg" alt="TMB" layout="fill" objectFit="cover" className={styles.image} />
        <span className={styles.label}>Calculadora</span>
      </div>
      <div className={styles.content}>
        <h3>CALCULADORA DE METABOLISMO BASAL (TMB)</h3>
        <p>
          <span role="img" aria-label="Calculator">📊</span> Health Hub &nbsp;
        </p>
        <Link href="/calculatorTMB" passHref>
          <button className={styles.button}>LEIA MAIS</button>
        </Link>
      </div>
    </div>
  );
};

export default ComponentTMB;