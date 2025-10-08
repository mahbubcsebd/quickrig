import BusinessImage from '@/assets/images/business.png';
import { Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
// import TrailerSpecifications from './TrailerSpecifications';

const RunningBusiness = () => {
  return (
    <div className="py-16 lg:py-[120px]">
      <div className="container">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center">
          <div className="max-h-[550px] overflow-hidden">
            <Image
              src={BusinessImage}
              alt="rental"
              className="w-full max-h-full"
            />
          </div>
          <div className="">
            <h3 className="text-[32px] xl:text-[38px] text-[#020D0A] font-semibold mb-4">
              Just Getting Started?
            </h3>
            <p className="text-base text-[#353D3B] font-normal mb-8">
              Wherever you start, Quickricplans provide everything you need to
              grow your business.
            </p>
            <h3 className="text-[32px] xl:text-[38px] text-[#020D0A] font-semibold mb-4">
              Running a Business Now?
            </h3>
            <p className="text-base text-[#353D3B] font-normal mb-8">
              Wherever you start, Quickric plans provide everything you need to
              grow your business.
            </p>
            <ul className="grid gap-[18px] mb-6">
              <li className="flex items-center gap-2">
                <p className="w-6 h-6 flex justify-center items-center rounded-full bg-[#CF9645]">
                  <Check className="h-4 w-4 text-white" />
                </p>
                <p className="text-base text-[#353D3B] font-medium">
                  Earn passive income by renting out your trailers or equipment.
                </p>
              </li>
              <li className="flex items-center gap-2">
                <p className="w-6 h-6 flex justify-center items-center rounded-full bg-[#CF9645]">
                  <Check className="h-4 w-4 text-white" />
                </p>
                <p className="text-base text-[#353D3B] font-medium">
                  Control your availability, pricing, and rental terms.
                </p>
              </li>
              <li className="flex items-center gap-2">
                <p className="w-6 h-6 flex justify-center items-center rounded-full bg-[#CF9645]">
                  <Check className="h-4 w-4 text-white" />
                </p>
                <p className="text-base text-[#353D3B] font-medium">
                  Get visibility with thousands of verified renters nationwide.
                </p>
              </li>
              <li className="flex items-center gap-2">
                <p className="w-6 h-6 flex justify-center items-center rounded-full bg-[#CF9645]">
                  <Check className="h-4 w-4 text-white" />
                </p>
                <p className="text-base text-[#353D3B] font-medium">
                  We handle secure payments and customer support.
                </p>
              </li>
              <li className="flex items-center gap-2">
                <p className="w-6 h-6 flex justify-center items-center rounded-full bg-[#CF9645]">
                  <Check className="h-4 w-4 text-white" />
                </p>
                <p className="text-base text-[#353D3B] font-medium">
                  Zero listing fees. No hidden charges.
                </p>
              </li>
            </ul>
            <div className="inline-block">
              <Link
                href="/"
                className="text-xl text-white font-medium bg-[#CF9645] px-8 py-4 rounded flex justify-center items-center gap-2 w-auto"
              >
                Choose Your Plan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RunningBusiness;
