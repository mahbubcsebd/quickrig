import RentCard from '../RentCard';
import TopTitle from '../TopTitle';

const BrowseType = ({ trailers }) => {
  if (!trailers) return null;
  return (
    <div className="my-16 lg:my-[120px]">
      <div className="py-16 lg:py-[120px] bg-[#FAFAFA]">
        <div className="container">
          <TopTitle title="Browse By Type" btnText="View All" href="/" />
          <div className="">
            <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {trailers.map((trailer) => (
                <RentCard key={trailer.id} trailer={trailer} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseType;
