import { MoveRight } from 'lucide-react';
import Link from 'next/link';

const SearchTrailers = () => {
  const states = [
    { id: 1, title: 'Alabama', slug: '/' },
    { id: 2, title: 'Alaska', slug: '/' },
    { id: 3, title: 'Arizona', slug: '/' },
    { id: 4, title: 'Arkansas', slug: '/' },
    { id: 5, title: 'California', slug: '/' },
    { id: 6, title: 'Colorado', slug: '/' },
    { id: 7, title: 'Connecticut', slug: '/' },
    { id: 8, title: 'Delaware', slug: '/' },
    { id: 9, title: 'Florida', slug: '/' },
    { id: 10, title: 'Georgia', slug: '/' },
    { id: 11, title: 'Hawaii', slug: '/' },
    { id: 12, title: 'Idaho', slug: '/' },
    { id: 13, title: 'Illinois', slug: '/' },
    { id: 14, title: 'Indiana', slug: '/' },
    { id: 15, title: 'Iowa', slug: '/' },
    { id: 16, title: 'Kansas', slug: '/' },
    { id: 17, title: 'Kentucky', slug: '/' },
    { id: 18, title: 'Louisiana', slug: '/' },
    { id: 19, title: 'Maine', slug: '/' },
    { id: 20, title: 'Maryland', slug: '/' },
    { id: 21, title: 'Massachusetts', slug: '/' },
    { id: 22, title: 'Michigan', slug: '/' },
    { id: 23, title: 'Minnesota', slug: '/' },
    { id: 24, title: 'Mississippi', slug: '/' },
    { id: 25, title: 'Missouri', slug: '/' },
    { id: 26, title: 'Montana', slug: '/' },
    { id: 27, title: 'Nebraska', slug: '/' },
    { id: 28, title: 'Nevada', slug: '/' },
    { id: 29, title: 'New Hampshire', slug: '/' },
    { id: 30, title: 'New Jersey', slug: '/' },
  ];

  return (
    <div className="my-16 lg:my-[120px]">
      <div className="">
        <div className="container mx-auto px-4">
          <div className="mb-[60px]">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-16">
              <div className="max-w-[900px]">
                <h2 className="text-[#08001E] text-[32px] md:text-[48px] font-bold mb-4">
                  Search Trailers By State
                </h2>
              </div>
              <Link
                href="/"
                className="text-lg md:text-xl text-white font-medium bg-[#CF9645] hover:bg-[#B8844A] transition-colors px-6 md:px-8 py-3 md:py-4 rounded flex justify-center items-center gap-2 whitespace-nowrap w-fit"
              >
                View All
              </Link>
            </div>
          </div>
          <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-5">
            {states.map((state) => (
              <li key={state.id}>
                <Link
                  href={`/state/${state.slug}`}
                  className="text-black text-[22px] font-medium flex items-center gap-2 bg-[#FAFAFA] p-4 w-full rounded-md"
                >
                  {state.title} <MoveRight className="w-4 h-4 mt-1" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchTrailers;
