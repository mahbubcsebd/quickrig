import {
  default as BlogImg1,
  default as BlogImg4,
} from '@/assets/images/blog-1.png';
import BlogImg2 from '@/assets/images/blog-2.png';
import BlogImg3 from '@/assets/images/blog-3.png';
import Link from 'next/link';
import SingleFeaturedLocation from './SingleFeaturedLocation';

const FeaturedLocations = () => {
  const locations = [
    {
      id: 1,
      image: BlogImg1,
      title: 'Atlanta',
      description: 'Hotlanta has southern charm, and endless trees!',
      slug: 'atlanta',
    },
    {
      id: 2,
      image: BlogImg2,
      title: 'Phoenix',
      description: 'Desert vibes, and epic sunsets Phoenix brings the heat!',
      slug: 'phoenix',
    },
    {
      id: 3,
      image: BlogImg3,
      title: 'Nashville',
      description: "Big city swagger, BBQ, and everything's bigger in Dallas!",
      slug: 'nashville',
    },
    {
      id: 4,
      image: BlogImg4,
      title: 'Dallas',
      description:
        'Music City, hot chicken, honky-tonks, and pure Southern fun.',
      slug: 'dallas',
    },
  ];

  return (
    <div className="mb-16 lg:mb-[120px]">
      <div className="py-16 lg:py-[120px] bg-[#FAFAFA]">
        <div className="container mx-auto px-4">
          <div className="mb-[60px]">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-16">
              <div className="max-w-[900px]">
                <h2 className="text-[#08001E] text-[32px] md:text-[48px] font-bold mb-4">
                  Featured Locations
                </h2>
              </div>
              <Link
                href="/"
                className="text-lg md:text-xl text-white font-medium bg-[#CF9645] hover:bg-[#B8844A] transition-colors px-6 md:px-8 py-3 md:py-4 rounded flex justify-center items-center gap-2 whitespace-nowrap w-fit"
              >
                View All
              </Link>
            </div>
          </div>

          {/* Location Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {locations.map((location) => (
              <SingleFeaturedLocation key={location.id} location={location} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedLocations;
