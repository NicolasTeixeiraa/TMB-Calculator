'use client';

import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "../components/Header";
import "../styles/globals.css";
import Head from "next/head";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { metadata as staticMetadata } from './metadata'; 

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const title = String(staticMetadata.title || "Default Title");
  const description = String(staticMetadata.description || "Default description");
  const pathname = usePathname(); 
  const [showHeader, setShowHeader] = useState(false); 
  const defaultPaddingTop = '20px';
  const [paddingTop, setPaddingTop] = useState(defaultPaddingTop); 

  useEffect(() => {
    setShowHeader(pathname !== '/login'); 
    setPaddingTop(pathname !== '/login' ? '80px' : defaultPaddingTop); 
  }, [pathname]);

  return (
    <html lang="en">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ margin: 0 }}
      >
        {showHeader && <Header />}
        <main style={{
          paddingTop: paddingTop,
          paddingRight: '20px',   
          paddingBottom: '20px',  
          paddingLeft: '20px'    
        }}>
          {children}
        </main>
      </body>
    </html>
  );
}