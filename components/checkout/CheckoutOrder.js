'use client';

import Logo from '@/assets/icons/truck-logo.svg';
import RentalBooking from './RentalBooking';

// Example with multiple items
const CheckoutOrder = () => {
  const rentalItems = [
    {
      company: 'Turbine Trailers',
      logo: Logo,
      likes: 109,
      title: 'Dump Trailers',
      pickup: {
        location: 'Burnt Hills, NY',
        note: 'Exact location information will be provided after your rental is finalized.',
      },
      pricing: {
        amount: 115,
        period: 'Day',
        discount: '40% of Weekly (7+ Days) Booking',
      },
      image:
        'https://images.unsplash.com/photo-1592805144716-feeccccef5ac?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      company: 'Elite Equipment',
      logo: Logo,
      likes: 87,
      title: 'Cargo Trailers',
      pickup: {
        location: 'Albany, NY',
        note: 'Location details shared after booking confirmation.',
      },
      pricing: {
        amount: 95,
        period: 'Day',
        discount: '35% of Weekly (7+ Days) Booking',
      },
      image:
        'https://images.unsplash.com/photo-1592805144716-feeccccef5ac?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-8">
      {rentalItems.map((item, index) => (
        <RentalBooking key={index} data={item} />
      ))}
    </div>
  );
};

export default CheckoutOrder;
