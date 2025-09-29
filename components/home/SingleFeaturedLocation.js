import { MoveUpLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const SingleFeaturedLocation = ({ location }) => {
  return (
    <div className="group cursor-pointer bg-white rounded-lg overflow-hidden">
      {/* Image Container */}
      <Link
        href={`locations/${location.slug}`}
        className="relative overflow-hidden"
      >
        <Image
          src={location.image}
          alt={location.title}
          className="w-full h-[200px] md:h-[220px] object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Arrow Icon */}
        <div className="absolute bottom-0 right-0 bg-[#CF9645] hover:bg-[#B8844A] transition-colors p-2 rounded-tl-md w-[56px] h-[56px] flex justify-center items-center">
          <MoveUpLeft className="h-5 w-5 text-white" />
        </div>
      </Link>

      {/* Content */}
      <div className="space-y-3 p-4 rounded-lg">
        <Link
          href={`locations/${location.slug}`}
          className="text-[#08001E] text-lg md:text-xl font-bold leading-tight group-hover:text-[#CF9645] transition-colors duration-300"
        >
          {location.title}
        </Link>

        <p className="text-[#4C4C4C] text-sm md:text-base font-normal leading-relaxed">
          {location.description}
        </p>
      </div>
    </div>
  );
};

export default SingleFeaturedLocation;
