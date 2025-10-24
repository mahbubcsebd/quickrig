import HomeTable from '@/components/dashboard/home/HomeTable';
import StatsCards from '@/components/dashboard/home/StatsCards';
import StripeSetupBanner from '@/components/dashboard/home/StripeSetupBanner';
import TotalSellUpdate from '@/components/dashboard/home/TotalSellUpdate';

const DashboardPage = () => {
  const salesData = [
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

  return (
    <>
      <StripeSetupBanner />
      <StatsCards />
      <HomeTable />
      <TotalSellUpdate data={salesData} />
    </>
  );
};

export default DashboardPage;
