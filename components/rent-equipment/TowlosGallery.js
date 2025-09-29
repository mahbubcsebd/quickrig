'use client';

import useGalleryFilters from '@/hooks/useGalleryFilters';
import React, { useState } from 'react';
import FilterSection from './FilterSection';
import ImageGrid from './ImageGrid';
import Pagination from './Pagination';

const TowlosGallery = () => {
  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      alt: 'Construction Equipment',
      price: '$50,000',
      type: 'Equipment',
      location: 'New York',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=300&fit=crop',
      alt: 'Semi Truck',
      price: '$80,000',
      type: 'Truck',
      location: 'California',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&h=300&fit=crop',
      alt: 'Delivery Truck',
      price: '$45,000',
      type: 'Truck',
      location: 'Texas',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      alt: 'Transport Truck',
      price: '$75,000',
      type: 'Truck',
      location: 'Florida',
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop',
      alt: 'Towing Service',
      price: '$35,000',
      type: 'Service',
      location: 'Nevada',
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop',
      alt: 'Heavy Equipment',
      price: '$90,000',
      type: 'Equipment',
      location: 'Arizona',
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400&h=300&fit=crop',
      alt: 'Excavator',
      price: '$120,000',
      type: 'Equipment',
      location: 'Colorado',
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      alt: 'Bulldozer',
      price: '$95,000',
      type: 'Equipment',
      location: 'Utah',
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      alt: 'Cargo Truck',
      price: '$65,000',
      type: 'Truck',
      location: 'Oregon',
    },
  ];

  const { filters, setFilters, filteredImages } =
    useGalleryFilters(galleryImages);
  const [currentPage, setCurrentPage] = useState(1);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const itemsPerPage = 9;

  // Pagination calculations
  const totalPages = Math.ceil(filteredImages.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentImages = filteredImages.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Reset page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [filteredImages]);

  return (
    <div className="py-16 lg:py-[120px] bg-white">
      <div className="container mx-auto px-4">
        <FilterSection
          filters={filters}
          setFilters={setFilters}
          showSearchInput={showSearchInput}
          setShowSearchInput={setShowSearchInput}
        />

        <ImageGrid images={currentImages} />

        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          startIndex={startIndex}
          itemsPerPage={itemsPerPage}
          totalResults={filteredImages.length}
        />
      </div>
    </div>
  );
};

export default TowlosGallery;
