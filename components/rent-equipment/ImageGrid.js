'use client';

import RentCard from '../RentCard';

const ImageGrid = ({ trailers }) => {
  if (!trailers) return null;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {trailers.map((trailer) => (
        <RentCard key={trailer.id} trailer={trailer} />
      ))}
    </div>
  );
};

export default ImageGrid;
