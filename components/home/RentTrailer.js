'use client';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import TopTitle from '../TopTitle';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import RentCard from '../RentCard';

const RentTrailer = ({ trailers }) => {
  console.log('helooooooooooooooooooxxxooo ', trailers);
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
            {trailers.map((trailer) => (
              <SwiperSlide key={trailer.id}>
                <RentCard trailer={trailer} />
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
