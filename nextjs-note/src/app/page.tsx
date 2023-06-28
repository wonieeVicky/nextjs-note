import Image from 'next/image';
import styles from './page.module.css';
import os from 'os'; // 노드 APIs

export default function Home() {
  console.log('hi!?');
  console.log(os.hostname());

  return <h1>홈페이지!</h1>;
}
