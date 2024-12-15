import React, { useState } from "react";
import faq from '../assets/images/faq.svg'

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      title: "WHAT IS SMM AND WHY IS IT IMPORTANT FOR MY BUSINESS?",
      content:
        "SMM (Social Media Marketing) is a strategy of using social networks to improve engagement and relationships with audiences. This is important for business because it allows you to communicate effectively with customers, increase brand awareness and accelerate growth.",
    },
    {
      title: "WHICH SOCIAL NETWORKS ARE BEST FOR MY BUSINESS?",
      content:
        "The best social networks depend on your business goals. Popular options include Facebook, Instagram, LinkedIn, and Twitter.",
    },
    {
      title: "HOW OFTEN DO YOU NEED TO UPDATE CONTENT ON SOCIAL NETWORKS?",
      content:
        "Regular updates are key. For most businesses, posting 3-5 times a week is ideal to keep audiences engaged.",
    },
    {
      title: "HOW DO YOU HELP SOLVE CRISIS SITUATIONS IN SOCIAL NETWORKS?",
      content:
        "We monitor, respond quickly, and provide solutions to mitigate crises while protecting your brand's image.",
    },
    {
      title: "HOW WILL OUR COOPERATION WITH YOU GO?",
      content:
        "Our process includes understanding your needs, developing a strategy, executing it, and providing ongoing support.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="max-w-[85vw] h-screen mx-auto px-4">
      <div className="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="col-span-1">
      <h1 className="text-4xl font-bold text-left">FAQs</h1>
          <img src={faq} alt="" style={{height: "500px"}} />
        </div>
        <div className="col-span-2">
        {faqData.map((item, index) => (
        <div
          key={index}
          className="border-t border-gray-300 first:border-t-0 py-4"
        >
          {/* Question */}
          <div
            className="flex justify-between items-center cursor-pointer hover:text-pink-500"
            onClick={() => toggleAccordion(index)}
          >
            <h2 className="text-lg font-normal">{item.title}</h2>
            <span
              className={`text-2xl transition-transform duration-300 ${
                activeIndex === index ? "rotate-45 text-pink-500" : ""
              }`}
            >
              {activeIndex === index ? "✖" : "+"}
            </span>
          </div>
          {/* Content */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out flex justify-end  ${
              activeIndex === index ? " mt-10" : "max-h-0"
            }`}
          >
            <p className=" w-[450px] bg-lightGray px-4 py-4  rounded-2xl text-sm text-gray-600">{item.content}</p>
          </div>
        </div>
      ))}
        </div>

        
      </div>
    </div>
  );
};

export default Faq;
