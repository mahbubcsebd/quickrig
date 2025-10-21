import RentImage1 from '@/assets/images/rent-1.png';
import RentImage2 from '@/assets/images/rent-2.png';
import RentImage3 from '@/assets/images/rent-3.png';
import RentCard from '../RentCard';
import TopTitle from '../TopTitle';

const RelatedProducts = () => {
  const rentImages = [
    {
      id: 1,
      title: 'Commercial Truck',
      image: RentImage1,
      url: '/',
      description:
        'Heavy-duty commercial trucks for large cargo transportation',
    },
    {
      id: 2,
      title: 'Car Hauler',
      image: RentImage2,
      url: '/',
      description: 'Specialized car hauler trailers for vehicle transportation',
    },
    {
      id: 3,
      title: 'Construction Equipment',
      image: RentImage3,
      url: '/',
      description: 'Track loaders and construction equipment for any job site',
    },
  ];

  return (
    <div className="mt-16 lg:mt-[120px]">
      <div className="py-16 lg:py-[120px] bg-[#FAFAFA]">
        <div className="container">
          <TopTitle
            title="Our Rental Equipment"
            btnText="View All"
            href="/rent-equipment"
          />
          <div className="">
            <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {rentImages.map((rent) => (
                <RentCard key={rent.id} rent={rent} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
