'use client';

import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Bell, CheckSquare, File, MessageSquare } from 'lucide-react';

const notifications = [
  {
    id: 1,
    icon: <CheckSquare className="h-5 w-5 text-black" />,
    title: 'Flatbed Trailer',
    subtitle: 'Aug 10-15-2025',
    action: 'Booking confirmed for',
  },
  {
    id: 2,
    icon: <File className="h-5 w-5 text-black" />,
    title: 'Backhoe Loader',
    subtitle: 'Aug 10-15-2025',
    action: 'New listing published',
  },
  {
    id: 3,
    icon: <MessageSquare className="h-5 w-5 text-black" />,
    title: 'Tom H',
    subtitle: 'upcoming rental',
    action: 'Message received from',
  },
  {
    id: 4,
    icon: <MessageSquare className="h-5 w-5 text-black" />,
    title: 'Dump Truck',
    subtitle: 'Booking request',
    action: 'Pending approval',
  },
];

export default function NotificationPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          size="icon"
          aria-label="Notifications"
          className="text-white cursor-pointer"
        >
          <Bell className="h-5 w-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className="w-[300px] sm:w-[360px] p-6 shadow-lg rounded-sm"
      >
        <div className="divide-y divide-gray-200 flex flex-col">
          {notifications.map((item, index) => (
            <div
              key={item.id}
              className="flex items-start gap-3 py-3 transition-colors last:pb-0"
            >
              <div className="flex-1 flex items-start gap-3">
                <div className="shrink-0 text-[#181D27] pt-1">{item.icon}</div>
                <div className="flex flex-col flex-1 min-w-[120px]">
                  <span className="text-sm font-medium text-[#181D27]">
                    {item.title}
                  </span>
                  <span className="text-sm text-[#535862] font-normal">
                    {item.subtitle}
                  </span>
                </div>
              </div>
              <div className="text-sm text-[#535862] font-normal">
                {item.action}
              </div>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
