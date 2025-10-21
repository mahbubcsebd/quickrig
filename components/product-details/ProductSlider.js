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

const ProductSlider = ({ images, video_link, previewStyle }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

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
            thumbs={{ swiper: thumbsSwiper }}
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
          <div className={video_link ? 'col-span-9' : 'col-span-12'}>
            <div
              className={`slider-thumb ${
                previewStyle === 'landscape' ? 'landscape-thumb' : ''
              }`}
            >
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={video_link ? 3 : 4}
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
                      className="w-full h-full"
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
