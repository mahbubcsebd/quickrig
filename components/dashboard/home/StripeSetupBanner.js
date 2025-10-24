export default function StripeSetupBanner() {
  return (
    <div className="w-full bg-[#FEFCE8] border border-[#FFF085] rounded-lg p-4 flex items-center justify-between gap-4 flex-wrap">
      {/* Left Section */}
      <div className="flex items-center gap-3 flex-1 min-w-0">
        {/* Icon */}
        <div className="flex-shrink-0">
          <div className="w-6 h-6 flex items-center justify-center">
            <svg
              className="w-5 h-5 text-[#894B00]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex items-center gap-8 flex-wrap">
          <span className="font-semibold text-[#894B00] whitespace-nowrap">
            Stripe Setup Required
          </span>
          <span className="text-[#A65F00]">
            Complete your Stripe integration setup to start processing
            withdrawals
          </span>
        </div>
      </div>

      {/* Right Section - Button */}
      <button className="flex-shrink-0 bg-[#CF9645] text-white px-4 py-2 rounded-md font-medium flex items-center gap-2 transition-colors">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
        <span>Setup Wizard</span>
      </button>
    </div>
  );
}
