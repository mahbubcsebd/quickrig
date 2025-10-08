'use client';

import { Check, Layers, Package, Zap } from 'lucide-react';
import { useState } from 'react';
import TopTitle from '../TopTitle';

const HostPlans = () => {
  const [plans] = useState([
    {
      icon: Zap,
      badge: 'LAUNCH',
      title: 'Free',
      description: 'Perfect for occasional users and small businesses',
      features: [
        'List up to 2 items',
        'Access basic support',
        '3 bookings per month',
        'Visibility in local area',
      ],
      buttonText: 'Get Start',
      buttonAction: 'start',
    },
    {
      icon: Layers,
      badge: 'ACCELERATE',
      title: '$49/mo',
      description: 'For growing operations and frequent rentals',
      features: [
        'List up to 10 items',
        'Priority support',
        'Unlimited bookings',
        'Regional promotion',
        'Dedicated account manager',
      ],
      buttonText: 'Get Start',
      buttonAction: 'start',
      popular: true,
    },
    {
      icon: Package,
      badge: 'ENTERPRISE',
      title: 'Custom',
      description: 'Tailored solutions for large-scale businesses',
      features: [
        'Unlimited listings',
        'Custom integrations',
        'API access & analytics',
        'Nationwide visibility',
        '24/7 dedicated support',
      ],
      buttonText: 'Contact Us',
      buttonAction: 'contact',
    },
  ]);

  const handleAction = (action, planName) => {
    if (action === 'start') {
      alert(`Starting with ${planName} plan!`);
    } else {
      alert(`Contacting sales for ${planName} plan!`);
    }
  };

  return (
    <div className="py-16 lg:py-[120px] bg-[#FAFAFA]">
      <div className="container">
        <TopTitle title="Host Plans" align="center" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 sm:p-8 flex flex-col`}
              >
                <div className="flex flex-col items-center mb-8">
                  <div className="w-12 h-12 rounded-full text-[#CF9645] bg-[#FEF7EE] mb-5 flex justify-center items-center">
                    <IconComponent className="w-4 h-4 text-[#CF9645]" />
                  </div>
                  <span className="text-[#CF9645] font-semibold text-xl tracking-wider mb-2">
                    {plan.badge}
                  </span>
                  <h2 className="text-4xl sm:text-5xl font-bold text-[#181D27] mb-2">
                    {plan.title}
                  </h2>
                  <p className="text-[#535862] text-center text-base px-2">
                    {plan.description}
                  </p>
                </div>

                <div className="flex-grow mb-6">
                  <ul className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-6 h-6 rounded-full text-[#CF9645] bg-[#FEF7EE] flex justify-center items-center">
                          <Check className="w-4 h-4 text-[#CF9645]" />
                        </span>
                        <span className="text-[#535862] text-base font-normal">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => handleAction(plan.buttonAction, plan.badge)}
                  className="text-lg md:text-xl lg:text-2xl font-medium px-6 md:px-8 py-3 md:py-4 rounded flex justify-center items-center gap-2 transition-colors duration-200 capitalize w-full sm:w-auto text-white bg-[#CF9645] hover:opacity-90 cursor-pointer"
                >
                  {plan.buttonText}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HostPlans;
