'use client';

import Image from 'next/image';
import { useState } from 'react';

const ProductDimensions = ({ dimensions }) => {
  const [activeTab, setActiveTab] = useState(
    dimensions?.[0]?.dimensions_type || 'side'
  );

  if (!dimensions || dimensions.length === 0) {
    return null;
  }

  // Get the active dimension data
  const activeDimension = dimensions.find(
    (dim) => dim.dimensions_type === activeTab
  );

  // Extract all dimension measurements from the active tab
  const getDimensionFields = (dimension) => {
    const fields = [];

    if (dimension.deck_length_feet) {
      fields.push({
        label: 'Deck Length',
        value: dimension.deck_length_feet,
        key: 'A',
      });
    }

    if (dimension.width_between_fenders_inches) {
      fields.push({
        label: 'Width Between Fenders',
        value: dimension.width_between_fenders_inches,
        key: 'B',
      });
    }

    if (dimension.width_including_fenders_inches) {
      fields.push({
        label: 'Width Including Fenders',
        value: dimension.width_including_fenders_inches,
        key: 'C',
      });
    }

    if (dimension.deck_height_from_ground) {
      fields.push({
        label: 'Deck Height from Ground',
        value: dimension.deck_height_from_ground,
        key: 'D',
      });
    }

    if (dimension.fender_height_from_deck) {
      fields.push({
        label: 'Fender Height from Deck',
        value: dimension.fender_height_from_deck,
        key: 'F',
      });
    }

    return fields;
  };

  const dimensionFields = activeDimension
    ? getDimensionFields(activeDimension)
    : [];

  return (
    <div className="">
      {/* Header with Tabs */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">Dimensions</h2>

        {/* Tab Buttons */}
        {dimensions.length > 1 && (
          <div className="flex gap-2">
            {dimensions.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.dimensions_type)}
                className={`px-6 py-2 rounded-lg font-semibold transition capitalize ${
                  activeTab === tab.dimensions_type
                    ? 'bg-amber-500 text-white'
                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {tab.dimensions_type}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Diagram Image - Show if image exists in future */}
      {activeDimension?.image && (
        <div className="mb-8 bg-gray-50 rounded-lg p-8 flex items-center justify-center min-h-[300px]">
          <Image
            src={activeDimension.image}
            alt={`${activeTab} view diagram`}
            width={800}
            height={400}
            className="max-w-full h-auto"
          />
        </div>
      )}

      {/* Dimension Details */}
      {dimensionFields.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {dimensionFields.map((field, index) => (
            <div key={index} className="">
              <p className="text-[#7b7b7b] text-lg mb-2">{field.label}</p>
              <p className="text-2xl md:text-[34px] font-bold">
                {field.key} {field.value}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Description Text from API */}
      {activeDimension?.description && (
        <div className="text-gray-700 leading-relaxed">
          <p>{activeDimension.description}</p>
        </div>
      )}
    </div>
  );
};

export default ProductDimensions;
