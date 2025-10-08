import UnlockImage from '@/assets/images/unlock.png';
import Image from 'next/image';
import Link from 'next/link';

const Partnership = () => {
  return (
    <div className="relative">
      <Image
        src={UnlockImage}
        alt="unlock image"
        className="absolute w-full h-full object-cover rounded-lg top-0 left-0 z-0"
      />
      <div className="container relative z-90">
        <div className="max-w-[900px] text-center h-[426px] mx-auto flex flex-col justify-center items-center">
          <h2 className="text-white text-4xl lg:text-[44px] font-semibold capitalize mb-4">
            Featured Partnership
          </h2>
          <p className="text-white text-base font-normal mb-[42px]">
            We're excited to partner with the largest, most passionate community
            of hustlers in the US.
          </p>
          <div>
            <Link
              href="/"
              className="text-lg lg:text-xl text-white font-medium bg-[#CF9645] px-8 py-4 rounded flex justify-center items-center gap-2 w-auto"
            >
              Join Our Community
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partnership;
