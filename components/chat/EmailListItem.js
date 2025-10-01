'use client';

import { Archive, Forward, MoreVertical, Reply, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import DropdownMenu from './DropdownMenu';

const EmailListItem = ({ email, isActive }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // sender er first letter
  const firstLetter = email.sender ? email.sender.charAt(0).toUpperCase() : '?';

  const menuItems = [
    {
      label: 'Reply',
      icon: <Reply className="w-4 h-4" />,
      onClick: () => console.log('Reply'),
    },
    {
      label: 'Forward',
      icon: <Forward className="w-4 h-4" />,
      onClick: () => console.log('Forward'),
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
    <div
      className={`flex items-start gap-3 px-4 py-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors ${
        isActive ? 'bg-gray-50' : ''
      }`}
    >
      <div className="flex-shrink-0 pt-1">
        {email.avatar ? (
          <Image
            src={email.avatar}
            alt={email.sender}
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 flex items-center justify-center text-white text-sm font-medium">
            {firstLetter}
          </div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between mb-0.5">
          <h3 className="text-sm font-medium text-[#181D27]">{email.sender}</h3>
          <span className="text-xs text-[#535862] font-normal ml-2 flex-shrink-0">
            {email.time}
          </span>
        </div>
        <p className="text-xs text-[#535862] truncate">{email.preview}</p>
      </div>
      <div className="relative flex-shrink-0">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setDropdownOpen(!dropdownOpen);
          }}
          className="text-gray-400 hover:text-gray-600 p-1"
        >
          <MoreVertical className="w-4 h-4" />
        </button>
        <DropdownMenu
          isOpen={dropdownOpen}
          onClose={() => setDropdownOpen(false)}
          items={menuItems}
        />
      </div>
    </div>
  );
};

export default EmailListItem;
