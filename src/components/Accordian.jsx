import React, { useState } from "react";
import Button from "./Button";

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
    <div className=" mx-auto p-4">
      {accordionData.map((item, index) => (
        <div
          key={index}
          className="border-b border-gray-300 py-4 flex flex-col"
        >
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => handleToggle(index)}
          >
            <span className="text-lg font-medium">{item.title}</span>
            <span className="text-3xl font-thin">
              {activeIndex === index ? "-" : "+"}
            </span>
          </div>
          {activeIndex === index && (
            <div className="mt-2 text-gray-600">{item.content}</div>
          )}
        </div>
      ))}

      {/* Button at the bottom */}
      <div className="flex justify-center mt-6">
        <Button text="Learn more" backgroundColor="bg-black"  borderRadius="rounded-full" textColor="text-white" padding="p-4"/>
      </div>
    </div>
  );
};

export default Accordion;
