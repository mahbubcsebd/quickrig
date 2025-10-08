import BlogList from './BlogList';

const BlogContent = () => {
  return (
    <div className="blog-page-content py-8 md:py-12 lg:py-16 xl:py-[120px]">
      <div className="container">
        <BlogList />
      </div>
    </div>
  );
};

export default BlogContent;
