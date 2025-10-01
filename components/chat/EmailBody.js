const EmailBody = () => {
  return (
    <div className="flex-1 overflow-y-auto px-6 py-6">
      <div className="max-w-4xl">
        <div className="p-4 bg-[#F5F5F5] rounded-2xl mb-4">
          <h3 className="text-base font-semibold text-black mb-2">
            Sort Summary
          </h3>

          <p className="text-base font-normal text-black leading-relaxed">
            I am writing to confirm that the rent payment for the month of
            October has been successfully transferred.
          </p>
        </div>

        <div className="">
          <h4 className="text-base font-normal text-black leading-relaxed mb-3">
            Dear Jems
          </h4>

          <p className="text-base font-normal text-black leading-relaxed mb-3">
            I hope this message finds you well. I am writing to confirm that the
            rent payment for the month of October has been successfully
            transferred.
          </p>

          <div className="mb-3">
            <p className="text-base font-normal text-black leading-relaxed mb-2">
              Details:
            </p>
            <ul className="pl-3 space-y-0.5 text-base font-normal text-black leading-relaxed">
              <li>• Amount: $1,200</li>
              <li>• Transaction Date: 10 October 2024</li>
              <li>• Payment Method: VISA</li>
            </ul>
          </div>

          <p className="text-base font-normal text-black leading-relaxed">
            Please let me know if you need any additional details or if there
            are any issues with the payment. I would appreciate it if you could
            confirm receipt at your convenience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailBody;
