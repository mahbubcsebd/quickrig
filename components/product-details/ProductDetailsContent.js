'use client';

import { Heart, Share2, Star } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import ProductDimensions from './ProductDimensions';
import ProductMap from './ProductMap';
import ProductSlider from './ProductSlider';
import RelatedProducts from './RelatedProducts';
import TrailerSpecifications from './TrailerSpecifications';
import ChatWithHost from './review/ChatWithHost';
import ReviewsSection from './review/ReviewsSection';

const sampleReviews = [
  {
    id: 1,
    name: 'Samantha D.',
    rating: 4.5,
    comment:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate attention to detail. It's become my favorite go-to shirt.",
    date: 'August 14, 2023',
    verified: true,
  },
  {
    id: 2,
    name: 'Alex M.',
    rating: 4,
    comment:
      "The t-shirt exceeded my expectations! Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
    date: 'August 15, 2023',
    verified: true,
  },
  {
    id: 3,
    name: 'Ethan R.',
    rating: 3.5,
    comment:
      "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
    date: 'August 16, 2023',
    verified: true,
  },
  {
    id: 4,
    name: 'Olivia P.',
    rating: 4,
    comment:
      "As a UI/UX enthusiast, I value simplicity and functionality. It's evident that the designer poured their creativity into making this t-shirt stand out.",
    date: 'August 17, 2023',
    verified: true,
  },
];

