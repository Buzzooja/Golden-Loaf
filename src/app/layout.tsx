// src/app/layout.tsx

import React from 'react';
import { ReactNode } from 'react';
import { GiBread } from 'react-icons/gi';
import Link from 'next/link';
import './globals.css'; // Ensure you import global CSS here
import styles from './layout.module.css';

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Golden Loaf</title>
      </head>
      <body>
        <div className={styles.container}>
          <header className={styles.header}>
            <div className={styles.logo}>
              <GiBread size={40} className={styles.logoIcon}/>
              <span className={styles.logoText}>Golden Loaf</span>
            </div>
            <nav>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/menu">Menu</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/gallery">Gallery</Link></li>
              </ul>
            </nav>
          </header>

          <main className={styles.main}>
            {children}
          </main>

          <footer className={styles.footer}>
            <p>&copy; {new Date().getFullYear()} Golden Loaf. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
