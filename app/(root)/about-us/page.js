import AboutVideo from '@/components/about/AboutVideo';
import OurStory from '@/components/about/OurStory';
import TheWild from '@/components/about/TheWild';
import Banner from '@/components/Banner';

const AboutPage = () => {
  return (
    <>
      <Banner
        title="About towlos"
        text="The inspiration for creating the world's first exclusive trailer sharing marketplace..."
      />
      <OurStory />
      <AboutVideo />
      <TheWild />
    </>
  );
};

export default AboutPage;
