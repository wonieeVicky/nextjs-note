import Link from 'next/link';
import './globals.css';
import styles from './layout.module.css';
import { Open_Sans, Nanum_Gothic } from 'next/font/google';
import { Metadata } from 'next';

const sans = Open_Sans({ subsets: ['latin'] });
const gothic = Nanum_Gothic({ weight: '700', subsets: ['latin'] });

export const metadata: Metadata = {
  title: '멋진 비키 사이트',
  description: '멋진 제품을 비키가 판매한다.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sans.className}>
      <body>
        <header className={styles.header}>
          <h1 className={gothic.className}>Demo Note</h1>
          <nav className={styles.nav}>
            <Link href="/products">Products</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/about">About</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
