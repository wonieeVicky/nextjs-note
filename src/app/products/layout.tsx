﻿import React from 'react';
import styles from './layout.module.css';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '멋진 비키 사이트 | 제품 확인',
  description: '멋진 제품을 확인해보세요.'
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/products/women">여성옷</Link>
        <Link href="/products/man">남성옷</Link>
      </nav>
      <section className={styles.product}>{children}</section>
    </>
  );
}