const ProductDetailsContent = ({ trailer }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [isLiked, setIsLiked] = useState(false);

  const calculateEstTotal = () => {
    if (!startDate || !endDate) return parseFloat(trailer.pricing.daily_rate);

    const start = new Date(startDate);
    const end = new Date(endDate);
    const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));

    if (days <= 0) return parseFloat(trailer.pricing.daily_rate);

    let total = parseFloat(trailer.pricing.daily_rate) * days;

    // Apply discounts based on rental length
    if (days >= 30) {
      total =
        total *
        (1 - parseFloat(trailer.pricing.monthly_discount_percent) / 100);
    } else if (days >= 7) {
      total =
        total * (1 - parseFloat(trailer.pricing.weekly_discount_percent) / 100);
    }

    return Math.round(total);
  };

  // Transform gallery images for ProductSlider
  const productImages =
    trailer.gallery_images?.length > 0
      ? trailer.gallery_images.map((img, index) => ({
          id: img.id || index,
          src: img.url || img.image_url || '/images/no-image.png',
          alt: img.alt_text || trailer.title,
          isPrimary: img.is_primary || index === 0,
        }))
      : trailer.primary_image || '/images/no-image.png'
      ? [
          {
            id: 1,
            src: trailer.primary_image || '/images/no-image.png',
            alt: trailer.title,
            isPrimary: true,
          },
        ]
      : [];

  // Transform location data for ProductMap
  const locationData = {
    coordinates: {
      lat: parseFloat(trailer.location.latitude),
      lng: parseFloat(trailer.location.longitude),
    },
    address: trailer.location.address,
    city: trailer.location.address.split(',')[0]?.trim() || '',
    state: trailer.location.address.split(',')[1]?.trim() || '',
    zipCode: '',
  };

  // Transform dimensions data
  const dimensionsData = {
    enabled: trailer.dimensions?.length > 0,
    measurements:
      trailer.dimensions?.map((dim) => ({
        id: dim.dimensions_type,
        label: dim.dimensions_type.toUpperCase(),
        value: dim.deck_height_from_ground || dim.fender_height_from_deck || '',
        unit: 'inches',
        description: dim.description,
      })) || [],
  };

  const hostData = {
    name: 'Turbine Trailers',
    trailerCount: 1,
    joinDate: 'March 2025',
  };

  const handleChatClick = () => {
    alert('Chat with host clicked!');
  };

  return (
    <div className="pt-6 md:p md:pt-20 product-details-page">
      <div className="product-details-area">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] mb-8">
            <div className="lg:pr-10 xl:pr-16 xxl:pr-20 product-details-gallery">
              <ProductSlider images={productImages} previewStyle="portrait" />
            </div>

            <div className="product-details-content bg-white">
              {/* Header Section */}
              <div className="mb-4 pb-4 border-b">
                <div className="flex flex-col xl:flex-row items-start gap-4 mb-3">
                  <h2 className="text-xl md:text-[28px] font-semibold text-black">
                    {trailer.title}
                  </h2>
                  <div className="flex-1 min-w-[250px] mt-2">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <div className="flex items-center gap-1 text-base text-[#B9BBBF]">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-normal">
                            {trailer.stats.average_rating || '5.0'}
                          </span>
                        </div>
                        <span className="text-base text-[#B9BBBF]">
                          {trailer.stats.total_trips} Trips Complete
                        </span>
                      </div>
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
                          {trailer.stats.favorites_count}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing Section */}
              <div className="mb-6 pb-6 ">
                <div className="text-3xl lg:text-[34px] font-bold text-[#B07828] mb-1">
                  ${parseFloat(trailer.pricing.daily_rate).toFixed(2)}/day
                </div>
                <div className="text-[#7b7b7b]">
                  ${calculateEstTotal().toFixed(2)} est total
                </div>
              </div>

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

              {/* Discounts */}
              <div className="mb-5 pb-5 border-b">
                <h3 className="text-xs font-normal text-[#1E1E1E] mb-4 pb-4 border-b border-gray-200">
                  Discounts
                </h3>
                <div className="space-y-2.5">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#1E1E1E]">
                      Weekly (7+ Days)
                    </span>
                    <span className="text-sm font-bold text-[#1E1E1E]">
                      {parseFloat(
                        trailer.pricing.weekly_discount_percent
                      ).toFixed(0)}
                      % off
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#1E1E1E]">
                      Monthly (30+ Days)
                    </span>
                    <span className="text-sm font-bold text-[#1E1E1E]">
                      {parseFloat(
                        trailer.pricing.monthly_discount_percent
                      ).toFixed(0)}
                      % off
                    </span>
                  </div>
                </div>
              </div>

              {/* Promo Code */}
              <div className="mb-5 flex gap-2">
                <input
                  type="text"
                  placeholder="Enter promo code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="fw-full p-3 sm:p-3.5 md:p-4 border rounded-md sm:rounded-md focus:outline-none focus:ring-1 focus:ring-black text-sm sm:text-base text-[#262626] placeholder:text-gray-400 appearance-none flex-1"
                />
                <button className="px-6 py-2.5 text-sm border border-black text-black rounded-md font-semibold hover:border-black transition hover:bg-black hover:text-white">
                  Apply
                </button>
              </div>

              {/* Extras */}
              <div className="mb-5 pb-5 border-b">
                <button className="w-full flex justify-between items-center p-4 border border-gray-200 rounded-md">
                  <span className="text-sm text-[#1E1E1E]">Extras</span>
                  <span className="text-sm text-[#1E1E1E]">⚡</span>
                </button>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <button className="px-4 py-3 text-sm border border-black text-black rounded-lg font-semibold transition">
                  Chat With Host
                </button>
                <Link
                  href="/checkout"
                  className="px-5 py-4 text-sm bg-[#B07828] border border-[#B07828] text-white rounded-lg font-semibold transition flex justify-center"
                >
                  Continue
                </Link>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-xs font-normal text-[#1E1E1E] mb-4 pb-4 border-b border-gray-200">
                  Description
                </h3>
                <p className="text-sm text-[#1E1E1E] mb-3">
                  {trailer.description}
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Host: {trailer.host.first_name} {trailer.host.last_name}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Make: {trailer.make} {trailer.model} ({trailer.year})
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Max Payload:{' '}
                      {parseFloat(
                        trailer.specifications.max_payload
                      ).toLocaleString()}{' '}
                      lbs
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Hitch: {trailer.specifications.hitch_ball_size} /{' '}
                      {trailer.specifications.hitch_type}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Brakes:{' '}
                      {trailer.specifications.has_brakes
                        ? trailer.specifications.brake_type
                        : 'None'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Rental Minimum: {trailer.booking_settings.min_rental_days}{' '}
                      day(s)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Rental Maximum: {trailer.booking_settings.max_rental_days}{' '}
                      day(s)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Cancellation Policy:{' '}
                      {trailer.booking_settings.cancellation_policy}
                    </span>
                  </li>
                </ul>
              </div>

              {/* Save and Share */}
              <div className="grid grid-cols-2 gap-3">
                <button className="px-4 py-3 text-sm border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition flex items-center justify-center gap-2">
                  <span>Save</span>
                  <Heart className="w-4 h-4" />
                </button>
                <button className="px-4 py-3 text-sm border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition flex items-center justify-center gap-2">
                  <span>Share</span>
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Trailer Specifications Section */}
          <div className="mb-10">
            <TrailerSpecifications specifications={trailer.specifications} />
          </div>

          <div className="map-section mb-10">
            <ProductMap {...locationData} />
          </div>
          <div className="mb-10">
            <ProductDimensions dimensions={trailer.dimensions} />
          </div>
          <div>
            <ChatWithHost
              hostName={hostData.name}
              trailerCount={hostData.trailerCount}
              joinDate={hostData.joinDate}
              onChatClick={handleChatClick}
            />
          </div>
          <ReviewsSection reviews={sampleReviews} />
        </div>
        <RelatedProducts />
      </div>
    </div>
  );
};

export default ProductDetailsContent;
