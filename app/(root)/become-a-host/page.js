import Banner from '@/components/Banner';
import BecomeAHostContent from '@/components/become-a-host/BecomeAHostContent';

const BecomeAHostPage = () => {
  return (
    <div>
      <Banner
        title="Host your trailers with Quickric"
        text="Join a community dedicated to your success, with plans for any stage—whether you have one trailer or a full fleet."
      />
      <BecomeAHostContent />
    </div>
  );
};

export default BecomeAHostPage;
