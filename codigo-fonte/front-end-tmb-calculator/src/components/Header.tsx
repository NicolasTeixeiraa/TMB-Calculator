'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link
        href="/home"
        className={styles.link}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = '#a0d4ff';
          const img = e.currentTarget.querySelector('img');
          if (img) {
            img.style.transform = 'scale(1.1)';
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = '#fff';
          const img = e.currentTarget.querySelector('img');
          if (img) {
            img.style.transform = 'scale(1)';
          }
        }}
      >
        <Image
          src="/img/serotonina.jpg"
          alt="Serotonina"
          width={50}
          height={50}
          className={styles.logo}
        />
        <div className={styles.title}>
          Health Hub
        </div>
      </Link>
    </header>
  );
};

export default Header;