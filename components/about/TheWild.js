import Image from 'next/image';

const TheWild = () => {
  // Sample images - you can add or remove images dynamically
  const images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      alt: 'Tow truck at sunset',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=300&fit=crop',
      alt: 'Truck on highway',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&h=300&fit=crop',
      alt: 'Semi truck on road',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      alt: 'Car carrier truck',
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop',
      alt: 'Towing service',
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      alt: 'Driver on phone',
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400&h=300&fit=crop',
      alt: 'Blue truck at night',
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop',
      alt: 'Pickup truck',
    },
  ];

  return (
    <div className="">
      <div className="py-16 lg:py-[120px] bg-[#FAFAFA]">
        <div className="container mx-auto px-4">
          {/* Original Header Section - Unchanged */}
          <div className="mb-[60px] text-center">
            <h2 className="text-[#08001E] text-[48px] font-bold mb-4">
              #towlosInTheWild
            </h2>
            <p className="text-[#4C4C4C] text-lg font-normal max-w-4xl mx-auto">
              To add to the fun and build community at towlos, we created this
              virtual photo and video wall, revealing where towlos is showing up
              around the world! Whether you're at a racetrack or on top of the
              Grand Canyon, grab a photo or video with your towlos merch. Or
              snap a photo of a towlos trailer on the highway = Spotted! Post it
              on your social media, tag us using #towlosinthewild, and we'll
              give you a SHOUT OUT, and beam it here!
            </p>
          </div>

          {/* Dynamic Image Grid - Alternating Pattern */}
          <div className="space-y-4 lg:space-y-6">
            {(() => {
              const rows = [];
              let imageIndex = 0;
              let rowNumber = 1;

              while (imageIndex < images.length) {
                const isOddRow = rowNumber % 2 === 1; // Odd row = 3 images, Even row = 2 images
                const imagesPerRow = isOddRow ? 3 : 2;
                const rowImages = images.slice(
                  imageIndex,
                  imageIndex + imagesPerRow
                );

                if (rowImages.length === 0) break;

                rows.push(
                  <div
                    key={`row-${rowNumber}`}
                    className={`grid gap-4 lg:gap-6 ${
                      isOddRow
                        ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' // 3 images row
                        : 'grid-cols-1 sm:grid-cols-2 mx-auto' // 2 images row (centered)
                    }`}
                  >
                    {rowImages.map((image) => (
                      <div
                        key={image.id}
                        className="overflow-hidden rounded-lg"
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={800}
                          height={500}
                          className="w-full h-[220px] sm:h-[250px] lg:h-[350px] object-cover"
                        />
                      </div>
                    ))}
                  </div>
                );

                imageIndex += imagesPerRow;
                rowNumber++;
              }

              return rows;
            })()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheWild;
