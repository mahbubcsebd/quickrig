'use client';
import { Copy, Facebook, Linkedin, Twitter } from 'lucide-react';
import { useEffect, useState } from 'react';

const BlogDetailsContent = ({ blog }) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = blog.tableOfContents.map((item) =>
        document.getElementById(item.id)
      );

      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(blog.tableOfContents[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [blog]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="blog-page-content py-8 md:py-12 lg:py-16 xl:py-[120px]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Sidebar */}
          <aside className="lg:col-span-3">
            <div className="sticky top-24">
              {/* Table of Contents */}
              <div className="mb-8">
                <h3 className="text-[#CF9645] text-base font-semibold mb-4 pb-3 border-b border-gray-200">
                  Table of contents
                </h3>
                <nav className="space-y-2">
                  {blog.tableOfContents.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`block w-full text-left py-2 px-0 text-base transition-colors ${
                        activeSection === item.id
                          ? 'text-[#020D0A] font-semibold'
                          : 'text-[#6B7280] hover:text-[#CF9645]'
                      }`}
                    >
                      {item.title}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="flex items-center gap-3">
                <button className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <Copy size={18} className="text-gray-600" />
                </button>
                <button className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <Twitter size={18} className="text-gray-600" />
                </button>
                <button className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <Facebook size={18} className="text-gray-600" />
                </button>
                <button className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <Linkedin size={18} className="text-gray-600" />
                </button>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-9">
            {/* Meta Info */}
            {/* <div className="mb-8 pb-8 border-b border-gray-200">
              <p className="text-[#6B7280] mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
                massa. Eu dolor aliquet risus gravida nunc at feugiat consequat
                purus. Non massa enim vitae duis mattis. Vel in ultricies vel
                fringilla.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-[#6B7280]">
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>
                    {new Date(blog.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} />
                  <span>{blog.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle size={18} />
                  <span>12 Comments</span>
                </div>
              </div>
            </div> */}

            {/* Blog Content */}
            <article
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </main>
        </div>
      </div>

      <style jsx global>{`
        .blog-content {
          color: #374151;
          line-height: 1.8;
        }

        .blog-content > div {
          margin-bottom: 2.5rem;
        }

        .blog-content h2 {
          font-size: 1.75rem;
          font-weight: 700;
          color: #020d0a;
          margin-bottom: 1.5rem;
          margin-top: 2rem;
          scroll-margin-top: 100px;
        }

        .blog-content p {
          margin-bottom: 1.25rem;
          color: #4b5563;
          font-size: 1rem;
          line-height: 1.8;
        }

        .blog-content ul {
          list-style: decimal;
          padding-left: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .blog-content li {
          margin-bottom: 0.75rem;
          color: #4b5563;
          padding-left: 0.5rem;
        }

        .blog-content .content-item {
          border: 2px dashed #2563eb;
          border-radius: 8px;
          padding: 2rem;
          margin: 2.5rem 0;
          background: #f8fafc;
        }

        .blog-content .quote {
          font-size: 1.125rem;
          font-style: italic;
          color: #020d0a;
          margin-bottom: 1.5rem;
          line-height: 1.8;
        }

        .blog-content .author-info {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .blog-content .author-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #2563eb;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 0.875rem;
        }

        .blog-content .author-name {
          font-weight: 600;
          color: #020d0a;
          margin-bottom: 0.25rem;
        }

        .blog-content .author-role {
          color: #6b7280;
          font-size: 0.875rem;
          margin: 0;
        }

        .blog-content .tags {
          display: flex;
          gap: 0.75rem;
          margin-top: 2rem;
        }

        .blog-content .tag {
          display: inline-block;
          padding: 0.5rem 1rem;
          background: #fef3c7;
          color: #f59e0b;
          border-radius: 6px;
          font-size: 0.875rem;
          font-weight: 500;
        }

        @media (max-width: 1024px) {
          .blog-content h2 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default BlogDetailsContent;
