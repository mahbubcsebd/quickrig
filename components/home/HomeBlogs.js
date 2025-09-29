import BlogImg1 from '@/assets/images/blog-1.png';
import BlogImg2 from '@/assets/images/blog-2.png';
import BlogImg3 from '@/assets/images/blog-3.png';
import Link from 'next/link';
import SingleHomeBlog from './SingleHomeBlog';

const HomeBlogs = () => {
  const blogs = [
    {
      id: 1,
      image: BlogImg1,
      title:
        "We're Just 16 Trailers Away from Unlocking Our First Giveaway Prize!",
      author: 'Towlos team',
      date: 'August 05, 2025',
      slug: 'giveaway-prize',
    },
    {
      id: 2,
      image: BlogImg2,
      title: 'How Expanded Trailer Rental Choices Transform Customer Decisions',
      author: 'Towlos team',
      date: 'August 05, 2025',
      slug: 'expanded-trailer-choices',
    },
    {
      id: 3,
      image: BlogImg3,
      title:
        "New to Trailer Rentals? Here's Your Step-by-Step Guide to Getting Started",
      author: 'Towlos team',
      date: 'August 05, 2025',
      slug: 'trailer-rental-guide',
    },
  ];

  return (
    <div className="mt-16 lg:mt-[120px]">
      <div className="py-16 lg:py-[120px] bg-[#FAFAFA]">
        <div className="container mx-auto px-4">
          <div className="mb-[60px]">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-16">
              <div className="max-w-[900px]">
                <h2 className="text-[#08001E] text-[32px] md:text-[48px] font-bold mb-4">
                  Trailer Resources Blog
                </h2>
                <p className="text-[#4C4C4C] text-base md:text-lg font-normal">
                  Your guide to trailer rentals, towing tips, safety advice, and
                  industry insights—always updated!
                </p>
              </div>
              <Link
                href="/"
                className="text-lg md:text-xl text-white font-medium bg-[#CF9645] hover:bg-[#B8844A] transition-colors px-6 md:px-8 py-3 md:py-4 rounded flex justify-center items-center gap-2 whitespace-nowrap w-fit"
              >
                Full Blog
              </Link>
            </div>
          </div>

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {blogs.map((blog) => (
              <SingleHomeBlog key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBlogs;
