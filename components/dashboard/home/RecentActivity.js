// components/RecentActivity.jsx
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  CheckSquare,
  MessageSquare,
  MoreVertical,
  Package,
} from 'lucide-react';

const activities = [
  {
    id: 1,
    icon: CheckSquare,
    title: 'Flatbed Trailer',
    description: 'Booking confirmed for',
    timestamp: 'Aug 10-15-2025',
    iconBg: 'bg-gray-100',
  },
  {
    id: 2,
    icon: Package,
    title: 'Backhoe Loader',
    description: 'New listing published',
    timestamp: 'Aug 10-15-2025',
    iconBg: 'bg-gray-100',
  },
  {
    id: 3,
    icon: MessageSquare,
    title: 'Tom H',
    description: 'Message received from upcoming rental',
    timestamp: null,
    iconBg: 'bg-gray-100',
  },
  {
    id: 4,
    icon: MessageSquare,
    title: 'Dump Truck',
    description: 'Booking request',
    timestamp: 'Pending approval',
    iconBg: 'bg-gray-100',
  },
];

export default function RecentActivity() {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold">
            Recent Activity
          </CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreVertical className="w-5 h-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>View all</DropdownMenuItem>
              <DropdownMenuItem>Mark all as read</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={activity.id}>
              <div className="flex gap-4">
                <div
                  className={`flex-shrink-0 w-10 h-10 ${activity.iconBg} rounded-lg flex items-center justify-center`}
                >
                  <activity.icon className="w-5 h-5 text-gray-700" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start gap-2">
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">
                        {activity.title}
                      </p>
                      <p className="text-sm text-gray-600 mt-0.5">
                        {activity.description}
                      </p>
                      {activity.timestamp && (
                        <p className="text-xs text-gray-500 mt-1">
                          {activity.timestamp}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {index < activities.length - 1 && (
                <div className="ml-14 mt-4 border-b border-gray-100"></div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
