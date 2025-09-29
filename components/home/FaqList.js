import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Minus, Plus } from 'lucide-react';

const FaqList = () => {
  const guestFAQs = [
    {
      id: 'guest-1',
      question:
        'Is it true that the guest service fee is only $10 for the entire rental?',
      answer:
        "Yes, that's correct! With Flat Fee Freedom, guests pay just a $10 towing service fee - regardless of the trailer rental price or rental duration. No hidden fees, no surprises.",
    },
    {
      id: 'guest-2',
      question: 'How do I know I can trust towlos with my credit card?',
      answer:
        'We use industry-standard encryption and secure payment processing to protect your financial information. All transactions are processed through trusted payment gateways with PCI compliance.',
    },
    {
      id: 'guest-3',
      question: 'Do you have a mobile App for smartphones?',
      answer:
        'Yes! Our mobile app is available for both iOS and Android devices. You can download it from the App Store or Google Play to easily browse, book, and manage your trailer rentals on the go.',
    },
    {
      id: 'guest-4',
      question: 'Are there discounts for multi-day rentals?',
      answer:
        "Many hosts offer discounted rates for longer rental periods. You'll see weekly and monthly discount options when browsing available trailers. The longer you rent, the more you can save!",
    },
    {
      id: 'guest-5',
      question:
        'Can I ask the trailer owner questions about the trailer prior to renting?',
      answer:
        'Absolutely! We encourage communication between guests and hosts. You can message the trailer owner directly through our platform to ask about specifications, pickup details, or any other questions before booking.',
    },
  ];

  const hostFAQs = [
    {
      id: 'host-1',
      question:
        'How can I be confident the guest knows how to tow my trailer safely?',
      answer:
        'Towlos helps you vet your potential guest by requiring them to answer 4 questions. These responses help you understand their prior towing experience, the vehicle they are using to tow your trailer, the cargo and its approximate weight, and the destination and mileage they plan to travel.',
    },
    {
      id: 'host-2',
      question: 'Does it cost money to join towlos?',
      answer:
        "No, it's completely free to join towlos as a host! You only pay a small service fee when you successfully complete a rental. There are no upfront costs or monthly fees to list your trailer.",
    },
    {
      id: 'host-3',
      question: "I'm busy. Can towlos help me get set up on the platform?",
      answer:
        'Yes! Our team can help you get started. We offer onboarding support to help you create your listing, upload photos, set pricing, and understand how the platform works. Contact our support team for personalized assistance.',
    },
    {
      id: 'host-4',
      question: 'How is my trailer protected against damage?',
      answer:
        'Every rental includes comprehensive insurance coverage for your trailer. This protects against accidental damage during the rental period. Additionally, we verify all renters and maintain security deposits for added protection.',
    },
    {
      id: 'host-5',
      question: 'When can I expect to be paid after a rental?',
      answer:
        'Payment is typically processed within 24-48 hours after the rental is completed. Funds are transferred directly to your bank account or preferred payment method once the rental period ends and the trailer is returned in good condition.',
    },
  ];

  return (
    <div className="py-16 lg:py-[120px]">
      <div className="max-w-6xl mx-auto px-8">
        <div className="mb-[60px] text-center">
          <h2 className="text-[#08001E] text-[48px] font-bold">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Guests Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-[#0F0F0F]">Guests</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {guestFAQs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="bg-[#FAFAFA] rounded-md px-4 border-0 group"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4 [&>svg]:hidden">
                    <div className="flex items-center justify-between w-full pr-2">
                      <span className="text-black text-[22px] font-medium">
                        {faq.question}
                      </span>
                      <div className="ml-4 flex-shrink-0">
                        <Plus className="h-5 w-5 text-black group-data-[state=open]:hidden" />
                        <Minus className="h-5 w-5 text-black hidden group-data-[state=open]:block" />
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pt-2">
                    <div className="text-black font-normal text-base">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Hosts Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-[#0F0F0F]">Hosts</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {hostFAQs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="bg-[#FAFAFA] rounded-md px-4 border-0 group"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4 [&>svg]:hidden">
                    <div className="flex items-center justify-between w-full pr-2">
                      <span className="text-black text-[22px] font-medium">
                        {faq.question}
                      </span>
                      <div className="ml-4 flex-shrink-0">
                        <Plus className="h-5 w-5 text-black group-data-[state=open]:hidden" />
                        <Minus className="h-5 w-5 text-black hidden group-data-[state=open]:block" />
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pt-2">
                    <div className="text-black font-normal text-base">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqList;
