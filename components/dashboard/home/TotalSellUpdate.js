'use client';

import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const TotalSellUpdate = ({ data }) => {
  // Sample data format - tumi nijeder data structure onujayi modify korte parbe
  const defaultData = [
    { day: '01', lastMonth: 60, presentMonth: 35 },
    { day: '02', lastMonth: 62, presentMonth: 38 },
    { day: '03', lastMonth: 63, presentMonth: 40 },
    { day: '04', lastMonth: 65, presentMonth: 42 },
    { day: '05', lastMonth: 67, presentMonth: 45 },
    { day: '06', lastMonth: 68, presentMonth: 48 },
    { day: '07', lastMonth: 72, presentMonth: 50 },
    { day: '08', lastMonth: 75, presentMonth: 52 },
    { day: '09', lastMonth: 78, presentMonth: 53 },
    { day: '10', lastMonth: 82, presentMonth: 55 },
    { day: '11', lastMonth: 85, presentMonth: 56 },
    { day: '12', lastMonth: 85, presentMonth: 58 },
  ];

  const chartData = data || defaultData;

  // Custom tooltip component
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
          <p className="text-sm font-semibold mb-1">
            Day {payload[0].payload.day}
          </p>
          <p className="text-sm text-orange-400">
            Last Month:{' '}
            <span className="font-semibold">{payload[0].value}</span>
          </p>
          <p className="text-sm text-orange-600">
            Present Month:{' '}
            <span className="font-semibold">{payload[1].value}</span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            Total Sell Update
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Total sell compayer in last month and present month
          </p>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </button>
      </div>

      {/* Chart */}
      <div className="w-full" style={{ height: '300px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              {/* Gradient for Last Month */}
              <linearGradient id="colorLastMonth" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FDB462" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#FDB462" stopOpacity={0.05} />
              </linearGradient>
              {/* Gradient for Present Month */}
              <linearGradient
                id="colorPresentMonth"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="5%" stopColor="#F97316" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#F97316" stopOpacity={0.05} />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="0"
              vertical={true}
              stroke="#f0f0f0"
              opacity={0.5}
            />

            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
              label={{
                value: 'Days',
                position: 'insideBottom',
                offset: -5,
                style: { fill: '#6B7280', fontSize: 12 },
              }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
              label={{
                value: 'Total Sell in Last Month',
                angle: -90,
                position: 'insideLeft',
                style: { fill: '#6B7280', fontSize: 12 },
              }}
              domain={[0, 100]}
              ticks={[0, 20, 40, 60, 80, 100]}
            />

            <Tooltip content={<CustomTooltip />} />

            <Legend
              verticalAlign="top"
              align="right"
              iconType="circle"
              wrapperStyle={{ paddingBottom: '20px' }}
              formatter={(value) => (
                <span className="text-sm text-gray-600">
                  {value === 'lastMonth' ? 'last Month' : 'Present Month'}
                </span>
              )}
            />

            {/* Last Month Area */}
            <Area
              type="monotone"
              dataKey="lastMonth"
              stroke="#FDB462"
              strokeWidth={2}
              fill="url(#colorLastMonth)"
              dot={false}
              activeDot={{ r: 6, fill: '#FDB462' }}
            />

            {/* Present Month Area */}
            <Area
              type="monotone"
              dataKey="presentMonth"
              stroke="#F97316"
              strokeWidth={2}
              fill="url(#colorPresentMonth)"
              dot={false}
              activeDot={{ r: 6, fill: '#F97316' }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TotalSellUpdate;
