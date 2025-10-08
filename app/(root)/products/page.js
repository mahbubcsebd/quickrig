import Banner from '@/components/Banner';
import RentEquipmentContent from '@/components/rent-equipment/RentEquipmentContent';
import { Suspense } from 'react';

const RentEquipmentPage = () => {
  return (
    <>
      <Banner
        title="Product"
        text="The inspiration for creating the world's first exclusive trailer sharing marketplace..."
      />
      <Suspense
        fallback={<div className="container mx-auto px-4 py-8">Loading...</div>}
      >
        <RentEquipmentContent />
      </Suspense>
    </>
  );
};

export default RentEquipmentPage;
