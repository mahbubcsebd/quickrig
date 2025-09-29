import RentImage1 from '@/assets/images/rent-1.png';
import RentImage2 from '@/assets/images/rent-2.png';
import RentImage3 from '@/assets/images/rent-3.png';
import Image from 'next/image';
import Link from 'next/link';

const BrowseType = () => {
  const rentImages = [
    {
      id: 1,
      title: 'image 1',
      image: RentImage1,
      url: '/',
    },
    {
      id: 2,
      title: 'image 2',
      image: RentImage2,
      url: '/',
    },
    {
      id: 3,
      title: 'image 3',
      image: RentImage3,
      url: '/',
    },
  ];

  return (
    <div className="my-16 lg:my-[120px]">
      <div className="py-16 lg:py-[120px] bg-[#FAFAFA]">
        <div className="container">
          <div className="mb-[60px]">
            <div className="flex items-end justify-between gap-16">
              <div className="max-w-[900px]">
                <h2 className="text-[#08001E] text-[48px] font-bold mb-4">
                  Browse By Type
                </h2>
              </div>
              <Link
                href="/"
                className="text-xl text-white font-medium bg-[#CF9645] px-8 py-4 rounded flex justify-center items-center gap-2"
              >
                View All
              </Link>
            </div>
          </div>
          <div className="">
            <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {rentImages.map((rent) => (
                <li key={rent.id}>
                  <Link href={rent.url}>
                    <Image
                      src={rent.image}
                      alt={rent.title}
                      width={500}
                      height={500}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseType;
