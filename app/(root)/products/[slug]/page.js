import Banner from '@/components/Banner';
import ProductDetailsContent from '@/components/product-details/ProductDetailsContent';
import product from '@/data/product';

const ProductDetails = async ({ params }) => {
  const { slug } = await params;

  console.log(slug);

  // const productContent = product;
  return (
    <>
      <Banner title={slug} text={slug} />
      <ProductDetailsContent product={product} />
    </>
  );
};

export default ProductDetails;
