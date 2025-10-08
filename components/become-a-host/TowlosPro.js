import BlogImg1 from '@/assets/images/blog-1.png';
import TopTitle from '../TopTitle';
import SingleTowlos from './SingleTowlos';

const TowlosPro = () => {
  const towlosList = [
    {
      id: 1,
      image: BlogImg1,
      title: 'Support',
      summery:
        "Have questions about starting or growing your business on towlos? We're here to help with personal, professional assistance.",
      slug: 'support',
    },
    {
      id: 2,
      image: BlogImg1,
      title: 'Community',
      summery:
        "Our hosts are like family. We're committed to your success and will help you maximize your potential on towlos.",
      slug: 'community',
    },
    {
      id: 3,
      image: BlogImg1,
      title: 'Every Step',
      summery:
        'Our mission is to guide you through every stage—from day one to a thriving trailer rental business.',
      slug: 'every-step',
    },
  ];

  return (
    <div className="py-16 lg:py-[120px]">
      <div className="container mx-auto px-4">
        <TopTitle
          title="Your TowlosPro"
          text="More than just a trailer rental expert—your business partner"
          btnText="Connect with your QuickricPro."
          href="/"
        />

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {towlosList.map((towlos) => (
            <SingleTowlos key={towlos.id} towlos={towlos} />
          ))}
        </div>
        <p className="mt-6 text-lg font-normal text-[#4C4C4C] text-center">
          Want us to handle everything? For just $50 + $15 per trailer, we will
          create a listing that sets you up for success.
        </p>
      </div>
    </div>
  );
};

export default TowlosPro;
