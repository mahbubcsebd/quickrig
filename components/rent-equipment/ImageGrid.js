'use client';

const ImageGrid = ({ images }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {images.map((image) => (
        <div key={image.id} className="group cursor-pointer">
          <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-[320px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
