import Banner from '@/components/Banner';
import ProductDetailsContent from '@/components/product-details/ProductDetailsContent';
import { getTrailerBySlug } from '@/utils/trailer';

const ProductDetails = async ({ params }) => {
  const { slug } = await params;

  // Use the dynamic slug from params instead of hardcoded value
  const response = await getTrailerBySlug(slug);

  // Handle error or no data
  if (!response?.data?.trailer) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Trailer not found</h2>
        <p className="text-gray-600 mt-2">
          The trailer you're looking for doesn't exist.
        </p>
      </div>
    );
  }

  const trailer = response.data.trailer;

  return (
    <>
      <Banner
        title={trailer.title}
        text={trailer.description || trailer.title}
      />
      <ProductDetailsContent trailer={trailer} />
    </>
  );
};

export default ProductDetails;
