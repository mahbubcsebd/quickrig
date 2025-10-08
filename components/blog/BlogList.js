import blogsData from '@/data/blogsData';
import BlogCard from './BlogCard';

const BlogList = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {blogsData.map((blog) => (
      <BlogCard key={blog.id} blog={blog} />
    ))}
  </div>
);

export default BlogList;
