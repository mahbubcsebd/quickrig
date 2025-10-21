import brackes from '@/assets/icons/brackes.svg';
import connector from '@/assets/icons/connector.svg';
import hitch from '@/assets/icons/hitch.svg';
import payload from '@/assets/icons/payload.svg';
import weight from '@/assets/icons/weight.svg';
import Image from 'next/image';

const TrailerSpecifications = ({ specifications }) => {
  // Parse hitch ball size to format with superscript and subscript
  const formatHitchBall = (size) => {
    if (!size) return 'N/A';

    // Check if it's in format like "2 5/16 IN"
    const parts = size.match(/(\d+)\s+(\d+)\/(\d+)\s*(\w+)/);
    if (parts) {
      return (
        <>
          {parts[1]}
          <sup className="text-xs">{parts[2]}</sup>/
          <sub className="text-xs">{parts[3]}</sub> {parts[4]}
        </>
      );
    }
    return size;
  };

  // Format weight values
  const formatWeight = (value, unit = 'LBS') => {
    if (!value) return 'N/A';
    const numValue = parseFloat(value);
    return `${numValue.toLocaleString()} ${unit}`;
  };

  const specsData = [
    {
      icon: connector,
      label: 'Connector',
      value:
        specifications.electrical_connection ||
        specifications.hitch_type ||
        'N/A',
    },
    {
      icon: brackes,
      label: 'Brakes',
      value: specifications.has_brakes
        ? specifications.brake_type || 'YES'
        : 'NO',
    },
    {
      icon: hitch,
      label: 'Hitch Ball',
      value: formatHitchBall(specifications.hitch_ball_size),
    },
    {
      icon: weight,
      label: 'Trailer Weight',
      value: formatWeight(specifications.trailer_weight),
    },
    {
      icon: payload,
      label: 'Max Payload',
      value: formatWeight(specifications.max_payload),
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
      <div className="bg-white border-2 border-[#020D0A] rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
        {/* Mobile & Tablet Layout (< lg) - 2 columns with dividers */}
        <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:hidden">
          {specsData.map((spec, index) => (
            <>
              <div
                key={index}
                className={`
                  flex flex-col items-center text-center
                  ${index >= 4 ? 'col-span-2' : ''}
                  ${
                    index % 2 === 0 && index < 4
                      ? 'border-r border-[#020D0A] pr-4 sm:pr-6'
                      : 'pl-4 sm:pl-6'
                  }
                  ${index >= 4 ? 'border-t border-[#020D0A] pt-6 sm:pt-8' : ''}
                `}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4 flex items-center justify-center">
                  <Image
                    src={spec.icon}
                    alt={spec.label}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-[#7B7B7B] text-xs sm:text-sm mb-1 sm:mb-2 font-normal">
                  {spec.label}
                </div>
                <div className="text-black text-lg sm:text-xl font-semibold leading-tight break-words max-w-full">
                  {spec.value}
                </div>
              </div>

              {/* Horizontal divider after first 2 items on mobile/tablet */}
              {index === 1 && (
                <div className="col-span-2 border-t border-[#020D0A] my-2 sm:my-3" />
              )}
            </>
          ))}
        </div>

        {/* Desktop Layout (>= lg) - 5 columns with vertical dividers */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-8 xl:gap-12 divide-x divide-[#020D0A]">
          {specsData.map((spec, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-4 xl:px-6 first:pl-0 last:pr-0"
            >
              <div className="w-16 h-16 xl:w-20 xl:h-20 mb-4 xl:mb-6 flex items-center justify-center">
                <Image
                  src={spec.icon}
                  alt={spec.label}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-[#7B7B7B] text-base xl:text-lg mb-2 font-normal">
                {spec.label}
              </div>
              <div className="text-black text-2xl xl:text-[32px] font-semibold leading-tight break-words max-w-full">
                {spec.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrailerSpecifications;
