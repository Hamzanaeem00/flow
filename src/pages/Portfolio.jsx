import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import here from "../assets/images/heree.png";
import girl2 from "../assets/images/girl2.jpg";
import Button from "../components/Button";

const previousGrowthArray = [
  "creation of creative content",
  "targeted advertising",
  "cooperation with influencers",
];
const nextGrowthArray = [
  "Product Placement",
  "Social Media Engagement",
  "Partnerships and Sponsorships",
];

const Portfolio = () => {
  const hereimgRef = useRef(null);
  const [isNextGrowth, setIsNextGrowth] = useState(false);

  useEffect(() => {
    // Animation for hereimgRef
    ScrollTrigger.create({
      trigger: hereimgRef.current,
      start: "top 80%",
      scrub: 2,

      onEnter: () => {
        gsap.fromTo(
          hereimgRef.current,
          { clipPath: "inset(50% 50% 50% 50%)", opacity: 0 }, // Start point
          {
            clipPath: "inset(0% 0% 0% 0%)",
            opacity: 1,
            duration: 3,
            ease: "power2.out",
          } // End point
        );
      },
      onEnterBack: () => {
        gsap.fromTo(
          hereimgRef.current,
          { clipPath: "inset(50% 50% 50% 50%)", opacity: 0 }, // Start point
          {
            clipPath: "inset(0% 0% 0% 0%)",
            opacity: 1,
            duration: 3,
            ease: "power2.out",
          } // End point
        );
      },
    });
  }, []);

  return (
    <div className="porfolio-box">
      <h2 className="text-center xs:text-left sm:text-left text-6xl xs:text-4xl sm:text-5xl font-medium mb-12 xs:mb-8 sm:mb-10">
        We turn{" "}
        <span className="relative inline-block">
          ideas
          {/* Pink oval */}
          <span
            className="absolute inset-0 -top-1 -left-3 xs:-top-6 xs:-left-6 sm:-top-3 sm:-left-5 w-full h-full rounded-full z-[-1]"
            style={{
              transform: "rotate(-1deg)",
            }}
          >
            <img
              loading="lazy"
              ref={hereimgRef}
              src={here}
              alt="Animated"
              style={{
                maxWidth: "140px",
              }}
            />
          </span>
        </span>{" "}
        into reality
      </h2>

      <div className="grid grid-cols-12 gap-4">
        {/* Growth Section On LeftSide */}
        <div className="flex xs:justify-center sm:justify-center col-span-5 xs:col-span-12 sm:col-span-12 md:col-span-6"> 
          <div className="w-full">
            <h2 className="text-2xl xs:text-xl sm:text-1xl md:text-1xl font-medium mb-12 mt-2 xs:mb-6 xs:mt-0 sm:mb-8 sm:mt-0">
              Exponential growth
            </h2>
            {(isNextGrowth ? nextGrowthArray : previousGrowthArray).map(
              (item, index) => (
                <div
                  index={index}
                  className={`w-[95%] border-t ${
                    index === 2 || index === 5 ? "border-b" : ""
                  } border-solid border-[#d9d9d9]`}
                >
                  <h2 className="text-xs uppercase font-medium my-4 xs:my-3 sm:my-4">
                    {item}
                  </h2>
                </div>
              )
            )}

            <div className="flex xs:justify-center sm:justify-center mt-10 xs:mt-6 sm:mt-7">
              <Button
                text="<"
                backgroundColor={isNextGrowth ? "bg-black" : "bg-gray-100"}
                textColor={isNextGrowth ? "text-gray-100" : "text-black"}
                borderRadius="50px"
                padding="px-7 py-2 mr-3"
                onClick={() => setIsNextGrowth(false)}
              />
              <Button
                text=">"
                backgroundColor={isNextGrowth ? "bg-gray-100" : "bg-black"}
                textColor={isNextGrowth ? "text-black" : "text-gray-100"}
                borderRadius="50px"
                padding="px-7 py-2"
                onClick={() => setIsNextGrowth(true)}
              />
            </div>
          </div>
        </div>
        {/* Rectangular Image Section On RightSide */}
        <div className="col-span-7 xs:col-span-12 sm:col-span-12 md:col-span-6 xs:mt-12 sm:mt-10">
          <div className="relative">
            <img src={girl2} className="h-[330px] w-full rounded-3xl" loading="lazy" />
            <Button
              text="View all"
              backgroundColor="bg-[#ffffff2e]"
              textColor="text-gray-100"
              borderRadius="50px"
              padding="absolute top-3 right-3 px-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
