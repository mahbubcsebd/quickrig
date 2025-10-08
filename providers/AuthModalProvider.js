'use client';

import AuthModal from '@/components/auth-modal/AuthModal';
import { AuthModalContext } from '@/contexts';
import { useState } from 'react';

export const AuthModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultTab, setDefaultTab] = useState('login');

  const openModal = (tab = 'login') => {
    setDefaultTab(tab);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <AuthModalContext.Provider
      value={{ isOpen, openModal, closeModal, defaultTab }}
    >
      {children}
      <AuthModal />
    </AuthModalContext.Provider>
  );
};
