import Banner from '@/components/Banner';
import EmailInterface from '@/components/chat/EmailInterface';

const ChatPage = () => {
  return (
    <div className="bg-[#FAFAFA]">
      <Banner
        title="Chat With Host"
        text="The inspiration for creating the world's first exclusive trailer sharing marketplace..."
      />
      <EmailInterface />
    </div>
  );
};

export default ChatPage;
