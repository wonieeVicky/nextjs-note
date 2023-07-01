import { getProducts } from '@/service/products';
import Link from 'next/link';
import styles from './page.module.css';

// export const revalidate = 3;

export default async function ProductsPage() {
  const products = await getProducts();
  const res = await fetch('http://meowfacts.herokuapp.com/', {
    // next: { revalidate: 0 } // 3초마다 정보 갱신하도록 next 설정
    cache: 'no-store'
  });
  const data = await res.json();
  const factText = data.data[0];

  return (
    <>
      <h1>제품 소개 페이지!</h1>
      <ul>
        {products.map(({ id, name }, index) => (
          <li key={index}>
            <Link href={`/products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <article className={styles.article}>{factText}</article>
    </>
  );
}
