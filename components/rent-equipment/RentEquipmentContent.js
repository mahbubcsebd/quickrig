'use client';

import { getAllTrailers } from '@/utils/trailer';
import { Loader2 } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import TowlosGallery from './TowlosGallery';

const RentEquipmentContent = () => {
  const searchParams = useSearchParams();
  const [trailers, setTrailers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrailers = async () => {
      try {
        setLoading(true);
        setError(null);

        // Build params object from URL search params
        const params = {};

        // Get all search params
        const keyword = searchParams.get('keyword');
        const location = searchParams.get('location');
        const min_price = searchParams.get('min_price');
        const max_price = searchParams.get('max_price');
        const trailer_type_id = searchParams.get('trailer_type_id');
        const start_date = searchParams.get('start_date');
        const end_date = searchParams.get('end_date');
        const page = searchParams.get('page') || '1';
        const per_page = searchParams.get('per_page') || '20';

        // Add to params if they exist
        if (keyword) params.keyword = keyword;
        if (location) params.location = location;
        if (min_price) params.min_price = min_price;
        if (max_price) params.max_price = max_price;
        if (trailer_type_id) params.trailer_type_id = trailer_type_id;
        if (start_date) params.start_date = start_date;
        if (end_date) params.end_date = end_date;
        params.page = page;
        params.per_page = per_page;

        const res = await getAllTrailers(params);
        setTrailers(res.data.trailers || []);
      } catch (err) {
        console.error('Error fetching trailers:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTrailers();
  }, [searchParams]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
          <p className="font-semibold">Error loading trailers</p>
          <p className="text-sm">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <TowlosGallery trailers={trailers} />
    </div>
  );
};

export default RentEquipmentContent;
