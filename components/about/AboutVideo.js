import VideoPlayer from '../home/VideoPlayer';

const AboutVideo = () => {
  return (
    <div className="mb-16 lg:mb-[120px]">
      <div className="container">
        <div className="video-box h-[560px] rounded-lg overflow-hidden">
          <VideoPlayer videoUrl="https://www.youtube.com/watch?v=KLuTLF3x9sA" />
        </div>
        <p className="text-[#353D3B] text-base font-normal mt-6">
          From heavy equipment haulers to boat trailers, enclosed trailers to
          race car haulers, horse trailers to toy haulers, there are thousands,
          if not millions, of under-utilized trailers across the US. Thus,
          Towlos was created as the solution, providing a safe, secure, and
          intuitive platform for making a trailer connection. Don't let that
          trailer collect any more dust. Put it to work for you!
        </p>
      </div>
    </div>
  );
};

export default AboutVideo;
