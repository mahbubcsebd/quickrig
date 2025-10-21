'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Bell,
  BookOpen,
  Building2,
  ChevronDown,
  DollarSign,
  File,
  FileText,
  HelpCircle,
  Home,
  LogOut,
  Menu,
  Plus,
  Settings,
  Shield,
  Truck,
  User,
  X,
} from 'lucide-react';
import React, { useState } from 'react';

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activePage, setActivePage] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard', badge: 'Upgrade' },
    { id: 'fleet', icon: Truck, label: 'My Fleet' },
    {
      id: 'profile',
      icon: Building2,
      label: 'My Business Profile',
      badge: 'Upgrade',
    },
    { id: 'rentals', icon: FileText, label: 'Host Rentals' },
    { id: 'reviews', icon: FileText, label: 'Host Reviews' },
    { id: 'insurance', icon: Shield, label: 'Insurance' },
    { id: 'documents', icon: File, label: 'Documents' },
    { id: 'add', icon: Plus, label: 'Add New Trailer', isDivider: true },
    { id: 'blog', icon: BookOpen, label: 'Trailer Resources Blog' },
    { id: 'help', icon: HelpCircle, label: 'Have a Question?' },
    { id: 'settings', icon: Settings, label: 'Settings' },
    { id: 'paid', icon: DollarSign, label: 'Getting Paid' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Left side - Logo & Menu Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
            >
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <Truck className="text-white" size={24} />
              </div>
              <span className="font-bold text-xl text-gray-800">QUICKRIG</span>
            </div>
          </div>

          {/* Right side - Page Title & User Profile */}
          <div className="flex items-center gap-4">
            <h1 className="hidden md:block text-xl font-semibold text-gray-800">
              Performance & Resources
            </h1>

            <button className="p-2 hover:bg-gray-100 rounded-lg relative">
              <Bell size={20} className="text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">OR</span>
                </div>
                <div className="hidden md:block text-left">
                  <div className="text-sm font-semibold text-gray-800">
                    Olivia Rhye
                  </div>
                  <div className="text-xs text-gray-500">Dhaka, AL</div>
                </div>
                <ChevronDown size={16} className="text-gray-400" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-16 bottom-0 w-64 bg-white border-r border-gray-200 transition-transform duration-300 z-40 overflow-y-auto ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        {/* Search */}
        <div className="p-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <div className="absolute left-3 top-2.5 text-gray-400">
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <nav className="px-2 pb-4">
          {menuItems.map((item) => (
            <React.Fragment key={item.id}>
              {item.isDivider && (
                <div className="border-t border-gray-200 my-2"></div>
              )}
              <button
                onClick={() => setActivePage(item.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg mb-1 transition-colors ${
                  activePage === item.id
                    ? 'bg-orange-50 text-orange-600'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center gap-3">
                  <item.icon size={20} />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
                {item.badge && (
                  <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                    {item.badge}
                  </span>
                )}
              </button>
            </React.Fragment>
          ))}
        </nav>

        {/* Current Plan Card */}
        <div className="mx-4 mb-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-700">
              CURRENT PLAN
            </span>
            <button className="text-gray-400 hover:text-gray-600">
              <X size={16} />
            </button>
          </div>
          <div className="text-sm text-gray-600 mb-3">Launch</div>
          <button className="w-full py-2 px-4 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors">
            Choose Plan
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={`pt-16 flex-1 transition-all duration-300 ${
          isSidebarOpen ? 'lg:pl-64' : 'lg:pl-0'
        }`}
      >
        <div className="p-6">
          {children || (
            <div className="space-y-6">
              {/* Stripe Setup Banner */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="text-orange-600">⚡</div>
                  <div>
                    <span className="font-semibold text-orange-900">
                      Stripe Setup Required
                    </span>
                    <span className="text-orange-700 ml-2">
                      Complete your Stripe integration setup to start processing
                      withdrawals
                    </span>
                  </div>
                </div>
                <button className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors whitespace-nowrap">
                  ⚡ Setup Wizard
                </button>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-gray-400">📅</div>
                    <span className="text-sm text-gray-600">
                      Active Listings
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-gray-900">4</div>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-gray-400">🔔</div>
                    <span className="text-sm text-gray-600">
                      Upcoming Bookings
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-gray-900">2</div>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-gray-400">💰</div>
                    <span className="text-sm text-gray-600">
                      Total Earnings
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-gray-900">$1,540</div>
                </div>
              </div>

              {/* Demo Content */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  Your Dynamic Content Here
                </h2>
                <p className="text-gray-600">
                  This is where your page-specific content will appear. Import
                  your footer component and add your page content here.
                </p>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default DashboardLayout;
