import brackes from '@/assets/icons/brackes.svg';
import connector from '@/assets/icons/connector.svg';
import hitch from '@/assets/icons/hitch.svg';
import payload from '@/assets/icons/payload.svg';
import weight from '@/assets/icons/weight.svg';
import Image from 'next/image';

const TrailerSpecifications = () => {
  const specifications = [
    {
      icon: connector,
      label: 'Connector',
      value: '7-WAY',
    },
    {
      icon: brackes,
      label: 'Brakes',
      value: 'YES',
    },
    {
      icon: hitch,
      label: 'Hitch Ball',
      value: (
        <>
          2<sup className="text-xs">5</sup>/<sub className="text-xs">16</sub> IN
        </>
      ),
    },
    {
      icon: weight,
      label: 'Trailer Weight',
      value: '2,265 LBS',
    },
    {
      icon: payload,
      label: 'Max Payload',
      value: '8,135 LBS',
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <div className="bg-white border-2 border-[#020D0A] rounded-2xl p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 relative">
          {specifications.map((spec, index) => (
            <div key={index}>
              <div className="flex flex-col items-center text-center relative">
                <Image src={spec.icon} alt={spec.label} className="mb-6" />
                <div className="text-[#7B7B7B] text-lg mb-2 font-normal">
                  {spec.label}
                </div>
                <div className="text-black text-[32px] font-semibold leading-tight">
                  {spec.value}
                </div>
              </div>

              {/* Vertical divider - only show between items on large screens */}
              {index < specifications.length - 1 && (
                <div
                  className="hidden lg:block absolute top-0 bottom-0 w-px bg-[#020D0A]"
                  style={{
                    left: `${(index + 1) * 20 - 0.1}%`,
                  }}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrailerSpecifications;
