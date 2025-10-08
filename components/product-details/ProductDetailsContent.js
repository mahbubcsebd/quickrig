'use client';

import { Calendar, Heart, Share2, Star } from 'lucide-react';
import { useState } from 'react';
import ProductDimensions from './ProductDimensions';
import ProductMap from './ProductMap';
import ProductSlider from './ProductSlider';

const ProductDetailsContent = ({ product }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [promoCode, setPromoCode] = useState('');

  const calculateEstTotal = () => {
    if (!startDate || !endDate) return product.price;

    const start = new Date(startDate);
    const end = new Date(endDate);
    const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));

    if (days <= 0) return product.price;

    let total = product.price * days;

    // Apply discounts
    if (days >= 30) {
      total = total * (1 - product.discounts[1].percentage / 100);
    } else if (days >= 7) {
      total = total * (1 - product.discounts[0].percentage / 100);
    }

    return Math.round(total);
  };

  return (
    <div className="pb-6 md:p md:py-20 product-details-page">
      <div className="product-details-area">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] mb-8">
            <div className="lg:pr-10 xl:pr-16 xxl:pr-20 product-details-gallery">
              <ProductSlider product={product} previewStyle="portrait" />
            </div>

            <div className="product-details-content">
              {/* Header Section */}
              <div className="mb-6">
                <div className="flex items-start justify-between mb-2">
                  <h2 className="text-2xl md:text-3xl font-bold">
                    {product.title}
                  </h2>
                  <button className="flex items-center gap-1 text-rose-500">
                    <Heart className="w-5 h-5" />
                    <span className="text-sm">{product.saves}</span>
                  </button>
                </div>

                <div className="flex items-center gap-3 text-gray-600">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">
                      {product.reviews.averageRating}
                    </span>
                  </div>
                  <span>{product.views} Trips Complete</span>
                </div>
              </div>

              {/* Pricing Section */}
              <div className="mb-6 pb-6 border-b">
                <div className="text-3xl font-bold text-amber-600 mb-1">
                  {product.currency}
                  {product.price}
                  <span className="text-lg text-gray-600">
                    / {product.priceUnit}
                  </span>
                </div>
                <div className="text-gray-600">
                  {product.currency}
                  {calculateEstTotal()} est total
                </div>
              </div>

              {/* Date Selection */}
              <div className="mb-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Start Date
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="mm/dd/yyyy"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        onFocus={(e) => (e.target.type = 'date')}
                        onBlur={(e) =>
                          !e.target.value && (e.target.type = 'text')
                        }
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                      <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      End Date
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="mm/dd/yyyy"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        onFocus={(e) => (e.target.type = 'date')}
                        onBlur={(e) =>
                          !e.target.value && (e.target.type = 'text')
                        }
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                      <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Discounts */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Discounts</h3>
                <div className="space-y-2">
                  {product.discounts.map((discount, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <span className="text-gray-700">{discount.label}</span>
                      <span className="font-semibold text-green-600">
                        {discount.percentage}% off
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Promo Code */}
              <div className="mb-6 flex gap-2">
                <input
                  type="text"
                  placeholder={product.promoCode.placeholder}
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <button className="px-6 py-3 border rounded-lg font-semibold hover:bg-gray-50 transition">
                  Apply
                </button>
              </div>

              {/* Extras */}
              <div className="mb-6 pb-6 border-b">
                <button className="w-full flex justify-between items-center py-3">
                  <span className="font-semibold">Extras</span>
                  <span className="text-gray-400">⚡</span>
                </button>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <button className="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition">
                  Chat With Host
                </button>
                <button className="px-6 py-3 bg-amber-500 text-white rounded-lg font-semibold hover:bg-amber-600 transition">
                  Continue
                </button>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Description</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {product.description.bulletPoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Save and Share */}
              <div className="grid grid-cols-2 gap-4">
                <button className="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition flex items-center justify-center gap-2">
                  <Heart className="w-5 h-5" />
                  Save
                </button>
                <button className="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition flex items-center justify-center gap-2">
                  <Share2 className="w-5 h-5" />
                  Share
                </button>
              </div>
            </div>
          </div>
          <div className="map-section mb-10">
            <ProductMap
              coordinates={product.coordinates}
              address={product.address}
              city={product.city}
              state={product.state}
              zipCode={product.zipCode}
            />
          </div>
          <div className="mb-10">
            <ProductDimensions
              dimensions={product.dimensions}
              description={product.description}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsContent;
