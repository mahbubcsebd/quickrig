import CheckoutForm from './CheckoutForm';
import CheckoutOrder from './CheckoutOrder';

const CheckoutContent = () => {
  return (
    <div className="chackout-page py-8 md:py-12 lg:py-16 xl:py-[120px]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Checkout Form - Full width on mobile, 8 cols on large screens */}
          <div className="lg:col-span-8">
            <div className="bg-[#FAFAFA] p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl">
              <CheckoutForm />
            </div>
          </div>

          {/* Checkout Order - Full width on mobile, 4 cols on large screens */}
          <div className="lg:col-span-4">
            <div className="bg-[#FAFAFA] p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl">
              <CheckoutOrder />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutContent;
