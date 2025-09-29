'use client';

import { useSearchParams } from 'next/navigation';
import TowlosGallery from './TowlosGallery';

const RentEquipmentContent = () => {
  const searchParams = useSearchParams();

  const location = searchParams.get('location');
  const startDate = searchParams.get('startDate');
  const endDate = searchParams.get('endDate');

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Display search parameters if needed */}
      {(location || startDate || endDate) && (
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-2">Search Filters:</h3>
          {location && <p className="text-gray-700">Location: {location}</p>}
          {startDate && (
            <p className="text-gray-700">Start Date: {startDate}</p>
          )}
          {endDate && <p className="text-gray-700">End Date: {endDate}</p>}
        </div>
      )}

      <TowlosGallery />
    </div>
  );
};

export default RentEquipmentContent;
