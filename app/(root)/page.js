import BrowseType from '@/components/home/BrowseType';
import CarDetails from '@/components/home/CarDetails';
import FaqList from '@/components/home/FaqList';
import FeaturedLocations from '@/components/home/FeaturedLocations';
import Hero from '@/components/home/Hero';
import HomeBlogs from '@/components/home/HomeBlogs';
import Rental from '@/components/home/Rental';
import RentTrailer from '@/components/home/RentTrailer';
import SearchTrailers from '@/components/home/SearchTrailers';
import StandsOut from '@/components/home/StandsOut';
import Unlock from '@/components/home/Unlock';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Rental />
      <StandsOut />
      <RentTrailer />
      <Unlock />
      <BrowseType />
      <CarDetails />
      <HomeBlogs />
      <FaqList />
      <FeaturedLocations />
      <SearchTrailers />
    </>
  );
};

export default HomePage;
