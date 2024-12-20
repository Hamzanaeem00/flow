import React from "react";
import cardhover from "../assets/images/cardhoverr.svg";

const Card = ({ stat, description, number, isLastCard }) => {
  return (
    <div className="relative group">
      {/* Card Container */}
      <div className="bg-black w-full max-w-[300px] h-[230px] rounded-3xl cursor-pointer transition-transform transform group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-cyan-500/50 duration-300">
        <div className="py-2 px-6 flex flex-col justify-between h-full relative">
  
            <img
            src={isLastCard? cardhover : "" }
            maxWidth="180px"
            alt=""
            className=' absolute top-[-90px] right-[0px] z-10 sm:hidden xs:hidden md:hidden'
          />

        
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
