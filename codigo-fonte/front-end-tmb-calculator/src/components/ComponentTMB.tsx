import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/ComponentCalculator.module.css';

const ComponentTMB: React.FC = () => {
  return (
    <Link href="/calculatorTMB" passHref style={{ textDecoration: 'none' }}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <Image src="/img/tmb-image.jpg" alt="TMB" layout="fill" objectFit="cover" className={styles.image} />
          <span className={styles.label}>Calculadora</span>
        </div>
        <div className={styles.content}>
          <h3>TAXA METABÓLICA BASAL (TMB)</h3>
          <p>
            <span role="img" aria-label="Calculator">📊</span> Health Hub &nbsp;
          </p>
          <p className={styles.componentText}>
            Descubra quantas calorias seu corpo precisa em repouso para manter suas funções vitais. Essa informação é essencial para planejar sua alimentação e atingir seus objetivos de saúde.
          </p>
          <button className={styles.button}>LEIA MAIS</button>
        </div>
      </div>
    </Link>
  );
};

export default ComponentTMB;