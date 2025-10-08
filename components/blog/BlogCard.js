import Image from 'next/image';
import Link from 'next/link';

const BlogCard = ({ blog }) => (
  <div className="p-6 bg-[#F8F8F9] border border-[#F0F1F2] rounded-[10px] lg:rounded-2xl">
    <Link
      href={`/blogs/${blog.slug}`}
      className="relative block h-[300px] lg:h-[320px] xl:h-[350px] overflow-hidden rounded-[8px] lg:rounded-[10px] xl:rounded-[12px]"
    >
      <Image
        src={blog.image}
        alt={blog.title}
        fill
        className="object-cover hover:scale-105 transition-transform duration-300"
      />
    </Link>

    <div className="pt-6">
      <Link
        href={`/blogs/${blog.slug}`}
        className="block text-[26px] font-semibold text-[#020D0A] mb-4 hover:text-[#2563EB] transition-colors"
      >
        {blog.title}
      </Link>

      <p className="text-[#353D3B] line-clamp-2 text-base">
        {blog.excerpt}....{' '}
        <Link
          href={`/blogs/${blog.slug}`}
          className="text-[#2563EB] hover:underline whitespace-nowrap"
        >
          read more
        </Link>
      </p>
    </div>
  </div>
);

export default BlogCard;
