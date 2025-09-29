import FooterLogo from '@/assets/icons/footer-logo.svg';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const companyLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Rent Equipment', href: '/rent' },
    { label: 'How It Work', href: '/how-it-works' },
    { label: 'Become a Host', href: '/become-host' },
  ];

  const contactInfo = [
    {
      label: 'Email',
      value: 'quickrig@gmail.com',
      href: 'mailto:quickrig@gmail.com',
    },
    {
      label: 'Website',
      value: 'www.quickrig.com',
      href: 'https://www.quickrig.com',
    },
    { label: 'Phone', value: '01760150203', href: 'tel:+8801760150203' },
    { label: 'Location', value: 'United state of America', href: null },
  ];

  const socialLinks = [
    { label: 'Facebook', href: 'https://facebook.com' },
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'Twitter', href: 'https://twitter.com' },
    { label: 'YouTube', href: 'https://youtube.com' },
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-transparent to-blue-600/20"></div>
        <div className="absolute top-4 left-4 w-32 h-32 border border-purple-500/30 rounded-lg rotate-12"></div>
        <div className="absolute bottom-8 right-8 w-24 h-24 border border-blue-500/30 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-green-500/20 rounded-lg rotate-45"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Description */}
          <div className="lg:col-span-1 space-y-6">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Image src={FooterLogo} alt="footer logo" className="" />
            </div>

            {/* Description */}
            <p className="text-[#E4E4E4] text-base font-normal leading-relaxed">
              Quickrig is your trusted partner for reliable equipment
              rentals—offering job-ready tools, expert support, and flexible
              scheduling to keep your projects moving safely and efficiently.
            </p>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="text-[20px] font-semibold text-white mb-6">
              Company
            </h3>
            <div className="footer-divider" />
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-white transition-colors duration-200 text-base hover:translate-x-1 transform inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Information */}
          <div className="space-y-4">
            <h3 className="text-[20px] font-semibold text-white mb-6">
              Company Information
            </h3>
            <div className="footer-divider" />
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li key={index}>
                  {info.href ? (
                    <Link
                      href={info.href}
                      className="text-white hover:text-white transition-colors duration-200 text-base hover:translate-x-1 transform inline-block"
                    >
                      {info.value}
                    </Link>
                  ) : (
                    <span className="text-white text-sm">{info.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-[20px] font-semibold text-white mb-6">
              Social Media
            </h3>
            <div className="footer-divider" />
            <ul className="space-y-3">
              {socialLinks.map((social, index) => (
                <li key={index}>
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-white transition-colors duration-200 text-base hover:translate-x-1 transform inline-block"
                  >
                    {social.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white text-sm">
              © 2025 QUICK RENTAL. All rights reserved.
            </p>
            <a
              href="/terms"
              className="text-white hover:text-white text-sm transition-colors duration-200"
            >
              Terms and condition
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
