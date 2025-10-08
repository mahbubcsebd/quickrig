import Banner from '@/components/Banner';
import BlogContent from '@/components/blog/BlogContent';

const BlogPage = () => {
  return (
    <div className="bg-[#FAFAFA]">
      <Banner
        title="Blog"
        text="The inspiration for creating the world's first exclusive trailer sharing marketplace..."
      />
      <BlogContent />
    </div>
  );
};

export default BlogPage;
