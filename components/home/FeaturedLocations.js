'use client';

import {
  default as BlogImg1,
  default as BlogImg4,
} from '@/assets/images/blog-1.png';
import BlogImg2 from '@/assets/images/blog-2.png';
import BlogImg3 from '@/assets/images/blog-3.png';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SingleFeaturedLocation from './SingleFeaturedLocation';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

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
    {
      id: 5,
      image: BlogImg1,
      title: 'Atlanta',
      description: 'Hotlanta has southern charm, and endless trees!',
      slug: 'atlanta',
    },
    {
      id: 6,
      image: BlogImg2,
      title: 'Phoenix',
      description: 'Desert vibes, and epic sunsets Phoenix brings the heat!',
      slug: 'phoenix',
    },
  ];

  return (
    <div className="mb-16 lg:mb-[120px]">
      <div className="py-16 lg:py-[120px] bg-[#FAFAFA]">
        <div className="container mx-auto px-4">
          <div className="mb-8 md:mb-12 lg:mb-[60px]">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 md:gap-6 lg:gap-16">
              <div className="w-full sm:max-w-[600px] lg:max-w-[900px]">
                <h2 className="text-[#08001E] text-3xl md:text-4xl lg:text-5xl xl:text-[48px] font-bold capitalize leading-tight">
                  Featured Locations
                </h2>
              </div>

              {/* Custom Navigation Buttons */}
              <div className="flex items-center gap-3 sm:flex-shrink-0">
                <button className="location-swiper-button-prev w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border-2 border-[#CF9645] text-[#CF9645] hover:bg-[#CF9645] hover:text-white transition-all duration-300 rounded">
                  <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                </button>
                <button className="location-swiper-button-next w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#CF9645] text-white hover:bg-[#B8844A] transition-all duration-300 rounded">
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Location Cards Swiper */}
          <div className="featured-locations-slider">
            <Swiper
              modules={[Navigation]}
              spaceBetween={32}
              slidesPerView={1}
              navigation={{
                prevEl: '.location-swiper-button-prev',
                nextEl: '.location-swiper-button-next',
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 32,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 32,
                },
              }}
              className="location-swiper"
            >
              {locations.map((location) => (
                <SwiperSlide key={location.id}>
                  <SingleFeaturedLocation location={location} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedLocations;
