import RentalImg from '@/assets/images/rental.png';
import Image from 'next/image';

const OurStory = () => {
  return (
    <div className="my-10 lg:my-[120px]">
      <div className="rental">
        <div className="container">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center">
            <div className="">
              <Image src={RentalImg} alt="rental" className="w-full" />
            </div>
            <div className="">
              <h2 className="text-[#020D0A] text-[30px]  md:text-[32px] lg:text-[36px] xl:text-[42px] font-semibold mb-4">
                Our Story
              </h2>
              <p className="text-[#353D3B] text-base font-normal mb-6">
                The inspiration for Towlos began in the summer of 2021. Some of
                my Corvette buddies and I wanted to trailer our cars to the
                track rather than driving them, which could risk getting a flat
                tire or something else beyond our control. This would have
                ruined a trip we had become pretty excited about! So, we started
                looking for trailers to rent, but soon became quite disappointed
                by the very limited options. As a result, the inspiration for
                Towlos grew out of a need, I mean, desire for a car hauler!
              </p>
              <p className="text-[#353D3B] text-base font-normal mb-6">
                On the trip home from the track, I started thinking about this
                trailer problem. Soon, I realized there are actually two
                problems here. One problem is the difficulty in finding the
                right trailer that fits our needs. The second is all those other
                trailers out there, just sitting in a driveway or a barn 90% of
                the time, collecting dust.
              </p>
              <p className="text-[#353D3B] text-base font-normal mb-6">
                I thought “someone should do something about that! It would be
                so nice to have access to these trailers without having to
                purchase one or rent from the limited supply that currently
                exists.” I just couldn’t shake that thought out of my mind. A
                few days later, I decided to act on it, and soon after, Towlos
                was born. The concept of sharing resources when not using them
                really resonated with me. It has been successful with companies
                like Airbnb and Turo. Could this also work for trailers?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
