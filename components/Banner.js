import BannerImg from '@/assets/images/banner.png';
import Image from 'next/image';

const Banner = ({ title, text }) => {
  return (
    <div className="relative m-4 h-[405px] rounded-lg overflow-hidden">
      {/* Background Image */}
      <Image
        src={BannerImg}
        alt="banner image"
        className="absolute w-full h-full object-cover rounded-lg top-0 left-0 z-0"
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/10 z-10" />

      {/* Content */}
      <div className="container relative z-20">
        <div className="h-[405px] flex justify-center items-center">
          <div className="text-center">
            <h1 className="text-7xl text-white font-bold mb-8 capitalize">
              {title}
            </h1>
            <p className="text-[20px] text-white font-normal max-w-[900px] mx-auto">
              {text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
