'use client';

import noAvailable from '@/assets/icons/no-available.svg';
import Image from 'next/image';
import { useState } from 'react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ImageMagnifier from './ImageMagnifier';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './productSlider.css';

const ProductSlider = ({ previewStyle }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // Static images array with container truck images from Unsplash
  const images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80',
      alt: 'Container truck on highway',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80',
      alt: 'Shipping containers on truck',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
      alt: 'Container transport vehicle',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=80',
      alt: 'Freight container truck',
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1566933293069-b55c7f326dd4?w=800&q=80',
      alt: 'Container delivery truck',
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800&q=80',
      alt: 'Industrial container truck',
    },
  ];

  // Filter out images with invalid src
  const validImages = images?.filter((img) => img.src) || [];

  return (
    <div className="product-slider">
      {validImages.length > 0 ? (
        <div
          className={`w-full lg:rounded-2xl overflow-hidden mb-4 h-[420px] sm:h-[600px] md:h-[880px] lg:h-[550px] xl:h-[530px]: 2xl:h-[900px]`}
        >
          <Swiper
            spaceBetween={10}
            navigation={true}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Navigation, Thumbs]}
            passiveListeners={true}
            className="w-full h-full"
          >
            {validImages.map((image, index) => (
              <SwiperSlide
                key={image.id || `slide-${index}`}
                className="relative"
              >
                <div className="relative w-full h-full overflow-hidden">
                  <ImageMagnifier
                    src={image.src}
                    alt={image.alt || `Image ${index + 1}`}
                    width={400}
                    height={550}
                    zoomLevel={2.5}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div
          className={`w-full lg:rounded-2xl overflow-hidden mb-4 h-[420px] sm:h-[600px] md:h-[880px] lg:h-[550px] xl:h-[530px]: 2xl:h-[900px]`}
        >
          <Image
            src={noAvailable}
            alt="hero slider"
            width={100}
            height={100}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="grid items-stretch grid-cols-12 gap-2 xxl:gap-3">
        {validImages.length > 0 && (
          <div className="col-span-12">
            <div
              className={`slider-thumb ${
                previewStyle === 'landscape' ? 'landscape-thumb' : ''
              }`}
            >
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                navigation={true}
                watchSlidesProgress={true}
                passiveListeners={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
              >
                {validImages.map((thumbImg, index) => (
                  <SwiperSlide key={thumbImg.id || `thumb-${index}`}>
                    <Image
                      src={thumbImg.src}
                      alt={thumbImg.alt || `Thumbnail ${index + 1}`}
                      width={150}
                      height={150}
                      className="w-full h-full object-cover cursor-pointer"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductSlider;
