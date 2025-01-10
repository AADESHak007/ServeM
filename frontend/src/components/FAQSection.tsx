import React, { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "Q. What is the Smart E-Bin App?",
    answer:
      "The Smart E-Bin App is a smart waste management solution that allows users to locate nearby electronic bins (e-bins), check their fill levels, and access data insights through charts, maps, and analytics.",
  },
  {
    question: "Q. How can I contact customer support?",
    answer:
      "To contact customer support, look for a 'Contact us' or 'Help' button or link on the website or platform. You may be able to email, call, or chat with customer support for assistance.",
  },
  {
    question: "Q. How do the fill level indicators work?",
    answer:
      "The e-bins are equipped with sensors that monitor the fill level in real-time. The app displays this data as percentages (e.g., 25%, 50%, 75%, or 100%) using color-coded markers for easy identification.",
  },
  {
    question: "Q. Can I report a damaged or malfunctioning bin?",
    answer:
      "Yes, the app includes a feature to report issues with bins. Simply select the bin on the map and tap the “Report Issue” button to notify the appropriate authorities.",
  },
];

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h6 className="text-lg text-indigo-600 font-medium text-center mb-2">
            FAQs
          </h6>
          <h2 className="text-4xl font-manrope text-center font-bold text-gray-900 leading-[3.25rem]">
            Frequently asked questions
          </h2>
        </div>

        <div className="accordion-group">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`accordion py-8 px-6 border-b border-solid border-gray-200 transition-all duration-500 rounded-2xl ${
                activeIndex === index ? "bg-indigo-50" : "hover:bg-indigo-50"
              }`}
            >
              <button
                className={`accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left ${
                  activeIndex === index
                    ? "font-medium text-indigo-600"
                    : "hover:text-indigo-600"
                }`}
                aria-expanded={activeIndex === index}
                aria-controls={`collapse-${index}`}
                onClick={() => toggleAccordion(index)}
              >
                <h5>{faq.question}</h5>
                <svg
                  className={`text-gray-500 transition duration-500 group-hover:text-indigo-600 ${
                    activeIndex === index ? "rotate-180 text-indigo-600" : ""
                  }`}
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              <div
                id={`collapse-${index}`}
                className="accordion-content w-full px-0 overflow-hidden transition-all"
                style={{
                  maxHeight: activeIndex === index ? "250px" : "0",
                }}
                aria-labelledby={`heading-${index}`}
              >
                <p className="text-base text-gray-900 leading-6">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default FAQSection;
