import UnlockImage from '@/assets/images/unlock.png';
import Image from 'next/image';
import Link from 'next/link';

const Unlock = () => {
  return (
    <div className="relative">
      <Image
        src={UnlockImage}
        alt="unlock image"
        className="absolute w-full h-full object-cover rounded-lg top-0 left-0 z-0"
      />
      <div className="container relative z-90">
        <div className="max-w-[900px] text-center h-[426px] mx-auto flex flex-col justify-center items-center">
          <h2 className="text-white text-[44px] font-semibold capitalize mb-4">
            Unlock the income hidden in your trailer.
          </h2>
          <p className="text-white text-base font-normal mb-[42px]">
            towlos has your solution
          </p>
          <div>
            <Link
              href="/"
              className="text-xl text-white font-medium bg-[#CF9645] px-8 py-4 rounded flex justify-center items-center gap-2 w-auto"
            >
              Become a Host
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unlock;
