import React, { useState } from "react";
import faq from "../assets/images/faqImg.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";


const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqData = [
    {
      title: "WHAT IS SMM AND WHY IS IT IMPORTANT FOR MY BUSINESS?",
      content:
        "SMM (Social Media Marketing) is a strategy of using social networks to improve engagement and relationships with audiences. This is important for business because it allows you to communicate effectively with customers, increase brand awareness and accelerate growth.",
    },
    {
      title: "WHICH SOCIAL NETWORKS ARE BEST FOR MY BUSINESS?",
      content:
        "SMM (Social Media Marketing) is a strategy of using social networks to improve engagement and relationships with audiences. This is important for business because it allows you to communicate effectively with customers, increase brand awareness and accelerate growth.",
    },
    {
      title: "HOW OFTEN DO YOU NEED TO UPDATE CONTENT ON SOCIAL NETWORKS?",
      content:
        "SMM (Social Media Marketing) is a strategy of using social networks to improve engagement and relationships with audiences. This is important for business because it allows you to communicate effectively with customers, increase brand awareness and accelerate growth.",
    },
    {
      title: "HOW DO YOU HELP SOLVE CRISIS SITUATIONS IN SOCIAL NETWORKS?",
      content:
        "SMM (Social Media Marketing) is a strategy of using social networks to improve engagement and relationships with audiences. This is important for business because it allows you to communicate effectively with customers, increase brand awareness and accelerate growth.",
    },
    {
      title: "HOW WILL OUR COOPERATION WITH YOU GO?",
      content:
        "SMM (Social Media Marketing) is a strategy of using social networks to improve engagement and relationships with audiences. This is important for business because it allows you to communicate effectively with customers, increase brand awareness and accelerate growth.",
    },
  ];



  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleCollapseChange = (key) => {
    setActiveKey(key);
  };

  return (
    <div className="max-w-[85vw] mt-40 mx-auto px-4" id="faq">
      <div className="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-1">
          <h1 className="text-5xl font-normal text-left">FAQs</h1>
          <img src={faq} alt="" style={{ height: "500px", }} loading="lazy" />
        </div>
        <div className="col-span-2">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border-t border-gray-300 first:border-t-0 py-4"
            >
              <div
                className="flex justify-between items-center cursor-pointer hover:text-pink-500"
                onClick={() => toggleAccordion(index)}
              >
                <h2 className=" lg:text-normal xs:tex-sm  ">{item.title}</h2>
                <span
                  className={`text-2xl  transition-transform duration-300 ${
                    activeIndex === index ? " transition-all duration-[300ms] ease-in-out " : "transition-all duration-[300ms] ease-in-out"
                  }`}
                >
                  {activeIndex === index ? <FontAwesomeIcon className="text-gray-500" icon={faXmark} /> : <FontAwesomeIcon className="text-gray-500" icon={faPlus} />}
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-[300ms] ease-in-out flex justify-end transform ${
                  activeIndex === index
                    ? "mt-10 opacity-100 translate-y-0"
                    : "max-h-0 opacity-0 -translate-y-5"
                }`}
              >
                <p className="w-[450px] bg-lightGray px-4 py-4 rounded-2xl text-sm text-gray-600">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        
        </div>
      </div>
    </div>
  );
};

export default Faq;

