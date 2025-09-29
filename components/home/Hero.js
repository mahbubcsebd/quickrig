import HeroIMage from '@/assets/images/hero.png';
import Image from 'next/image';
import SearchBar from './SearchBar';

const Hero = () => {
  return (
    <div className="hero relative m-4 h-[660px] rounded-lg overflow-hidden">
      {/* Background Image */}
      <Image
        src={HeroIMage}
        alt="hero image"
        className="absolute w-full h-full object-cover rounded-lg top-0 left-0 z-0"
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/10 z-10" />

      {/* Content */}
      <div className="container relative z-20">
        <div className="h-[660px] flex justify-center items-center">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Hero;
