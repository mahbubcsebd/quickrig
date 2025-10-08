import Image from 'next/image';
import { useState } from 'react';

const ProductDimensions = ({ dimensions, description }) => {
  const [activeTab, setActiveTab] = useState('side'); // 'top' or 'side'

  if (!dimensions || !dimensions.enabled) {
    return null;
  }

  return (
    <div className="product-dimensions-section bg-white rounded-lg p-6 md:p-8">
      {/* Header with Tabs */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">Dimensions</h2>

        {/* Tab Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('top')}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              activeTab === 'top'
                ? 'bg-amber-500 text-white'
                : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
          >
            Top
          </button>
          <button
            onClick={() => setActiveTab('side')}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              activeTab === 'side'
                ? 'bg-amber-500 text-white'
                : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
          >
            Side
          </button>
        </div>
      </div>

      {/* Diagram Image */}
      <div className="mb-8 bg-gray-50 rounded-lg p-8 flex items-center justify-center min-h-[300px]">
        {dimensions.diagramImage ? (
          <Image
            src={dimensions.diagramImage}
            alt={`${activeTab} view diagram`}
            className="max-w-full h-auto"
          />
        ) : (
          <div className="w-full max-w-4xl">
            {/* Placeholder SVG - Side View of Trailer */}
            <svg viewBox="0 0 900 400" className="w-full h-auto">
              {/* Trailer body */}
              <rect
                x="350"
                y="180"
                width="300"
                height="80"
                fill="#2c3e50"
                rx="5"
              />

              {/* Wheels */}
              <circle cx="420" cy="260" r="45" fill="#1a1a1a" />
              <circle cx="420" cy="260" r="30" fill="#4a5568" />
              <circle cx="580" cy="260" r="45" fill="#1a1a1a" />
              <circle cx="580" cy="260" r="30" fill="#4a5568" />

              {/* Fender */}
              <path
                d="M 380 180 Q 420 150 460 180"
                fill="none"
                stroke="#dc2626"
                strokeWidth="3"
              />
              <path
                d="M 540 180 Q 580 150 620 180"
                fill="none"
                stroke="#dc2626"
                strokeWidth="3"
              />

              {/* Hitch */}
              <line
                x1="100"
                y1="240"
                x2="350"
                y2="240"
                stroke="#2c3e50"
                strokeWidth="8"
              />
              <rect
                x="80"
                y="220"
                width="40"
                height="40"
                fill="#2c3e50"
                rx="3"
              />
              <circle cx="100" cy="240" r="8" fill="#4a5568" />

              {/* Jack stand */}
              <line
                x1="140"
                y1="180"
                x2="140"
                y2="300"
                stroke="#1a1a1a"
                strokeWidth="6"
              />
              <rect x="130" y="295" width="20" height="8" fill="#1a1a1a" />
              <path d="M 140 180 L 150 200 L 130 200 Z" fill="#1a1a1a" />

              {/* Ground line */}
              <line
                x1="50"
                y1="305"
                x2="850"
                y2="305"
                stroke="#cbd5e0"
                strokeWidth="2"
                strokeDasharray="5,5"
              />

              {/* Dimension D - Deck Height from Ground */}
              <g>
                <line
                  x1="140"
                  y1="305"
                  x2="140"
                  y2="240"
                  stroke="#dc2626"
                  strokeWidth="2"
                />
                <line
                  x1="135"
                  y1="305"
                  x2="145"
                  y2="305"
                  stroke="#dc2626"
                  strokeWidth="2"
                />
                <line
                  x1="135"
                  y1="240"
                  x2="145"
                  y2="240"
                  stroke="#dc2626"
                  strokeWidth="2"
                />
                <path d="M 140 300 L 135 290 L 145 290 Z" fill="#dc2626" />
                <path d="M 140 245 L 135 255 L 145 255 Z" fill="#dc2626" />
                <circle cx="330" cy="338" r="20" fill="#dc2626" />
                <text
                  x="330"
                  y="345"
                  textAnchor="middle"
                  fill="white"
                  fontSize="18"
                  fontWeight="bold"
                >
                  D
                </text>
              </g>

              {/* Dimension F - Fender Height from Deck */}
              <g>
                <line
                  x1="680"
                  y1="240"
                  x2="680"
                  y2="165"
                  stroke="#dc2626"
                  strokeWidth="2"
                />
                <line
                  x1="675"
                  y1="240"
                  x2="685"
                  y2="240"
                  stroke="#dc2626"
                  strokeWidth="2"
                />
                <line
                  x1="675"
                  y1="165"
                  x2="685"
                  y2="165"
                  stroke="#dc2626"
                  strokeWidth="2"
                />
                <path d="M 680 235 L 675 225 L 685 225 Z" fill="#dc2626" />
                <path d="M 680 170 L 675 180 L 685 180 Z" fill="#dc2626" />
                <circle cx="748" cy="273" r="20" fill="#dc2626" />
                <text
                  x="748"
                  y="280"
                  textAnchor="middle"
                  fill="white"
                  fontSize="18"
                  fontWeight="bold"
                >
                  F
                </text>
              </g>

              {/* Towlos branding */}
              <text
                x="500"
                y="225"
                textAnchor="middle"
                fill="white"
                fontSize="14"
                fontWeight="500"
              >
                🚗 towlos
              </text>
            </svg>
          </div>
        )}
      </div>

      {/* Dimension Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {dimensions.measurements.map((measurement) => (
          <div key={measurement.id} className="border-b pb-4">
            <p className="text-gray-600 text-sm mb-1">
              {measurement.description}
            </p>
            <p className="text-xl md:text-2xl font-bold">
              {measurement.label} {measurement.value} {measurement.unit}
            </p>
          </div>
        ))}
      </div>

      {/* Description Text */}
      {description && description.full && (
        <div className="text-gray-700 leading-relaxed">
          <p>{description.full}</p>
        </div>
      )}

      {/* Additional Story/Background */}
      <div className="mt-6 pt-6 border-t">
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Transport your tools, gear, or equipment safely and in style with
            this heavy-duty enclosed cargo trailer. Featuring a sleek charcoal
            gray exterior with a diamond plate front guard for added protection,
            this trailer is built for durability and performance. The tandem
            axle setup ensures stable towing even under heavy loads, making it
            ideal for contractors, movers, event companies, and outdoor
            enthusiasts.
          </p>

          <p>
            The inspiration for Towlos began in the summer of 2021. Some of my
            Corvette buddies and I wanted to trailer our cars to the track
            rather than driving them, which could risk getting dinged up on the
            way to and from the track. This would be pretty sweet. "Oh great!
            There's not a lot around our area to rent a trailer that's worth a
            damn," I immediately remembered. After a few hours brainstorming, I
            came up with this idea: "What if we could create a platform where
            people could share trailers?" Within a day, I had registered
            Towlos.com and begun building it out from scratch.
          </p>

          <p>
            I thought "someone should do something about this! It would be so
            nice to have access to these trailers without having to purchase one
            or rent from the limited supply that currently exists." After
            letting this thought bounce around in my mind for a while, I
            realized I could be that someone! A few days later, I'd become
            pretty excited about it and Towlos was born. The concept of sharing
            resources when not using them really resonated with me. It has been
            successful with companies like Airbnb and Turo. Could this also work
            for trailers?
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDimensions;
