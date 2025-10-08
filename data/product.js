// Complete Product Data Structure for Details Page
const product = {
  // Basic Info
  id: 1,
  title: 'Dump Trailers',
  type: 'Equipment',
  category: 'Trailers',

  // Pricing
  price: 115, // per day
  priceUnit: 'day',
  totalPrice: 115,
  currency: '$',

  // Location
  location: 'New York',
  city: 'New York',
  state: 'NY',
  zipCode: '10001',
  address: '123 Main Street',
  coordinates: {
    lat: 40.7128,
    lng: -74.006,
  },

  // Images
  images: [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      alt: 'Dump Trailer Main View',
      isPrimary: true,
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      alt: 'Dump Trailer Side View',
      isPrimary: false,
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      alt: 'Dump Trailer Back View',
      isPrimary: false,
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      alt: 'Dump Trailer Detail',
      isPrimary: false,
    },
  ],

  // Availability
  availability: {
    startDate: null, // user will select
    endDate: null, // user will select
    isAvailable: true,
    minRentalDays: 1,
    maxRentalDays: 30,
  },

  // Discounts
  discounts: [
    {
      type: 'weekly',
      days: 7,
      percentage: 15,
      label: 'Weekly (7+ days)',
      discountText: '15% off',
    },
    {
      type: 'monthly',
      days: 30,
      percentage: 30,
      label: 'Monthly (30+ days)',
      discountText: '30% off',
    },
  ],

  // Promo Code
  promoCode: {
    enabled: true,
    placeholder: 'Enter promo code',
  },

  // Specifications
  specifications: {
    plugType: '7-WAY',
    brakes: 'YES',
    ballSize: '2 5/16 IN',
    tongueWeight: 2265, // lbs
    tongueWeightUnit: 'LBS',
    maxWeight: 8135, // lbs
    maxWeightUnit: 'LBS',
  },

  // Dimensions
  dimensions: {
    enabled: true,
    measurements: [
      {
        id: 'D',
        label: 'D',
        value: 13,
        unit: 'inches',
        description: 'Coupler Height from Ground',
      },
      {
        id: 'F',
        label: 'F',
        value: 8.75,
        unit: 'inches',
        description: 'Fender Height from Deck',
      },
    ],
    diagramImage: '/path/to/dimension-diagram.svg',
  },

  // Extras
  extras: {
    enabled: true,
    items: [], // Future use for add-ons
  },

  // Description & Details
  description: {
    short:
      'Heavy-duty dump trailer perfect for construction and landscaping projects.',
    full: `Transport your tools, gear, or equipment safely and in style with this heavy-dutywindless cargo trailer, featuring a sleek national gray exterior with a galvanized steel front guard and wheel protection. The trailer is an ideal solution for durability and performance. The 14-panel top of this trailer features heavy-duty torsion rubber ride axles equipped with radial tires, brakes, and full Dexter components, and custom antifreeze.`,
    bulletPoints: [
      'Host Contact Information',
      'Questions (how the rental is approved)',
      'Trailer Specifications',
      'Directions to Pick-Up',
      '*Message Daily does may include weekend and holiday rates',
      '*Damage Will Always=Notice_none',
      '*Cancellation Policy Available',
      'Rental Minimum: 1 day(s)',
      'Rental Maximum: 30 day(s)',
    ],
  },

  // Additional Information
  additionalInfo: `First registration or loaded weight in the summer of 2021. Some of the Concrete platters are I wanted to trailer our cars in the truck when their driving times, which could risk overloading the trailer but this is how the frame is rated with the axles and tires it ships with. Upgraded to leaf from torsion axles to gain more ground clearance and because axle disassembly by very limited options. As a result, this registration list leaves gone out of it I need, I mean, torsion for a car trailer!

I thought someone should be screaming about it until I saw there is ZERO payload without having to purchase and sit was from the test but soon when the torsion supply. For a single axle "just couldn't make that through out of the sport. A few days later, I decided to run off it. Just pass with...Thanks and Seen. The I bought of theiring resources when not using when radio I improvise with the 7 pin blade connector where...`,

  // Host Information
  host: {
    id: 101,
    name: 'Turbine Trailers',
    avatar: '/path/to/host-avatar.jpg',
    memberSince: 'March 2025',
    joinedDate: '2025-03-15',
    verified: true,
    rating: 4.8,
    totalReviews: 156,
    responseTime: 'within 1 hour',
    responseRate: 98,
  },

  // Reviews
  reviews: {
    totalCount: 415,
    averageRating: 4.5,
    ratingBreakdown: {
      5: 280,
      4: 95,
      3: 30,
      2: 7,
      1: 3,
    },
    recentReviews: [
      {
        id: 1,
        reviewerName: 'Samantha D.',
        reviewerAvatar: null,
        rating: 4,
        date: '2023-08-16',
        comment:
          "I absolutely love this trailer! The design is unique and the fabric feels so comfortable. It's a fellow designer. I appreciate the attention to detail. It's become my go-to piece for any occasion.",
        verified: true,
      },
      {
        id: 2,
        reviewerName: 'Alex M.',
        reviewerAvatar: null,
        rating: 5,
        date: '2023-08-15',
        comment:
          "I was amazed by my expediential fitting a HUU4 designer myself. I'm quite picky about aesthetics, and this t-shirt exceeded gets a thumbs up, no thanks up. Not trick.",
        verified: true,
      },
      {
        id: 3,
        reviewerName: 'Ethan R.',
        reviewerAvatar: null,
        rating: 3.5,
        date: '2023-08-16',
        comment:
          'This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I receive compliments every time I wear it.',
        verified: true,
      },
      {
        id: 4,
        reviewerName: 'Olivia P.',
        reviewerAvatar: null,
        rating: 4,
        date: '2023-08-17',
        comment:
          "As a UI/UX enthusiast, I value simplicity and functionality. It's simple in design but makes a significant impact. Plus, it's comfortable and well made. Highly recommend!",
        verified: true,
      },
    ],
  },

  // Tags & Categories
  tags: ['dump trailer', 'construction', 'heavy-duty', 'rental'],

  // Status
  status: 'active', // active, inactive, pending
  featured: true,
  views: 1420,
  saves: 89,
  shares: 34,

  // Rental Policies
  policies: {
    cancellation: '24 hours notice required for full refund',
    insurance: 'Included in rental price',
    deposit: 500,
    depositCurrency: '$',
    fuelPolicy: 'Return with same fuel level',
    cleaningFee: 50,
    lateFee: 25, // per hour
  },

  // Timestamps
  createdAt: '2025-01-15T10:30:00Z',
  updatedAt: '2025-10-01T14:20:00Z',

  // SEO
  seo: {
    metaTitle: 'Dump Trailers for Rent - Heavy Duty Equipment | RentHub',
    metaDescription:
      'Rent high-quality dump trailers for your construction and landscaping projects. Daily, weekly, and monthly rates available.',
    keywords: [
      'dump trailer rental',
      'construction equipment',
      'heavy duty trailer',
    ],
  },
};

export default product;
