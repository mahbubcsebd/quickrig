import RentalImg from '@/assets/images/rental.png';
import Image from 'next/image';

const Rental = () => {
  return (
    <div className="my-10 lg:my-[120px]">
      <div className="rental">
        <div className="container">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 items-center">
            <div className="">
              <Image src={RentalImg} alt="rental" className="w-full" />
            </div>
            <div className="">
              <h2 className="text-[#020D0A] text-[42px] font-semibold mb-4">
                Trailer Rentals Made Simple
              </h2>
              <p className="text-[#353D3B] text-base font-normal mb-6">
                QUICK RENTAL is a locally owned equipment rental company that
                provides reliable, high-performance tools and machinery for
                contractors, homeowners, landscapers, and small businesses.
              </p>
              <h3 className="text-[#020D0A] text-[28px] font-semibold mb-4">
                Rent from Your Neighbors
              </h3>
              <p className="text-[#353D3B] text-base font-normal mb-6">
                Skip big-box hassle—rent from local owners who care about you
                and your cargo. Enjoy better options, fair prices, and a
                supportive community—anytime, anywhere, from your phone.
              </p>
              <h2 className="text-[#020D0A] text-[28px] font-semibold mb-4">
                Transparent Pricing
              </h2>
              <p className="text-[#353D3B] text-base font-normal mb-6">
                With Flat Fee Freedom, pay just $10 per transaction—no matter
                the trailer or rental length. No hidden fees, no surprises.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rental;
