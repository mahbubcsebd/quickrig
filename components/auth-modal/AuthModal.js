'use client';

import Logo from '@/assets/icons/auth-logo.svg';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useAuthModal } from '@/hooks/useAuthModal';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

const AuthModal = () => {
  const { isOpen, closeModal, defaultTab } = useAuthModal();
  const [activeTab, setActiveTab] = useState(defaultTab);

  useEffect(() => {
    setActiveTab(defaultTab);
  }, [defaultTab, isOpen]);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => !open && closeModal()}
      className="bg-white"
    >
      <DialogContent
        className="w-full max-w-[900px] p-0 rounded-xl bg-white z-[99999999] max-h-[90vh] overflow-auto"
        style={{ width: '900px', maxWidth: '900px' }}
      >
        {/* Header */}
        <DialogHeader className="p-6 flex flex-col items-center">
          <Link href="/" className="block mb-6">
            <Image src={Logo} alt="Logo" width={150} height={150} />
          </Link>
          <DialogTitle className="text-[30px] text-[#181D27] font-semibold mb-4">
            {activeTab === 'login'
              ? 'Log in to your account'
              : 'Create an account'}
          </DialogTitle>
          <p className="text-[#535862] text-base text-center mb-6">
            {activeTab === 'login'
              ? 'Welcome back! Please enter your details.'
              : 'Welcome! Please enter your details.'}
          </p>

          {/* Tabs */}
          <div className="flex gap-4 mt-6 bg-[#FAFAFA] border border-[#E9EAEB] rounded-lg w-full max-w-md overflow-hidden">
            <button
              onClick={() => setActiveTab('login')}
              className={`flex-1 py-2 rounded-lg font-medium transition-all ${
                activeTab === 'login'
                  ? 'border-1 border-[#D5D7DA] text-gray-900'
                  : 'bg-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Log in
            </button>
            <button
              onClick={() => setActiveTab('signup')}
              className={`flex-1 py-2 rounded-lg font-medium transition-all ${
                activeTab === 'signup'
                  ? 'bg-white border-2 border-gray-300 text-gray-900'
                  : 'bg-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Sign up
            </button>
          </div>
        </DialogHeader>

        {/* Forms */}
        <div className="p-6">
          {activeTab === 'login' ? <LoginForm /> : <SignUpForm />}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
