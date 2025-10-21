'use client';

import { Bookmark, ChevronDown, Heart, Share2 } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const RentalBooking = ({ data }) => {
  const [startDate, setStartDate] = useState('2025-09-28');
  const [endDate, setEndDate] = useState('2025-09-30');
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  // Calculate total amount
  const calculateTotal = () => {
    if (!startDate || !endDate) return 0;
    const start = new Date(startDate);
    const end = new Date(endDate);
    const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    return days > 0 ? days * data.pricing.amount : 0;
  };

  const totalAmount = calculateTotal();
  const numberOfDays = Math.ceil(
    (new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className="">
      {/* Image Section */}
      <div className="relative">
        <Image
          src={data.image}
          alt={data.title}
          className="w-full h-40 sm:h-44 md:h-48 object-cover rounded-xl sm:rounded-2xl"
          width={600}
          height={300}
        />
      </div>

      {/* Content Section */}
      <div className="p-4 sm:p-5 md:p-6">
        {/* Header with Actions */}
        <div className="flex items-center justify-between mb-4 sm:mb-5 md:mb-6">
          <div className="flex items-center gap-2 sm:gap-3">
            <Image
              src={data.logo}
              alt={data.title}
              className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12"
              width={48}
              height={48}
            />
            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-black">
              {data.company}
            </h3>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className="flex items-center gap-1 sm:gap-1.5 text-[#D46F77] transition px-2 py-1.5 sm:px-2.5 sm:py-2 md:px-[10px] md:py-[7px] rounded-lg sm:rounded-[10px] bg-[#FFF0F0]"
            >
              <Heart
                className={`w-4 h-4 sm:w-[18px] sm:h-[18px] md:w-5 md:h-5 ${
                  isLiked ? 'fill-red-500 text-[#D46F77]' : ''
                }`}
              />
              <span className="text-xs sm:text-sm font-medium">
                {data.likes}
              </span>
            </button>
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className="flex justify-center items-center hover:text-blue-600 transition w-7 h-7 sm:w-8 sm:h-8 md:w-[34px] md:h-[34px] rounded-lg sm:rounded-[10px] bg-[#EDF0F8] text-[#3A4980]"
            >
              <Bookmark
                className={`w-4 h-4 sm:w-[18px] sm:h-[18px] md:w-5 md:h-5 ${
                  isBookmarked ? 'fill-blue-600 text-blue-600' : ''
                }`}
              />
            </button>
            <button className="flex justify-center items-center hover:text-gray-900 transition w-7 h-7 sm:w-8 sm:h-8 md:w-[34px] md:h-[34px] rounded-lg sm:rounded-[10px] bg-[#EDF0F8] text-[#3A4980]">
              <Share2 className="w-4 h-4 sm:w-[18px] sm:h-[18px] md:w-5 md:h-5" />
            </button>
          </div>
        </div>

        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] font-semibold text-black">
          {data.title}
        </h3>

        <div className="rental-divider" />

        {/* Pickup Location */}
        <div className="">
          <h3 className="text-base sm:text-lg font-semibold text-black">
            Pickup: {data.pickup.location}
          </h3>
          <p className="text-sm sm:text-base font-normal text-[#B9BBBF]">
            {data.pickup.note}
          </p>
        </div>

        <div className="rental-divider" />

        {/* Pricing */}
        <div className="flex justify-between items-center gap-3 sm:gap-4 md:gap-5">
          <div className="flex items-end gap-1.5 sm:gap-2">
            <span className="text-xl sm:text-2xl md:text-[28px] font-bold text-[#B07828]">
              ${data.pricing.amount}
            </span>
            <span className="text-base sm:text-lg font-normal text-black">
              {data.pricing.period}
            </span>
          </div>
          <div className="text-xs sm:text-sm text-[#B9BBBF] font-normal text-right">
            {data.pricing.discount}
          </div>
        </div>

        <div className="rental-divider" />

        {/* Date Selection */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-6">
          <div>
            <label className="block text-xs sm:text-sm font-bold text-[#262626] mb-2 sm:mb-3 md:mb-4">
              Start Date
            </label>
            <div className="relative">
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full p-3 sm:p-3.5 md:p-4 border rounded-lg sm:rounded-xl focus:outline-none focus:ring-1 focus:ring-black text-sm sm:text-base text-[#262626] placeholder:text-gray-400 appearance-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs sm:text-sm font-bold text-[#262626] mb-2 sm:mb-3 md:mb-4">
              End Date
            </label>
            <div className="relative">
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                min={startDate}
                className="w-full p-3 sm:p-3.5 md:p-4 border rounded-lg sm:rounded-xl focus:outline-none focus:ring-1 focus:ring-black text-sm sm:text-base text-[#262626] placeholder:text-gray-400 appearance-none"
              />
            </div>
          </div>
        </div>

        {/* Total Amount */}
        <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 mb-3 sm:mb-4">
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <span className="text-sm sm:text-base md:text-lg lg:text-xl text-[rgba(0,0,0,0.50)] font-semibold">
              Total Amount
            </span>
            <span className="text-xl sm:text-2xl md:text-[28px] font-bold text-[#B07828]">
              ${totalAmount.toFixed(2)}
            </span>
          </div>

          {/* Detail Bill Dropdown */}
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-center justify-between w-full text-xs sm:text-sm text-[#B9BBBF] hover:text-gray-900 transition cursor-pointer"
          >
            <span>Detail Bill</span>
            <ChevronDown
              className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform ${
                showDetails ? 'rotate-180' : ''
              }`}
            />
          </button>

          {/* Expandable Details */}
          {showDetails && (
            <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200 space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Daily Rate</span>
                <span className="font-medium">${data.pricing.amount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Number of Days</span>
                <span className="font-medium">{numberOfDays} days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">
                  ${(numberOfDays * data.pricing.amount).toFixed(2)}
                </span>
              </div>
              {numberOfDays >= 7 && (
                <div className="flex justify-between text-green-600">
                  <span>Weekly Discount (40%)</span>
                  <span className="font-medium">
                    -${(numberOfDays * data.pricing.amount * 0.4).toFixed(2)}
                  </span>
                </div>
              )}
              <div className="flex justify-between pt-1.5 sm:pt-2 border-t border-gray-200 font-semibold text-sm sm:text-base">
                <span>Total</span>
                <span className="text-orange-600">
                  ${totalAmount.toFixed(2)}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Book Now Button */}
        <button
          onClick={() =>
            alert(
              `Booking confirmed!\nDates: ${startDate} to ${endDate}\nTotal: $${totalAmount.toFixed(
                2
              )}`
            )
          }
          className="w-full bg-[#CF9645] hover:bg-[#B07828] text-white font-medium py-3 sm:py-3.5 md:py-4 px-6 sm:px-7 md:px-8 rounded-lg transition duration-300 text-base sm:text-lg md:text-xl"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default RentalBooking;
