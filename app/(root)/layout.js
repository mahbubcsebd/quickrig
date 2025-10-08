import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { AuthModalProvider } from '@/providers/AuthModalProvider';

const RootLayout = ({ children }) => {
  return (
    <>
      <AuthModalProvider>
        <Header />
        {children}
        <Footer />
      </AuthModalProvider>
    </>
  );
};

export default RootLayout;
