type Props = {
  params: {
    slug: string;
  };
};

export default function PantsPage({ params }: Props) {
  return <div>{params.slug} 제품 설명 페이지</div>;
}

// 미리 페이지를 만들어두고 싶은 경우 generateStaticParams 함수를 사용한다.
export function generateStaticParams() {
  const products = ['pants', 'skirt'];
  return products.map((product) => ({
    slug: product
  }));
}
