'use client';

import { useEffect, useState } from 'react';

const useGalleryFilters = (allImages) => {
  const [filters, setFilters] = useState({
    price: '',
    type: '',
    location: '',
    search: '',
  });

  const [filteredImages, setFilteredImages] = useState(allImages);

  const applyFilters = () => {
    let filtered = allImages;

    // Search filter
    if (filters.search) {
      filtered = filtered.filter((item) =>
        item.alt.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    // Price filter
    if (filters.price) {
      filtered = filtered.filter((item) => {
        const price = parseInt(item.price.replace(/[$,k]/g, '')) * 1000;
        if (filters.price === 'under50k') return price < 50000;
        if (filters.price === '50k-100k')
          return price >= 50000 && price <= 100000;
        if (filters.price === 'over100k') return price > 100000;
        return true;
      });
    }

    // Type filter
    if (filters.type) {
      const typeMap = {
        truck: 'Truck',
        equipment: 'Equipment',
        service: 'Service',
      };
      filtered = filtered.filter((item) => item.type === typeMap[filters.type]);
    }

    // Location filter
    if (filters.location) {
      const locationMap = {
        'new-york': 'New York',
        california: 'California',
        texas: 'Texas',
        florida: 'Florida',
        nevada: 'Nevada',
        arizona: 'Arizona',
        colorado: 'Colorado',
        utah: 'Utah',
        oregon: 'Oregon',
      };
      filtered = filtered.filter(
        (item) => item.location === locationMap[filters.location]
      );
    }

    setFilteredImages(filtered);
  };

  useEffect(() => {
    applyFilters();
  }, [filters]);

  return {
    filters,
    setFilters,
    filteredImages,
  };
};

export default useGalleryFilters;
