'use client';

import SenderImg from '@/assets/images/sender.png';
import { Archive, Reply, Star, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const EmailHeader = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const menuItems = [
    {
      label: 'Mark as unread',
      icon: <Star className="w-4 h-4" />,
      onClick: () => console.log('Mark'),
    },
    {
      label: 'Archive',
      icon: <Archive className="w-4 h-4" />,
      onClick: () => console.log('Archive'),
    },
    {
      label: 'Delete',
      icon: <Trash2 className="w-4 h-4" />,
      onClick: () => console.log('Delete'),
    },
  ];

  return (
    <div className="px-6 py-4 mr-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white text-sm font-semibold">
            CK
          </div> */}
          <Image
            src={SenderImg}
            alt="sender"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="text-sm font-medium text-[#181D27]">Cathryn King</h2>
            <p className="text-xs text-[#535862]">@catBynk</p>
          </div>
        </div>
        {/* <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="text-gray-400 hover:text-gray-600 p-1"
          >
            <MoreVertical className="w-5 h-5" />
          </button>
          <DropdownMenu
            isOpen={dropdownOpen}
            onClose={() => setDropdownOpen(false)}
            items={menuItems}
          />
        </div> */}
        <button className="text-sm font-medium text-[#181D27] cursor-pointer">
          <Reply className="w-4" />
        </button>
      </div>
    </div>
  );
};

export default EmailHeader;
