import React, { useState } from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinimize, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const Accordion = () => {
  // State to track which item is open
  const [activeIndex, setActiveIndex] = useState(null);

  // Data for accordion items
  const accordionData = [
    {
      title: "OUR STORY",
      content: "This is our story text. You can include any details here.",
    },
    {
      title: "OUR MISSION",
      content: "This is our mission text. Share your mission statement here.",
    },
  ];

  // Function to toggle accordion items
  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className=" mx-auto mt-10">
      {/* Accordion List */}
      {accordionData.map((item, index) => (
        <div key={index} className="border-b border-gray-300">
          {/* Header */}
          <div
            className="flex justify-between items-center py-4 cursor-pointer transition-all duration-300 hover:text-pink-500"
            onClick={() => handleToggle(index)}
          >
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <span
              className={`text-3xl font-thin transform transition-transform duration-300 ${
                activeIndex === index ? " text-pink-500" : ""
              }`}
            >
              {activeIndex === index ? <FontAwesomeIcon className="text-gray-500 text-lg"  icon={faMinus} /> : <FontAwesomeIcon className="text-gray-500 text-lg" icon={faPlus} />}
            </span>
          </div>
          {/* Content */}
          <div
            className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
              activeIndex === index ? "max-h-40" : "max-h-0"
            }`}
          >
            <p className="text-gray-600 leading-relaxed py-2">
              {item.content}
            </p>
          </div>
        </div>
      ))}

      {/* Button at the Bottom */}
      <div className="flex justify-center mt-10">
        <Button
          text="Learn more"
          backgroundColor="bg-black"
          borderRadius="rounded-full"
          textColor="text-white"
          padding="p-4"
        />
      </div>
    </div>
  );
};

export default Accordion;
