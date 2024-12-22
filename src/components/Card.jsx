import React from "react";
import cardhover from "../assets/images/cardImg.svg";
import { useMediaQuery } from "react-responsive";

const Card = ({ stat, description, number, isLastCard }) => {
  const isRemovedImageDivs = useMediaQuery({
    query: "(min-width: 1130px)",
  });
  return (
    <div className="relative group">
      {/* Card Container */}
      <div className="bg-black w-full max-w-[300px] h-[230px] rounded-3xl cursor-pointer transition-transform transform group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-cyan-500/50 duration-300">
        <div className="py-2 px-6 flex flex-col justify-between h-full relative">
          <img
            src={isLastCard ? cardhover : ""}
            width="220px"
            alt=""
            className="absolute top-[-100px] right-[0px] z-10 sm:hidden xs:hidden md:hidden "
          />
          {/* to color image background white */}
          {isLastCard && (
            // <div className={`${!isRemovedImageDivs && "hidden"}`}>
            <>
              <div
                className={`absolute h-[60px] w-[172px] top-[-34px] right-[14px] rounded-full sm:hidden xs:hidden md:hidden bg-white ${
                  !isRemovedImageDivs && "hidden"
                }`}
                style={{ transform: "rotate(19deg)" }}
              ></div>
              <div
                className={`absolute h-[60px] w-[172px] top-[-42px] right-[17px] rounded-full sm:hidden xs:hidden md:hidden bg-white ${
                  !isRemovedImageDivs && "hidden"
                }`}
                style={{ transform: "rotate(-19deg)" }}
              ></div>
            </>
          )}

          <div className="space-y-1 mt-5 text-left">
            <p className="text-[40px] font-normal tracking-tight text-cyan-400">
              {stat}
            </p>
            <p className="text-gray-300 text-sm">{description}</p>
          </div>
          <div className="text-gray-400 text-sm text-left">{number}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
