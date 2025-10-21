// app/layout.js or app/dashboard/layout.js
import DashboardLayout from '@/components/dashboard/DashboardLayout';

export default function DashBoradRootLayout({ children }) {
  return (
    <>
      <DashboardLayout>{children}</DashboardLayout>
    </>
  );
}
