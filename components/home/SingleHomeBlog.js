import { MoveUpLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const SingleHomeBlog = ({ blog }) => {
  return (
    <div className="group cursor-pointer rounded-lg overflow-hidden">
      {/* Image Container */}
      <Link
        href={`/blogs/${blog.slug}`}
        className="relative overflow-hidden mb-4 block"
      >
        <Image
          src={blog.image}
          alt={blog.title}
          className="w-full h-[200px] md:h-[220px] object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Arrow Icon */}
        <div className="absolute bottom-0 right-0 bg-[#CF9645] hover:bg-[#B8844A] transition-colors p-2 rounded-tl-md w-[56px] h-[56px] flex justify-center items-center">
          <MoveUpLeft className="h-5 w-5 text-white" />
        </div>
      </Link>

      {/* Content */}
      <div className="space-y-3">
        <Link
          href={`/blogs/${blog.slug}`}
          className="text-black text-lg md:text-xl font-bold leading-tight group-hover:text-[#CF9645] transition-colors duration-300"
        >
          {blog.title}
        </Link>

        <div className="flex items-center gap-2 text-base text-[#7B7B7B] font-normal">
          <span className="font-medium">{blog.author}</span>
          <span>|</span>
          <span>{blog.date}</span>
        </div>
      </div>
    </div>
  );
};

export default SingleHomeBlog;
