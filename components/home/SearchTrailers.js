'use client';

import { ChevronDown, MoveRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const SearchTrailers = ({ states }) => {
  const [expandedState, setExpandedState] = useState(null);

  const buildLocationLink = (location, latitude, longitude) => {
    const params = new URLSearchParams();
    params.set('location', location);
    params.set('latitude', latitude.toString());
    params.set('longitude', longitude.toString());
    return `/products?${params.toString()}`;
  };

  const toggleState = (stateId) => {
    setExpandedState(expandedState === stateId ? null : stateId);
  };

  if (!states) return null;

  console.log(states);

  return (
    <div className="my-16 lg:my-[120px]">
      <div className="">
        <div className="container mx-auto px-4">
          <div className="mb-[60px]">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-16">
              <div className="max-w-[900px]">
                <h2 className="text-[#08001E] text-[32px] md:text-[48px] font-bold mb-4">
                  Search Trailers By State
                </h2>
              </div>
              <Link
                href="/products"
                className="text-lg md:text-xl text-white font-medium bg-[#CF9645] hover:bg-[#B8844A] transition-colors px-6 md:px-8 py-3 md:py-4 rounded flex justify-center items-center gap-2 whitespace-nowrap w-fit"
              >
                View All
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-5">
            {states?.map((state) => (
              <div key={state.id} className="flex flex-col gap-2">
                {/* State Link */}
                <div className="relative">
                  <Link
                    href={buildLocationLink(
                      `${state.name}, ${state.code}`,
                      state.latitude,
                      state.longitude
                    )}
                    className="text-black text-lg lg:text-[22px] font-medium flex items-center gap-2 bg-[#FAFAFA] hover:bg-gray-100 transition-colors p-4 w-full rounded-md"
                  >
                    {state.name} <MoveRight className="w-4 h-4 mt-1" />
                  </Link>

                  {/* Cities Toggle (if cities exist) */}
                  {state.cities && state.cities.length > 0 && (
                    <button
                      onClick={() => toggleState(state.id)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-200 rounded"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          expandedState === state.id ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* Cities List */}
                {expandedState === state.id &&
                  state.cities &&
                  state.cities.length > 0 && (
                    <div className="pl-4 flex flex-col gap-1">
                      {state.cities.map((city) => (
                        <Link
                          key={city.id}
                          href={buildLocationLink(
                            `${city.name}, ${state.code}`,
                            city.latitude,
                            city.longitude
                          )}
                          className="text-sm text-gray-600 hover:text-[#CF9645] transition-colors py-1"
                        >
                          • {city.name}
                        </Link>
                      ))}
                    </div>
                  )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchTrailers;
