import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "./Card";
import Accordion from "./Accordian";
import here from "../assets/images/hereCircle.svg";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

const Achievements = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (!isMobile) {
        gsap.fromTo(
          card,
          { y: -100, opacity: 1 }, // Start position: above the viewport
          {
            y: 0,
            opacity: 1,
            duration: 2,
            ease: "bounce.out",
            scrollTrigger: {
              trigger: card, // Each card triggers its own animation
              start: "top 90%", // Start animation when the card is 90% down the viewport
              end: "bottom 10%", // Define when the animation ends
              // toggleActions: "play none none none", // Animation only plays once
              onEnter: () => {
                // Trigger when scrolling into view
                gsap.fromTo(
                  card,
                  { y: -100, opacity: 1 }, // Start position
                  {
                    y: 0,
                    opacity: 1,
                    duration: 2,
                    ease: "bounce.out",
                  }
                );
              },
            },
          }
        );
      }
    });
  }, []);

  const cardsData = [
    { stat: "10,000+", description: "Created campaigns", number: "/01" },
    { stat: "98%", description: "Brand growth", number: "/02" },
    { stat: "160,000", description: "Satisfied customers", number: "/03" },
    {
      stat: "19",
      description: "Years on the market",
      number: "/04",
      isLastCard: true,
    },
  ];

  return (
    <div className="max-w-[85vw] mx-auto px-6 py-10">
      <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 gap-2 lg:gap-3 xl:gap-2 2xl:gap-2 relative">
        {cardsData.map((card, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)} // Add each card to the ref array
          >
            <Card
              stat={card.stat}
              description={card.description}
              number={card.number}
              isLastCard={card.isLastCard}
            />
          </div>
        ))}
      </div>
      {/* Text Section */}
      <div className="mt-10 text-center max-w-2xl mx-auto relative">
        <p className="text-2xl lg:text-2xl sm:text-xl leading-relaxed ">
          We are a team of professionals dedicated to the art of <br />{" "}
          <span className="relative">social media.</span>{" "}
          <span className="absolute inset-0  w-full h-full  rounded-full z-[-1]">
            <img
              className="sm:hidden xs:hidden "
              loading="lazy"
              // ref={hereimgRef}
              src={here}
              alt="Animated"
              style={{
                width: "160px",
                position: "absolute",
                top: "20px",
                left: "-8px",
                transform: "rotate(9deg)",
              }}
            />
          </span>{" "}
          We turn ideas into reality, building impressive <br /> online stories
          and ensuring rapid growth of your brand.
        </p>
      </div>

      <Accordion />
    </div>
  );
};

export default Achievements;
