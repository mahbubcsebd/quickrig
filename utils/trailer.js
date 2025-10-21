const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

// export const getAllTrailers = async () => {
//   const res = await fetch(`${baseUrl}/trailers/search`, {
//     cache: 'no-store',
//   });

//   if (!res.ok) {
//     throw new Error('Failed to fetch all trailers');
//   }

//   return res.json();
// };

/**
 * Fetch trailers with optional search parameters
 * @param {Object} params - Search parameters
 * @param {string} [params.keyword] - Search keyword
 * @param {string} [params.location] - Location string (e.g., "Los Angeles, CA")
 * @param {number} [params.latitude] - Latitude coordinate
 * @param {number} [params.longitude] - Longitude coordinate
 * @param {number} [params.radius=50] - Search radius in miles
 * @param {string} [params.start_date] - Start date (YYYY-MM-DD)
 * @param {string} [params.end_date] - End date (YYYY-MM-DD)
 * @param {number} [params.trailer_type_id] - Trailer type ID
 * @param {number} [params.min_price] - Minimum price
 * @param {number} [params.max_price] - Maximum price
 * @param {number} [params.min_weight_capacity] - Minimum weight capacity
 * @param {number} [params.max_weight_capacity] - Maximum weight capacity
 * @param {boolean} [params.instant_booking] - Filter for instant booking
 * @param {boolean} [params.delivery_available] - Filter for delivery available
 * @param {string} [params.sort='relevance'] - Sort by (relevance, price_asc, price_desc, rating)
 * @param {number} [params.page=1] - Page number
 * @param {number} [params.per_page=20] - Items per page
 * @returns {Promise<Object>} Trailer search results
 */
export const getAllTrailers = async (params = {}) => {
  // Create URLSearchParams from params object, filtering out undefined/null values
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      searchParams.append(key, value.toString());
    }
  });

  // Build URL with query parameters
  const url = `${baseUrl}/trailers/search${
    searchParams.toString() ? `?${searchParams.toString()}` : ''
  }`;

  const res = await fetch(url, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch all trailers');
  }

  return res.json();
};

export const getFeaturedTrailers = async () => {
  const res = await fetch(`${baseUrl}/trailers/featured`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch featured trailer');
  }

  return res.json();
};

export const getTypeTrailers = async () => {
  const res = await fetch(`${baseUrl}/trailers/types?active=true`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch featured trailer');
  }

  return res.json();
};

export const getTrailerBySlug = async (slug) => {
  const res = await fetch(`${baseUrl}/trailers/${slug}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch trailer by slug');
  }

  return res.json();
};
