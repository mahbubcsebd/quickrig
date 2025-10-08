import Mobile1 from '@/assets/images/mobile-1.png';
import Mobile2 from '@/assets/images/mobile-2.png';
import { Check } from 'lucide-react';
import Image from 'next/image';

const BusinessInsights = () => {
  return (
    <div className="py-16 lg:py-[120px] bg-[#FAFAFA]">
      <div className="container">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center mb-10 lg:mb-20">
          <div className="">
            <Image src={Mobile1} alt="rental" className="w-full" />
          </div>
          <div className="">
            <h3 className="text-[32px] xl:text-[38px] text-[#020D0A] font-semibold mb-6">
              Stay informed with key business insights and trends
            </h3>
            <ul className="grid gap-[18px] mb-6">
              <li className="flex items-center gap-2">
                <p className="w-6 h-6 flex justify-center items-center rounded-full bg-[#CF9645]">
                  <Check className="h-4 w-4 text-white" />
                </p>
                <p className="text-base text-[#353D3B] font-medium">Earnings</p>
              </li>
              <li className="flex items-center gap-2">
                <p className="w-6 h-6 flex justify-center items-center rounded-full bg-[#CF9645]">
                  <Check className="h-4 w-4 text-white" />
                </p>
                <p className="text-base text-[#353D3B] font-medium">Rentals</p>
              </li>
              <li className="flex items-center gap-2">
                <p className="w-6 h-6 flex justify-center items-center rounded-full bg-[#CF9645]">
                  <Check className="h-4 w-4 text-white" />
                </p>
                <p className="text-base text-[#353D3B] font-medium">
                  Page Visits
                </p>
              </li>
              <li className="flex items-center gap-2">
                <p className="w-6 h-6 flex justify-center items-center rounded-full bg-[#CF9645]">
                  <Check className="h-4 w-4 text-white" />
                </p>
                <p className="text-base text-[#353D3B] font-medium">
                  Average Daily Rate
                </p>
              </li>
              <li className="flex items-center gap-2">
                <p className="w-6 h-6 flex justify-center items-center rounded-full bg-[#CF9645]">
                  <Check className="h-4 w-4 text-white" />
                </p>
                <p className="text-base text-[#353D3B] font-medium">
                  Average Rental Days
                </p>
              </li>
            </ul>
            <div className="inline-block text-base text-[#353D3B] font-medium">
              <p>Included with these host plans:</p>
              <ul className="ml-4">
                <li>• ACCELERATE</li>
                <li>• ENTERPRISE</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center mb-12">
          <div className="lg:order-2">
            <Image src={Mobile2} alt="rental" className="w-full" />
          </div>
          <div className="lg:order-1">
            <h3 className="text-[32px] xl:text-[38px] text-[#020D0A] font-semibold mb-6">
              In the Dashboard, see all your future rentals in one convenient
              place
            </h3>
            <ul className="grid gap-[18px] mb-6">
              <li className="flex items-center gap-2">
                <p className="w-6 h-6 flex justify-center items-center rounded-full bg-[#CF9645]">
                  <Check className="h-4 w-4 text-white" />
                </p>
                <p className="text-base text-[#353D3B] font-medium">
                  Color-Coded Monthly Calendar
                </p>
              </li>
              <li className="flex items-center gap-2">
                <p className="w-6 h-6 flex justify-center items-center rounded-full bg-[#CF9645]">
                  <Check className="h-4 w-4 text-white" />
                </p>
                <p className="text-base text-[#353D3B] font-medium">
                  Upcoming rentals ordered by date
                </p>
              </li>
              <li className="flex items-center gap-2">
                <p className="w-6 h-6 flex justify-center items-center rounded-full bg-[#CF9645]">
                  <Check className="h-4 w-4 text-white" />
                </p>
                <p className="text-base text-[#353D3B] font-medium">
                  Hosting Insights
                </p>
              </li>
            </ul>
            <div className="inline-block text-base text-[#353D3B] font-medium">
              <p>Included with these host plans:</p>
              <ul className="ml-4">
                <li>• ACCELERATE</li>
                <li>• ENTERPRISE</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessInsights;
