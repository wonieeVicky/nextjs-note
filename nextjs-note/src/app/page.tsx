import Image from 'next/image';
import styles from './page.module.css';
import os from 'os';
import Counter from '@/components/Counter';

export default function Home() {
  console.log('hi! - server component');
  console.log(os.hostname());

  return (
    <>
      <h1>홈페이지!</h1>
      <Counter />
    </>
  );
}
