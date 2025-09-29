'use client';

import Logo from '@/assets/icons/logo.png';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import clsx from 'clsx';
import { Home, Menu, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import NotificationPopover from './NotificationPopover';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: Home, label: 'About Us', href: '/about-us' },
    { icon: Home, label: 'Rent Equipment', href: '/rent-equipment' },
    { icon: Home, label: 'Chat', href: '/chat' },
    { icon: Home, label: ' Become a Host', href: '/become-a-host' },
    { icon: Home, label: 'Become a Guest', href: '/become a guest' },
    { icon: Home, label: 'My Profile', href: '/profile' },
  ];

  return (
    <header
      className={clsx(
        'fixed left-0 w-full z-[9999] transition-all duration-500',
        isScrolled ? 'top-0 bg-black shadow-md' : 'top-5 bg-transparent'
      )}
    >
      <div className="container">
        <div className="flex justify-between items-center py-4">
          <div className="logo">
            <Link
              href="/"
              className="max-w-[150px] max-h-[60px] inline-block overflow-hidden"
            >
              <Image
                src={Logo}
                alt="logo"
                className="w-full h-full object-contain"
              />
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <NotificationPopover />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  size="icon"
                  aria-label="Menu"
                  className="bg-orange-400 text-white hover:bg-orange-400 cursor-pointer"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-[400px] p-0 z-[10000]">
                <SheetHeader className="p-6 pb-4">
                  <div className="flex items-center justify-between">
                    {/* <SheetTitle className="text-xl font-semibold">
                      Menu
                    </SheetTitle> */}
                    {/* <SheetClose asChild>
                      <Button variant="ghost" size="icon">
                        <X className="h-5 w-5" />
                      </Button>
                    </SheetClose> */}
                  </div>
                </SheetHeader>

                <div className="flex flex-col h-full">
                  <div className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <User className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Mahbubur Rahman</p>
                        <p className="text-xs text-muted-foreground">
                          mahbub.cse.me@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <nav className="flex-1 p-6">
                    <div className="space-y-2">
                      {navigationItems.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="relative flex items-center p-1 md:p-2 lg:p-3 text-sm rounded-lg transition-colors duration-300 group overflow-hidden"
                          onClick={() => setIsOpen(false)}
                        >
                          <span className="relative h-8 flex items-center overflow-hidden">
                            {/* Default Text */}
                            <span className="block font-bold text-xl md:text-2xl: xl:text-[28px] text-black transform transition-transform duration-300 group-hover:-translate-y-full">
                              {item.label}
                            </span>
                            {/* Hover Text (orange) */}
                            <span className="absolute left-0 top-full block font-bold text-[28px] text-orange-500 transform transition-transform duration-300 group-hover:-translate-y-full">
                              {item.label}
                            </span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </nav>

                  <Separator />
                  <div className="p-6 pt-4 grid grid-cols-2 gap-4">
                    <Link
                      href="/sign-up"
                      className="w-full px-6 py-2 text-base text-black border border-black rounded-md hover:bg-black hover:text-white transition-all duration-200 inline-block text-center"
                      onClick={() => setIsOpen(false)}
                    >
                      Sign Up
                    </Link>
                    <Link
                      href="/login"
                      className="w-full px-6 py-2 text-base text-black border border-black rounded-md hover:bg-black hover:text-white transition-all duration-200 inline-block text-center"
                      onClick={() => setIsOpen(false)}
                    >
                      Log In
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
