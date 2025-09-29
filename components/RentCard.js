import Image from 'next/image';
import Link from 'next/link';

const RentCard = ({ rent }) => {
  return (
    <div className="rent-slide group">
      <Link href={rent.url}>
        <div className="relative overflow-hidden rounded-lg">
          <Image
            src={rent.image}
            alt={rent.title}
            width={500}
            height={300}
            className="w-full h-[450px] md:h-[500px] xl:h-[600px] object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Hover overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-10 text-white transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <div className="max-w-[250px]">
              <h3 className="text-2xl font-semibold mb-2">{rent.title}</h3>
              <p className="text-base text-gray-200 mb-4">{rent.description}</p>
            </div>
            <Link
              href={`/rent-details/${rent.id}`}
              className="text-xl font-medium px-6 py-2 rounded flex justify-center items-center gap-2 transition-colors duration-200 capitalize border border-[#CF9645] text-[#CF9645] hover:bg-[#CF9645] hover:text-white"
            >
              Book Now
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RentCard;
