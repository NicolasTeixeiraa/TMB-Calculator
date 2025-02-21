import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/ComponentCalculator.module.css';

const ComponentCreatina: React.FC = () => {
  return (
    <Link href="/calculatorCreatine" passHref style={{ textDecoration: 'none' }}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <Image src="/img/creatina-image.jpg" alt="Creatina" layout="fill" objectFit="cover" className={styles.image} />
          <span className={styles.label}>Calculadora</span>
        </div>
        <div className={styles.content}>
          <h3>CALCULADORA DE CREATINA POR PESO</h3>
          <p>
            <span role="img" aria-label="HealthHub">📊</span> Health Hub &nbsp;
          </p>
          <p className={styles.componentText}>
            Descubra a quantidade ideal de creatina para o seu corpo com base no seu peso. Essa ferramenta ajuda a otimizar a suplementação para melhorar desempenho e recuperação muscular.
          </p>
          <button className={styles.button}>LEIA MAIS</button>
        </div>
      </div>
    </Link>
  );
};

export default ComponentCreatina;