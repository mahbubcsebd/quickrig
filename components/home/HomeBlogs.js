import BlogImg1 from '@/assets/images/blog-1.png';
import BlogImg2 from '@/assets/images/blog-2.png';
import BlogImg3 from '@/assets/images/blog-3.png';
import TopTitle from '../TopTitle';
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
          <TopTitle
            title="Trailer Resources Blog"
            text="Your guide to trailer rentals, towing tips, safety advice, and
                  industry insights—always updated!"
            btnText="Full Blog"
            href="/blogs"
          />

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
