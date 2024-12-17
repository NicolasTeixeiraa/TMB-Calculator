import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; 

const Header: React.FC = () => {
  return (
    <header style={{
      width: '100%',
      padding: '10px 20px',
      background: '#0070f3',
      color: '#fff',
      display: 'flex',
      justifyContent: 'flex-start', 
      alignItems: 'center',
    }}>
      <Image 
        src="/img/serotonina.jpg" 
        alt="Serotonina" 
        width={50} 
        height={50} 
        style={{ marginRight: '10px' }} 
      />
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
        <Link href="/home" style={{ color: '#fff', textDecoration: 'none' }}>
          Health Hub
        </Link>
      </div>
    </header>
  );
};

export default Header;