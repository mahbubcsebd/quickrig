'use client';

import RentImage1 from '@/assets/images/rent-1.png';
import RentImage2 from '@/assets/images/rent-2.png';
import RentImage3 from '@/assets/images/rent-3.png';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import TopTitle from '../TopTitle';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const RentTrailer = () => {
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
    {
      id: 4,
      title: 'Commercial Truck',
      image: RentImage1,
      url: '/',
      description:
        'Heavy-duty commercial trucks for large cargo transportation',
    },
    {
      id: 5,
      title: 'Car Hauler',
      image: RentImage2,
      url: '/',
      description: 'Specialized car hauler trailers for vehicle transportation',
    },
    {
      id: 6,
      title: 'Construction Equipment',
      image: RentImage3,
      url: '/',
      description: 'Track loaders and construction equipment for any job site',
    },
  ];

  return (
    <div className="mb-16 lg:mb-[120px]">
      <div className="container">
        <TopTitle
          title="Rent Trailers for Any Need"
          text="Explore our rapidly growing selection of car haulers to dump trailers and everything in between. Wherever you are, whatever the job, we have the perfect fit."
          btnText="Search Trailers"
          href="/"
        />

        <div className="rent-trailer-slider">
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={32}
            slidesPerView={1}
            pagination={{
              clickable: true,
              el: '.custom-pagination',
              bulletClass: 'custom-bullet',
              bulletActiveClass: 'custom-bullet-active',
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 32,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
            className="rent-swiper"
          >
            {rentImages.map((rent) => (
              <SwiperSlide key={rent.id}>
                <div className="rent-slide group">
                  <Link href={rent.url}>
                    <div className="relative overflow-hidden rounded-lg">
                      <Image
                        src={rent.image}
                        alt={rent.title}
                        width={500}
                        height={300}
                        className="w-full h-[600px] object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Hover overlay with gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Content overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-10 text-white transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="max-w-[250px]">
                          <h3 className="text-2xl font-semibold mb-2">
                            {rent.title}
                          </h3>
                          <p className="text-base text-gray-200 mb-4">
                            {rent.description}
                          </p>
                        </div>
                        <Link
                          href={`/rent-details/${rent.id}`}
                          className="text-xl font-medium px-6 py-2 rounded flex justify-center items-center gap-2 transition-colors duration-200 capitalize border border-[#CF9645] text-[#CF9645] hover:bg-[#CF9645] hover:text-white"
                        >
                          Book Now
                        </Link>
                      </div>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom pagination dots */}
          <div className="custom-pagination flex justify-center items-center gap-2 mt-8"></div>
        </div>
      </div>

      <style jsx global>{`
        .rent-trailer-slider .swiper-slide {
          height: auto;
        }

        /* Custom pagination styles */
        .custom-pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          margin-top: 32px;
        }

        .custom-bullet {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: #d1d5db;
          cursor: pointer;
          transition: all 0.3s ease;
          opacity: 1;
        }

        .custom-bullet:hover {
          background-color: #9ca3af;
          transform: scale(1.1);
        }

        .custom-bullet-active {
          width: 16px;
          height: 16px;
          background-color: #d97706;
          transform: scale(1);
        }

        .custom-bullet-active:hover {
          transform: scale(1.1);
        }

        /* Responsive adjustments for pagination */
        @media (max-width: 640px) {
          .custom-bullet {
            width: 10px;
            height: 10px;
          }

          .custom-bullet-active {
            width: 14px;
            height: 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default RentTrailer;
