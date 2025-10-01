'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Maximize2, Mic, Paperclip, Smile } from 'lucide-react';
import { useRef, useState } from 'react';

const ReplySection = () => {
  const [replyText, setReplyText] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [isFull, setIsFull] = useState(false);
  const fileInputRef = useRef(null);

  const handleSend = () => {
    if (replyText.trim()) {
      alert(`Message sent: ${replyText}`);
      setReplyText('');
    }
  };

  const handleAttachment = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      alert(`File attached: ${files[0].name}`);
    }
  };

  const handleMicClick = () => {
    setIsRecording(!isRecording);
    alert(isRecording ? 'Recording stopped' : 'Recording started...');
  };

  const handleToggleFull = () => {
    setIsFull(!isFull);
  };

  const emojis = ['😊', '😂', '❤️', '👍', '🎉', '🔥', '✨', '💯'];

  const handleEmojiClick = (emoji) => {
    setReplyText((prev) => prev + emoji);
    setShowEmojiPicker(false);
  };

  return (
    <div
      className={`mx-5 p-4 bg-white rounded-sm transition-all roverflow-hidden
      ${isFull ? 'fixed inset-10 z-50' : 'relative'}`}
    >
      {/* Top Row: Expand + Menu */}
      <div className="flex items-center justify-between">
        <button
          onClick={handleToggleFull}
          className="p-2 hover:bg-gray-100 rounded-md transition-colors"
          title={isFull ? 'Minimize' : 'Expand'}
        >
          <Maximize2 className="w-5 h-5 text-gray-600" />
        </button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className="p-2 hover:bg-gray-100 rounded-md transition-colors"
              title="More Options"
            >
              <span className="w-5 h-5 flex items-center justify-center">
                ⋮
              </span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            <DropdownMenuItem onClick={() => alert('Reply All')}>
              Reply All
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => alert('Forward')}>
              Forward
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => alert('Delete')}>
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="px-6 py-4 flex flex-col gap-3">
        {/* Middle Row: Input */}
        <div className="relative">
          <input
            type="text"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="Click here to reply or forward"
            className="w-full pl-4 pr-12 py-2.5 bg-white border border-gray-300 rounded-md
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
              text-sm text-gray-700 placeholder-gray-400"
          />
          <button
            onClick={handleMicClick}
            className={`absolute right-2 top-1/2 -translate-y-1/2 p-1.5 hover:bg-gray-100 rounded transition-colors ${
              isRecording ? 'bg-red-100' : ''
            }`}
            title={isRecording ? 'Stop Recording' : 'Start Recording'}
          >
            <Mic
              className={`w-4 h-4 ${
                isRecording ? 'text-red-500' : 'text-gray-500'
              }`}
            />
          </button>
        </div>

        {/* Bottom Row: Attachment + Emoji + Send */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Attachment */}
            <button
              onClick={handleAttachment}
              className="p-2 hover:bg-gray-100 rounded-md transition-colors"
              title="Attach File"
            >
              <Paperclip className="w-5 h-5 text-gray-600" />
            </button>
            <input
              ref={fileInputRef}
              type="file"
              onChange={handleFileChange}
              className="hidden"
              multiple
            />

            {/* Emoji */}
            <div className="relative">
              <button
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                className="p-2 hover:bg-gray-100 rounded-md transition-colors"
                title="Add Emoji"
              >
                <Smile className="w-5 h-5 text-gray-600" />
              </button>

              {showEmojiPicker && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setShowEmojiPicker(false)}
                  />
                  <div className="absolute bottom-full left-0 mb-2 z-20 bg-white rounded-lg shadow-lg border border-gray-200 p-3">
                    <div className="grid grid-cols-4 gap-2">
                      {emojis.map((emoji, index) => (
                        <button
                          key={index}
                          onClick={() => handleEmojiClick(emoji)}
                          className="text-2xl hover:bg-gray-100 rounded p-2 transition-colors"
                        >
                          {emoji}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Send */}
          <button
            onClick={handleSend}
            disabled={!replyText.trim()}
            className={`px-6 py-2.5 text-white text-sm font-medium rounded-md transition-colors ${
              replyText.trim()
                ? 'bg-amber-500 hover:bg-amber-600'
                : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReplySection;
