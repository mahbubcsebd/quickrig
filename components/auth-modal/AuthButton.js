import { useAuthModal } from '@/hooks/useAuthModal';

export const AuthButton = ({ tab = 'login', children, className = '' }) => {
  const { openModal } = useAuthModal();

  return (
    <button
      onClick={() => openModal(tab)}
      className={`transition-all transform hover:scale-105 focus:outline-none ${className}`}
    >
      {children}
    </button>
  );
};
