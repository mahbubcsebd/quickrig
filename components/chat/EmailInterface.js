import EmailBody from './EmailBody';
import EmailHeader from './EmailHeader';
import EmailSidebar from './EmailSidebar';
import ReplySection from './ReplySection';

// Main Email Interface Component
const EmailInterface = () => {
  return (
    <div className="chat-interface py-16 lg:py-[120px]">
      <div className="container">
        <div className="flex h-[700px]">
          <EmailSidebar />

          <div className="flex-1 flex flex-col">
            <EmailHeader />
            <EmailBody />
            <ReplySection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailInterface;
