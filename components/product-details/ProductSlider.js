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

const ProductSlider = ({ product, previewStyle }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { images, video_link } = product;

  return (
    <div className="product-slider">
      {images && images.length > 0 ? (
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
            {images.map((image, index) => (
              <SwiperSlide key={index} className="relative">
                <div className="relative w-full h-full overflow-hidden">
                  <ImageMagnifier
                    src={image.src}
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
        <Image
          src={noAvailable}
          alt="hero slider"
          width={100}
          height={100}
          className="w-full h-full"
        />
      )}
      <div className="grid items-stretch grid-cols-12 gap-2 xxl:gap-3">
        {images && (
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
                {images.map((thumbImg, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={thumbImg.src}
                      alt="preview slider"
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
