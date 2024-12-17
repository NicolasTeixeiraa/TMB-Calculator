import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/ComponentCalculator.module.css'; 

const ComponentCreatina: React.FC = () => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image src="/img/creatina-image.jpg" alt="TMB" layout="fill" objectFit="cover" className={styles.image} /><Image src="/img/creatina-image.jpg" alt="TMB" layout="fill" objectFit="cover" className={styles.image} />
        <span className={styles.label}>Calculadora</span>
      </div>
      <div className={styles.content}>
        <h3>CALCULADORA DE CREATINA POR PESO</h3>
        <p>
          <span role="img" aria-label="HealthHub">📊</span> Health Hub &nbsp;
        </p>
        <Link href="/calculatorCreatine" passHref>
          <button className={styles.button}>LEIA MAIS</button>
        </Link>
      </div>
    </div>
  );
};

export default ComponentCreatina;