import SenderImg from '@/assets/images/sender.png';
import EmailListItem from './EmailListItem';

const EmailSidebar = () => {
  const emails = Array(10).fill({
    sender: 'Water Bill Payment',
    preview: 'Your water bill is due by t...',
    time: '25 Min Ago',
    avatar: SenderImg,
  });

  return (
    <div className="bg-white border-r border-gray-200 flex flex-col  w-[400px]">
      <div className="flex-1 overflow-y-auto">
        {emails.map((email, index) => (
          <EmailListItem key={index} email={email} isActive={index === 0} />
        ))}
      </div>
    </div>
  );
};

export default EmailSidebar;
