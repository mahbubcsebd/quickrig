import TurbineImg from '@/assets/icons/turbine.svg';
import Image from 'next/image';

// Header Component
const ChatWithHost = ({ hostName, trailerCount, joinDate, onChatClick }) => {
  return (
    <div className="chat-section pb-16 lg:pb-[120px]">
      <h3 className="text-xl sm:text-2xl font-semibold text-black mb-6 sm:mb-10">
        Host
      </h3>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
        <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
          <div className="flex-shrink-0">
            <Image
              src={TurbineImg}
              alt="img"
              width={125}
              height={125}
              className="w-16 h-16 sm:w-24 sm:h-24 lg:w-[125px] lg:h-[125px] object-contain"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-black truncate">
              {hostName}
            </h1>
            <p className="text-[#7b7b7b] text-xs sm:text-sm">
              {trailerCount} Trailer | Joined {joinDate}
            </p>
          </div>
        </div>
        <button
          onClick={onChatClick}
          className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 border border-black rounded-lg font-medium hover:bg-gray-50 transition flex items-center justify-center gap-2 sm:gap-4 text-sm sm:text-base flex-shrink-0"
        >
          <span className="whitespace-nowrap">Chat With Host</span>
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatWithHost;
