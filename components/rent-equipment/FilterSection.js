'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

const FilterSection = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Initialize filters from URL
  const [filters, setFilters] = useState({
    keyword: searchParams.get('keyword') || '',
    min_price: searchParams.get('min_price') || '',
    max_price: searchParams.get('max_price') || '',
    trailer_type_id: searchParams.get('trailer_type_id') || '',
  });

  const priceRanges = [
    { value: '0-50', label: 'Under $50', min: 0, max: 50 },
    { value: '50-100', label: '$50 - $100', min: 50, max: 100 },
    { value: '100-200', label: '$100 - $200', min: 100, max: 200 },
    { value: '200-500', label: '$200 - $500', min: 200, max: 500 },
    { value: '500+', label: 'Over $500', min: 500, max: 10000 },
  ];

  const trailerTypes = [
    { value: '1', label: 'Utility Trailer' },
    { value: '2', label: 'Cargo Trailer' },
    { value: '3', label: 'Flatbed Trailer' },
    { value: '4', label: 'Equipment Trailer' },
    { value: '5', label: 'Car Hauler' },
  ];

  // Update URL when filters change
  const updateURL = (newFilters) => {
    const params = new URLSearchParams(searchParams);

    // Remove empty parameters
    Object.keys(newFilters).forEach((key) => {
      if (newFilters[key]) {
        params.set(key, newFilters[key]);
      } else {
        params.delete(key);
      }
    });

    // Always reset to page 1 when filters change
    params.set('page', '1');

    router.push(`?${params.toString()}`, { scroll: false });
  };

  // Handle filter changes
  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
  };

  // Handle price range selection
  const handlePriceChange = (value) => {
    const selectedRange = priceRanges.find((range) => range.value === value);
    if (selectedRange) {
      const newFilters = {
        ...filters,
        min_price: selectedRange.min.toString(),
        max_price: selectedRange.max.toString(),
      };
      setFilters(newFilters);
      updateURL(newFilters);
    }
  };

  // Handle search
  const handleSearch = () => {
    updateURL(filters);
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-8">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
        {/* Left side - Price and Type filters */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Price Filter */}
          <Select onValueChange={handlePriceChange}>
            <SelectTrigger className="w-[140px] bg-white">
              <SelectValue placeholder="Price" />
            </SelectTrigger>
            <SelectContent>
              {priceRanges.map((range) => (
                <SelectItem key={range.value} value={range.value}>
                  {range.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Type Filter */}
          <Select
            value={filters.trailer_type_id}
            onValueChange={(value) => {
              handleFilterChange('trailer_type_id', value);
              updateURL({ ...filters, trailer_type_id: value });
            }}
          >
            <SelectTrigger className="w-[160px] bg-white">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              {trailerTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Right side - Keyword Search */}
        <div className="flex items-center gap-2 w-full lg:w-auto">
          <div className="relative flex-1 lg:w-[300px]">
            <Input
              type="text"
              placeholder="Keyword Search"
              value={filters.keyword}
              onChange={(e) => handleFilterChange('keyword', e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full bg-white pr-10"
            />
          </div>

          {/* Search Button */}
          <Button onClick={handleSearch} size="icon" className="shrink-0">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
