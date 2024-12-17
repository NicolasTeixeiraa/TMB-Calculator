import React from 'react';
import ComponentTMB from '../../components/ComponentTMB';
import ComponentIMC from '../../components/ComponentIMC';
import ComponentRCA from '../../components/ComponentRCA';
import ComponentCreatina from '../../components/ComponentCreatina';
import styles from '../../styles/HomePage.module.css'; 

const HomePage: React.FC = () => {
  return (
    <div>
      <h2 className={styles.title}>NOSSAS CALCULADORAS</h2>
      <p className={styles.subtitle}></p>
      <div className={styles.grid}>
        <ComponentTMB />
        <ComponentIMC />
        <ComponentRCA />
        <ComponentCreatina />
      </div>
    </div>
  );
};

export default HomePage;