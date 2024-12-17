import React from 'react';
import styles from '../../styles/Login.module.css';

const LoginPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h2 className={styles.loginTitle}>Faça login na sua conta</h2>
        <form>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel} htmlFor="email">E-mail</label>
            <input className={styles.inputField} type="email" id="email" name="email" required />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel} htmlFor="password">Senha</label>
            <input className={styles.inputField} type="password" id="password" name="password" required />
          </div>
          <button type="submit" className={styles.loginButton}>Entrar</button>
        </form>
        <div className={styles.links}>
          <a href="/voltar">Voltar</a>
          <a href="/esqueceu-senha">Esqueceu sua senha?</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;