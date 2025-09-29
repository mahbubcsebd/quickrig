import TopTitle from '../TopTitle';
import VideoPlayer from './VideoPlayer';

const StandsOut = () => {
  return (
    <div className="mb-16 lg:mb-[120px]">
      <div className="py-16 lg:py-[120px] bg-[#FAFAFA]">
        <div className="container">
          <TopTitle
            title="Why Our Platform Stands Out"
            btnText="learn more"
            href="/"
            buttonVariant="outline"
            buttonColor="#000"
          />
          <div className="video-box h-[320px] lg:[400px] xl:h-[560px] rounded-lg overflow-hidden">
            <VideoPlayer videoUrl="https://www.youtube.com/watch?v=KLuTLF3x9sA" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StandsOut;
