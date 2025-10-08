import Banner from '@/components/Banner';
import BlogDetailsContent from '@/components/blog-details/BlogDetailsContent';
import blogsData from '@/data/blogsData'; // আপনার blog data import করুন
import { notFound } from 'next/navigation';

const BlogDetailsPage = async ({ params }) => {
  // params থেকে slug বের করুন
  const { slug } = await params;

  // slug দিয়ে blog খুঁজুন
  const blog = blogsData.find((b) => b.slug === slug);

  // যদি blog না পাওয়া যায় তাহলে 404 page দেখান
  if (!blog) {
    notFound();
  }

  return (
    <>
      <Banner title={blog.title} text={blog.excerpt} />
      <BlogDetailsContent blog={blog} />
    </>
  );
};

export default BlogDetailsPage;

// Optional: Generate static params for all blogs (for static generation)
export async function generateStaticParams() {
  return blogsData.map((blog) => ({
    slug: blog.slug,
  }));
}

// Optional: Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) {
    return {
      title: 'Blog Not Found',
    };
  }

  return {
    title: blog.title,
    description: blog.excerpt,
  };
}
