'use client';

import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { useMemo } from 'react';

const ProductMap = ({ coordinates, address, city, state, zipCode }) => {
  // Load Google Maps script
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey:
      process.env.REACT_APP_GOOGLE_MAPS_API_KEY ||
      'AIzaSyBLsfAvQX6j_mF_ElU3oelgLFokalRnUxM',
  });

  // Map center
  const center = useMemo(
    () => ({
      lat: coordinates?.lat || 40.7128,
      lng: coordinates?.lng || -74.006,
    }),
    [coordinates]
  );

  // Map options
  const options = useMemo(
    () => ({
      disableDefaultUI: false,
      zoomControl: true,
      streetViewControl: false,
      mapTypeControl: false,
      fullscreenControl: true,
    }),
    []
  );

  if (loadError) {
    return (
      <div className="product-map-section bg-white rounded-lg overflow-hidden shadow-sm p-6">
        <h3 className="text-xl font-bold mb-2">Location</h3>
        <p className="text-red-600">Error loading map</p>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="product-map-section bg-white rounded-lg overflow-hidden shadow-sm">
        <div className="w-full h-[400px] md:h-[500px] bg-gray-100 flex items-center justify-center">
          <div className="text-gray-400">Loading map...</div>
        </div>
      </div>
    );
  }

  if (!coordinates || !coordinates.lat || !coordinates.lng) {
    return (
      <div className="product-map-section bg-white rounded-lg overflow-hidden shadow-sm p-6">
        <h3 className="text-xl font-bold mb-2">Location</h3>
        <p className="text-gray-600">Map not available</p>
      </div>
    );
  }

  return (
    <div className="product-map-section bg-white rounded-lg overflow-hidden shadow-sm">
      <h3 className="text-2xl font-semibold text-black mb-5">Map View</h3>
      <div className="w-full h-[400px] md:h-[500px] relative">
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={center}
          zoom={12}
          options={options}
        >
          <Marker position={center} title={city} />
        </GoogleMap>
      </div>
    </div>
  );
};

export default ProductMap;
