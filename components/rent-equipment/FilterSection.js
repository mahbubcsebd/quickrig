'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ChevronDown, Search, X } from 'lucide-react';

const FilterSection = ({
  filters,
  setFilters,
  showSearchInput,
  setShowSearchInput,
}) => {
  const priceOptions = [
    { value: 'under50k', label: 'Under $50k' },
    { value: '50k-100k', label: '$50k - $100k' },
    { value: 'over100k', label: 'Over $100k' },
  ];

  const typeOptions = [
    { value: 'truck', label: 'Truck' },
    { value: 'equipment', label: 'Equipment' },
    { value: 'service', label: 'Service' },
  ];

  const locationOptions = [
    { value: 'new-york', label: 'New York' },
    { value: 'california', label: 'California' },
    { value: 'texas', label: 'Texas' },
    { value: 'florida', label: 'Florida' },
    { value: 'nevada', label: 'Nevada' },
    { value: 'arizona', label: 'Arizona' },
    { value: 'colorado', label: 'Colorado' },
    { value: 'utah', label: 'Utah' },
    { value: 'oregon', label: 'Oregon' },
  ];

  const handleSearchToggle = () => {
    setShowSearchInput(!showSearchInput);
    if (showSearchInput) {
      setFilters((prev) => ({ ...prev, search: '' }));
    }
  };

  return (
    <div className="bg-gray-50 p-4 rounded-lg mb-8">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          {/* Price Filter */}
          <Select
            value={filters.price}
            onValueChange={(value) =>
              setFilters((prev) => ({ ...prev, price: value }))
            }
          >
            <SelectTrigger className="w-[120px] h-10 bg-white border border-gray-300 hover:border-gray-400 focus:border-blue-500">
              <SelectValue placeholder="Price" />
            </SelectTrigger>
            <SelectContent>
              {priceOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Type Filter */}
          <Select
            value={filters.type}
            onValueChange={(value) =>
              setFilters((prev) => ({ ...prev, type: value }))
            }
          >
            <SelectTrigger className="w-[130px] h-10 bg-white border border-gray-300 hover:border-gray-400 focus:border-blue-500">
              <SelectValue placeholder="Equipment" />
            </SelectTrigger>
            <SelectContent>
              {typeOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Search Input - Always Visible */}
          <div className="relative">
            <div className="flex items-center bg-white border border-gray-300 rounded-md hover:border-gray-400 focus-within:border-blue-500 transition-colors">
              <input
                type="text"
                placeholder="Keyword Search"
                value={filters.search}
                onChange={(e) =>
                  setFilters((prev) => ({ ...prev, search: e.target.value }))
                }
                className="w-[180px] h-10 px-3 pr-8 text-sm focus:outline-none bg-transparent"
              />
              <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3" />
            </div>
          </div>

          {/* Additional Keyword Search Button */}
          <div className="relative">
            {!showSearchInput ? (
              <button
                onClick={handleSearchToggle}
                className="flex items-center h-10 px-3 bg-white border border-gray-300 rounded-md hover:border-gray-400 focus:border-blue-500 transition-colors text-sm text-gray-700"
              >
                <span>Keyword Search</span>
                <ChevronDown className="w-4 h-4 ml-2 text-gray-500" />
              </button>
            ) : (
              <div className="flex items-center">
                <div className="bg-white border border-gray-300 rounded-md hover:border-gray-400 focus-within:border-blue-500 transition-colors">
                  <input
                    type="text"
                    placeholder="Enter keywords..."
                    value={filters.search}
                    onChange={(e) =>
                      setFilters((prev) => ({
                        ...prev,
                        search: e.target.value,
                      }))
                    }
                    className="w-[200px] h-10 px-3 text-sm focus:outline-none"
                    autoFocus
                  />
                </div>
                <button
                  onClick={handleSearchToggle}
                  className="ml-2 p-1 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <X className="w-4 h-4 text-gray-500" />
                </button>
              </div>
            )}
          </div>

          {/* Location Filter */}
          <Select
            value={filters.location}
            onValueChange={(value) =>
              setFilters((prev) => ({ ...prev, location: value }))
            }
          >
            <SelectTrigger className="w-[140px] h-10 bg-white border border-gray-300 hover:border-gray-400 focus:border-blue-500">
              <SelectValue placeholder="California" />
            </SelectTrigger>
            <SelectContent>
              {locationOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearchToggle}
          className="flex items-center justify-center w-10 h-10 bg-white border border-gray-300 rounded-md hover:bg-gray-50 hover:border-gray-400 transition-colors"
        >
          <Search className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default FilterSection;
