'use client';

import { Autocomplete, useLoadScript } from '@react-google-maps/api';
import { Calendar, MapPin, Search } from 'lucide-react';
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const libraries = ['places'];

export default function SearchBar() {
  const [location, setLocation] = useState('');
  const [autocomplete, setAutocomplete] = useState(null);

  // initial today → today
  const today = new Date();
  const [dateRange, setDateRange] = useState([
    {
      startDate: today,
      endDate: today,
      key: 'selection',
    },
  ]);

  const [showCalendar, setShowCalendar] = useState(false);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDJJvJZcfiTHmbA5GxFE45gGy4vSYS26UU',
    libraries,
  });

  const onLoad = (auto) => setAutocomplete(auto);

  const onPlaceChanged = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      setLocation(place.formatted_address || place.name);
    }
  };

  // 📍 Current Location Button
  const getCurrentLocation = async () => {
    if (!navigator.geolocation) {
      alert('Geolocation not supported');
      return;
    }

    setLocation('Fetching location...');

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=1`
          );
          const data = await res.json();

          if (data && data.address) {
            const addr = [
              data.address.house_number,
              data.address.road,
              data.address.neighbourhood,
              data.address.suburb,
              data.address.city,
              data.address.state,
              data.address.country,
            ]
              .filter(Boolean)
              .join(', ');

            setLocation(addr || data.display_name);
          } else {
            setLocation(`${latitude.toFixed(4)}, ${longitude.toFixed(4)}`);
          }
        } catch (err) {
          console.error('Error fetching location:', err);
          setLocation(`${latitude.toFixed(4)}, ${longitude.toFixed(4)}`);
        }
      },
      (error) => {
        console.error('Geolocation error:', error);
        alert('Could not get your location');
      },
      { enableHighAccuracy: true }
    );
  };

  const handleSearch = () => {
    console.log({
      location,
      startDate: dateRange[0].startDate,
      endDate: dateRange[0].endDate,
    });
  };

  if (!isLoaded) return <p>Loading...</p>;

  return (
    <div className="relative flex w-full max-w-5xl mx-auto bg-white rounded-md shadow-md p-6 gap-4 items-end">
      {/* Where */}
      <div className="flex-1 text-left">
        <label className="text-base text-black font-normal mb-1 block">
          Where
        </label>
        <div className="flex items-center gap-2 w-full border border-gray-[#F1F1F1] rounded-sm px-4 py-3">
          <div className="w-full">
            <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
              <input
                type="text"
                placeholder="City, State, Road, House..."
                className="w-full bg-transparent outline-none text-gray-700 placeholder-[#7A7A7A]"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </Autocomplete>
          </div>
          <MapPin
            size={18}
            className="text-gray-400 cursor-pointer"
            onClick={getCurrentLocation}
          />
        </div>
      </div>

      {/* When */}
      <div className="flex-1 text-left">
        <label className="text-base text-black font-normal mb-1 block">
          When
        </label>
        <div
          className="flex items-center gap-2 w-full border border-gray-[#F1F1F1] rounded-sm px-4 py-3 cursor-pointer justify-between"
          onClick={() => setShowCalendar(!showCalendar)}
        >
          <span className="text-gray-700">
            {dateRange[0].startDate.toDateString()} -{' '}
            {dateRange[0].endDate.toDateString()}
          </span>
          <Calendar size={18} className="text-gray-400" />
        </div>

        {showCalendar && (
          <div className="absolute top-14 left-0 z-50 bg-white shadow-lg rounded-sm">
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDateRange([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={dateRange}
            />
          </div>
        )}
      </div>

      {/* Search button */}
      <button
        onClick={handleSearch}
        className="w-[50px] h-[50px] flex justify-center items-center text-white rounded-sm bg-[#CF9645]"
      >
        <Search size={20} className="text-white" />
      </button>
    </div>
  );
}
