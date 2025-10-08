import Image from 'next/image';
import Link from 'next/link';

const SingleTowlos = ({ towlos }) => {
  return (
    <div className="group cursor-pointer rounded-lg overflow-hidden bg-[#FAFAFA]">
      <Link href={`/towlos/${towlos.slug}`} className="overflow-hidden block">
        <Image
          src={towlos.image}
          alt={towlos.title}
          className="w-full h-[200px] md:h-[220px] object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>
      <div className="p-4">
        <Link
          href={`/towloss/${towlos.slug}`}
          className="text-black text-lg md:text-xl font-bold leading-tight group-hover:text-[#CF9645] transition-colors duration-300 mb-4 block"
        >
          {towlos.title}
        </Link>
        <p className="text-base text-[#7B7B7B] font-normal">{towlos.summery}</p>
      </div>
    </div>
  );
};

export default SingleTowlos;
