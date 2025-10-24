// components/DashboardSection.jsx
import QuickActions from './QuickActions';
import RecentActivity from './RecentActivity';

export default function HomeTable() {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Quick Actions - Takes 2 columns on large screens */}
      <div className="lg:col-span-2">
        <QuickActions />
      </div>

      {/* Recent Activity - Takes 1 column on large screens */}
      <div className="lg:col-span-1">
        <RecentActivity />
      </div>
    </div>
  );
}
