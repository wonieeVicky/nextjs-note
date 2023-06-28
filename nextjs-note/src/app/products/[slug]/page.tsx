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

export default function PantsPage({ params }: Props) {
  if (params.slug === 'nothing') {
    notFound();
  }
  return <div>{params.slug} 제품 설명 페이지</div>;
}

// 미리 페이지를 만들어두고 싶은 경우 generateStaticParams 함수를 사용한다.
export function generateStaticParams() {
  const products = ['pants', 'skirt'];
  return products.map((product) => ({
    slug: product
  }));
}
