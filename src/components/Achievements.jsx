import React from "react";
import Card from "./Card";
import here from "../assets/images/heree.png";


const Achievements = () => {
  // Data for the cards
  const cardsData = [
    { stat: "10,000+", description: "Created campaigns", number: "01" },
    { stat: "98%", description: "Brand growth", number: "03" },
    { stat: "160,000", description: "Satisfied customers", number: "02" },
    { stat: "19", description: "Years on the market", number: "04", isLastCard: true },
  ];

  return (
    <div className="max-w-[85vw] mx-auto px-6 py-16">

      {/* Stats Section */}
      <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-2 xs:grid-cols-1 text-white">
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
      <div className="mt-16 text-center max-w-4xl mx-auto relative">
        <p className="text-3xl lg:text-2xl  leading-relaxed">
          We are a team of professionals dedicated to the art of <br />{"  "}
          <span className="relative underline text-pink-500">
            social media
            {/* Circle around "social media" */}
          </span>
          . We turn ideas into reality, building impressive online stories and
          ensuring rapid growth of your brand.
        </p>
            {/* <img src= {here} width="200px" height="100px" className="absolute top-6 z-[-1]"/> */}
      </div>
    </div>
  );
};

export default Achievements;
