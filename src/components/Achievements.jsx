import React from "react";
import Card from "./Card";

const Achievements = () => {
  // Data for the cards
  const cardsData = [
    { stat: "10,000+", description: "Created campaigns", number: "01" },
    { stat: "98%", description: "Brand growth", number: "03" },
    { stat: "160,000", description: "Satisfied customers", number: "02" },
    { stat: "19", description: "Years on the market", number: "04", isLastCard: true },
  ];

  return (
    <div className="max-w-[90vw] mx-auto px-6 py-16">

      {/* Stats Section */}
      <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-6 xs:grid-cols-1 text-white">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            stat={card.stat}
            description={card.description}
            number={card.number}
            isLastCard={card.isLastCard || false} // Only the last card gets the decorative element
          />
        ))}
      </div>

      {/* Text Section */}
      <div className="mt-16 text-center max-w-4xl mx-auto">
        <p className="text-xl lg:text-2xl font-light leading-relaxed">
          We are a team of professionals dedicated to the art of{" "}
          <span className="relative text-pink-500 font-bold">
            social media
            {/* Circle around "social media" */}
            <span className="absolute left-0 bottom-[-5px] w-full h-[1px] bg-pink-500"></span>
          </span>
          . We turn ideas into reality, building impressive online stories and
          ensuring rapid growth of your brand.
        </p>
      </div>
    </div>
  );
};

export default Achievements;
