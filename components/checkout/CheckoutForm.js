'use client';

import Amex from '@/assets/icons/amex.svg';
import ApplePay from '@/assets/icons/apple-pay.svg';
import Stripe from '@/assets/icons/stripe.svg';
import Visa from '@/assets/icons/visa.svg';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import FormInput from '../FormInput';

const CheckoutForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      state: '',
      city: '',
      dob: '',
      zipCode: '',
      cardNumber: '',
      expiryDate: '',
      securityCode: '',
      country: '',
      saveDetails: false,
    },
  });

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    alert('Form submitted successfully! Check console for data.');
  };

  // Dynamic options
  const stateOptions = [
    { value: 'Alabama', label: 'Alabama' },
    { value: 'Alaska', label: 'Alaska' },
    { value: 'Arizona', label: 'Arizona' },
    { value: 'California', label: 'California' },
    { value: 'Texas', label: 'Texas' },
  ];

  const countryOptions = [
    { value: 'Bangladesh', label: 'Bangladesh' },
    { value: 'India', label: 'India' },
    { value: 'Pakistan', label: 'Pakistan' },
    { value: 'USA', label: 'USA' },
  ];

  const paymentMethods = [
    {
      id: 1,
      name: 'visa',
      icon: Visa,
    },
    {
      id: 2,
      name: 'apple pay',
      icon: ApplePay,
    },
    {
      id: 3,
      name: 'stripe',
      icon: Stripe,
    },
    {
      id: 4,
      name: 'amex',
      icon: Amex,
    },
  ];

  // Card icons
  const cardIcons = (
    <>
      {paymentMethods.map((paymentMethod) => (
        <Image
          key={paymentMethod.id}
          src={paymentMethod.icon}
          alt={paymentMethod.title}
          className="w-[26px] h-5"
          width={26}
          height={20}
        />
      ))}
    </>
  );

  return (
    <div className="p-6">
      {/* Your Details Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-[#262626] mb-6 md:mb-8 xl:mb-10">
          Your Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput
            name="firstName"
            label="First name"
            placeholder="Laura"
            register={register}
            rules={{
              required: 'First name is required',
              minLength: {
                value: 2,
                message: 'Minimum 2 characters required',
              },
            }}
            error={errors.firstName}
          />

          <FormInput
            name="lastName"
            label="Last name"
            placeholder="Cintiya"
            register={register}
            rules={{
              required: 'Last name is required',
              minLength: {
                value: 2,
                message: 'Minimum 2 characters required',
              },
            }}
            error={errors.lastName}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput
            name="email"
            label="E-mail"
            type="email"
            placeholder="lauracintiya@site.com"
            register={register}
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            }}
            error={errors.email}
          />

          <FormInput
            name="phone"
            label="Phone Number"
            type="tel"
            placeholder="+6208737445"
            register={register}
            rules={{
              required: 'Phone number is required',
              pattern: {
                value: /^[+]?[\d\s-()]+$/,
                message: 'Invalid phone number',
              },
            }}
            error={errors.phone}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput
            name="state"
            label="State"
            register={register}
            isSelect={true}
            options={stateOptions}
            rules={{ required: 'State is required' }}
            error={errors.state}
          />

          <FormInput
            name="city"
            label="City"
            placeholder="Dhaka"
            register={register}
            rules={{ required: 'City is required' }}
            error={errors.city}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput
            name="dob"
            label="Date of Birth"
            type="date"
            register={register}
            rules={{
              required: 'Date of birth is required',
              validate: (value) => {
                const age =
                  new Date().getFullYear() - new Date(value).getFullYear();
                return age >= 18 || 'You must be at least 18 years old';
              },
            }}
            error={errors.dob}
          />

          <FormInput
            name="zipCode"
            label="Zip Code"
            placeholder="1234"
            register={register}
            rules={{
              required: 'Zip code is required',
              pattern: {
                value: /^\d{4,6}$/,
                message: 'Invalid zip code',
              },
            }}
            error={errors.zipCode}
          />
        </div>
      </div>

      {/* Payment Method Section */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-[#262626] mb-6 md:mb-8 xl:mb-10">
          Payment Method
        </h2>

        <FormInput
          name="cardNumber"
          label="Card number"
          placeholder="123 4567 1234 1234"
          register={register}
          rules={{
            required: 'Card number is required',
            pattern: {
              value: /^[\d\s]{13,19}$/,
              message: 'Invalid card number',
            },
          }}
          error={errors.cardNumber}
          icon={cardIcons}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput
            name="expiryDate"
            label="Expiration date"
            placeholder="MM / YY"
            register={register}
            rules={{
              required: 'Expiry date is required',
              pattern: {
                value: /^(0[1-9]|1[0-2])\s?\/\s?\d{2}$/,
                message: 'Format: MM/YY',
              },
            }}
            error={errors.expiryDate}
          />

          <FormInput
            name="securityCode"
            label="Security code"
            placeholder="CVC"
            type="password"
            register={register}
            rules={{
              required: 'Security code is required',
              pattern: {
                value: /^\d{3,4}$/,
                message: 'Invalid CVC (3-4 digits)',
              },
            }}
            error={errors.securityCode}
          />
        </div>

        <FormInput
          name="country"
          label="Country"
          register={register}
          isSelect={true}
          options={countryOptions}
          rules={{ required: 'Country is required' }}
          error={errors.country}
        />

        {/* Save Details Checkbox */}
        <div className="flex items-center mt-4">
          <input
            type="checkbox"
            {...register('saveDetails')}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label className="ml-2 text-sm text-gray-700">
            Save payment details for future purchases
          </label>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="button"
        onClick={handleSubmit(onSubmit)}
        className="w-full bg-[#CF9645]  text-white font-medium py-4 px-8 rounded-lg transition duration-300 text-lg md:text-xl"
      >
        Continue
      </button>
    </div>
  );
};

export default CheckoutForm;
