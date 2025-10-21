'use client';

import { useSearchParams } from 'next/navigation';
import FilterSection from './FilterSection';
import ImageGrid from './ImageGrid';
import Pagination from './Pagination';

const TowlosGallery = ({ trailers }) => {
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get('page') || '1');
  const itemsPerPage = 20;

  // Calculate total pages based on trailer count
  const totalPages = Math.ceil(trailers.length / itemsPerPage);

  return (
    <div className="py-16 lg:py-[120px] bg-white">
      <div className="container mx-auto px-4">
        <FilterSection />

        <ImageGrid trailers={trailers} />

        {trailers.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalResults={trailers.length}
          />
        )}

        {trailers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No trailers found. Try adjusting your filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TowlosGallery;
