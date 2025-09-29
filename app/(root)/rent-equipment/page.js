import Banner from '@/components/Banner';
import TowlosGallery from '@/components/rent-equipment/TowlosGallery';

const RentEquipmentPage = () => {
  return (
    <>
      <Banner
        title="Product"
        text="The inspiration for creating the world's first exclusive trailer sharing marketplace..."
      />
      <TowlosGallery />
    </>
  );
};

export default RentEquipmentPage;
