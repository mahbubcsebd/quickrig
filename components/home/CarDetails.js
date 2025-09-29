import Wheel from '@/assets/images/wheel.png';
import { Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const CarDetails = () => {
  return (
    <div>
      <div className="container">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 items-center mb-12">
          <div className="">
            <Image src={Wheel} alt="rental" className="w-full" />
          </div>
          <div className="text-[32px] text-[#020D0A] font-semibold mb-4">
            <h3 className="">Justin's 2024 Lamar Car Hauler - $100/day</h3>
            <p className="text-base text-[#353D3B] font-normal mb-8">
              This brand new 20ft Lamar car hauler is ready for whatever you
              need to move—whether it’s a car, side-by-side, small tractor, or
              project vehicle. Easy to load, secure, and tow.
            </p>
            <ul className="grid gap-[18px] mb-6">
              <li className="flex items-center gap-2">
                <p className="w-6 h-6 flex justify-center items-center rounded-full bg-[#CF9645]">
                  <Check className="h-4 w-4 text-white" />
                </p>
                <p className="text-base text-[#353D3B] font-medium">
                  83" between wheel wells – fits most vehicles
                </p>
              </li>
              <li className="flex items-center gap-2">
                <p className="w-6 h-6 flex justify-center items-center rounded-full bg-[#CF9645]">
                  <Check className="h-4 w-4 text-white" />
                </p>
                <p className="text-base text-[#353D3B] font-medium">
                  Electric winch + multiple tie-down points
                </p>
              </li>
              <li className="flex items-center gap-2">
                <p className="w-6 h-6 flex justify-center items-center rounded-full bg-[#CF9645]">
                  <Check className="h-4 w-4 text-white" />
                </p>
                <p className="text-base text-[#353D3B] font-medium">
                  Toolbox and spare tire included
                </p>
              </li>
              <li className="flex items-center gap-2">
                <p className="w-6 h-6 flex justify-center items-center rounded-full bg-[#CF9645]">
                  <Check className="h-4 w-4 text-white" />
                </p>
                <p className="text-base text-[#353D3B] font-medium">
                  Delivery options available
                </p>
              </li>
            </ul>
            <div className="inline-block">
              <Link
                href="/"
                className="text-xl text-white font-medium bg-[#CF9645] px-8 py-4 rounded flex justify-center items-center gap-2 w-auto"
              >
                Trailer Page
              </Link>
            </div>
          </div>
        </div>
        {/* <TrailerSpecifications /> */}
      </div>
    </div>
  );
};

export default CarDetails;
