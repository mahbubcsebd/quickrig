import Banner from '@/components/Banner';
import CheckoutContent from '@/components/checkout/CheckoutContent';

const CheckoutPage = () => {
  return (
    <div className="">
      <Banner
        title="Check Out"
        text="The inspiration for creating the world's first exclusive trailer sharing marketplace..."
      />
      <CheckoutContent />
    </div>
  );
};

export default CheckoutPage;
