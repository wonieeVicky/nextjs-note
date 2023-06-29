import { getProduct, getProducts } from '@/service/products';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `제품 이름: ${params.slug}`
  };
}

export default function PantsPage({ params: { slug } }: Props) {
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  // 서버 파일에 있는 데이터 중 해당 제품의 정보를 찾아와 그 정보를 보여준다.
  return <h1>{product} 제품 설명 페이지</h1>;
}

// 미리 페이지를 만들어두고 싶은 경우 generateStaticParams 함수를 사용한다.
export function generateStaticParams() {
  // 모든 제품의 페이지들을 미리 만들어 두도록 설정함(SSG)
  const products = getProducts();
  return products.map((product) => ({
    slug: product
  }));
}
