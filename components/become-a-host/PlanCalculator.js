'use client';

import { useState } from 'react';
import TopTitle from '../TopTitle';

const PlanCalculator = () => {
  const [trailers, setTrailers] = useState(4);
  const [daysRented, setDaysRented] = useState(12);
  const [dailyRate, setDailyRate] = useState(100);
  const [period, setPeriod] = useState('yearly');

  const plans = [
    {
      name: 'Launch',
      hostPlanCost: 0,
      feePercentage: 20.5,
      maxTrailers: 2,
    },
    {
      name: 'Accelerate',
      hostPlanCost: period === 'yearly' ? 1500 : 150,
      feePercentage: 3.5,
      maxTrailers: 10,
    },
    {
      name: 'Enterprise',
      hostPlanCost: period === 'yearly' ? 3000 : 300,
      feePercentage: 3.5,
      maxTrailers: Infinity,
    },
  ];

  const calculateEarnings = (plan) => {
    const effectiveTrailers = Math.min(trailers, plan.maxTrailers);
    const multiplier = period === 'yearly' ? 12 : 1;
    const gross = effectiveTrailers * daysRented * dailyRate * multiplier;
    const fees = (gross * plan.feePercentage) / 100 + plan.hostPlanCost;
    const netRevenue = gross - fees;

    return {
      gross: gross.toFixed(0),
      fees: fees.toFixed(0),
      netRevenue: netRevenue.toFixed(0),
    };
  };

  return (
    <div className="py-16 lg:py-[120px]">
      <div className="container">
        <TopTitle title="Plan Calculator" align="center" />
        <div className="bg-[#FAFAFA] rounded-2xl sm:p-6">
          <div className="p-6">
            <h2 className="text-xl font-bold text-[#262626] mb-9">
              Your Rental Fleet
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div>
                <label className="block text-base font-bold text-[#262626] mb-4">
                  Number of Trailers
                </label>
                <input
                  type="number"
                  min="1"
                  value={trailers}
                  onChange={(e) =>
                    setTrailers(Math.max(1, parseInt(e.target.value) || 1))
                  }
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#CF9645] focus:border-transparent outline-none text-lg"
                />
              </div>

              <div>
                <label className="block text-base font-bold text-[#262626] mb-4">
                  Days Rented/Month
                </label>
                <input
                  type="number"
                  min="1"
                  max="31"
                  value={daysRented}
                  onChange={(e) =>
                    setDaysRented(
                      Math.min(31, Math.max(1, parseInt(e.target.value) || 1))
                    )
                  }
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#CF9645] focus:border-transparent outline-none text-lg"
                />
              </div>

              <div>
                <label className="block text-base font-bold text-[#262626] mb-4">
                  Average Daily Rate
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 text-lg">
                    $
                  </span>
                  <input
                    type="number"
                    min="1"
                    value={dailyRate}
                    onChange={(e) =>
                      setDailyRate(Math.max(1, parseInt(e.target.value) || 1))
                    }
                    className="w-full pl-8 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#CF9645] focus:border-transparent outline-none text-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Your Rental Earnings
              </h2>
              <select
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CF9645] focus:border-transparent outline-none cursor-pointer text-[#161616] text-[15px]"
              >
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-2 sm:px-4 font-semibold text-gray-900"></th>
                    <th className="text-center py-4 px-2 sm:px-4 font-semibold text-yellow-600">
                      Gross
                    </th>
                    <th className="text-center py-4 px-2 sm:px-4 font-semibold text-yellow-600">
                      Host Plan
                    </th>
                    <th className="text-center py-4 px-2 sm:px-4 font-semibold text-yellow-600">
                      Fees*
                    </th>
                    <th className="text-center py-4 px-2 sm:px-4 font-semibold text-yellow-600">
                      Net Revenue*
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {plans.map((plan, index) => {
                    const earnings = calculateEarnings(plan);
                    const isDisabled = plan.maxTrailers < trailers;

                    return (
                      <tr
                        key={index}
                        className={`border-b border-gray-100 ${
                          isDisabled ? 'opacity-50' : ''
                        }`}
                      >
                        <td className="py-5 px-2 sm:px-4">
                          <div className="font-bold text-xl lg:text-[22px] text-[#181D27]">
                            {plan.name}
                          </div>
                          {isDisabled && (
                            <div className="text-xs text-red-500 mt-1">
                              Max {plan.maxTrailers} trailers
                            </div>
                          )}
                        </td>
                        <td className="text-center py-5 px-2 sm:px-4 text[#535862] font-normal text-sm">
                          ${parseInt(earnings.gross).toLocaleString()}
                        </td>
                        <td className="text-center py-5 px-2 sm:px-4 text[#535862] font-normal text-sm">
                          {plan.hostPlanCost === 0
                            ? 'FREE'
                            : `$${plan.hostPlanCost.toLocaleString()}`}
                        </td>
                        <td className="text-center py-5 px-2 sm:px-4 text[#535862] font-normal text-sm">
                          ${parseInt(earnings.fees).toLocaleString()}
                        </td>
                        <td className="text-center py-5 px-2 sm:px-4 text[#535862] font-normal text-sm">
                          ${parseInt(earnings.netRevenue).toLocaleString()}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 space-y-2 text-base font-medium text-[#353D3B]">
            <div className="flex items-start">
              <span className="mr-2">•</span>
              <span>Numbers represent best possible estimates</span>
            </div>
            <div className="flex items-start">
              <span className="mr-2">•</span>
              <span>
                Fees include towlos take rate (Launch plan only) and payment
                processing fees
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanCalculator;
