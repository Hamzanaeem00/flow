import React from "react";
import cardhover from '../assets/images/cardhoverr.svg'


const Card = ({ stat, description, number, isLastCard }) => {
  return (
    <div className=" relative">
    <div className="bg-black w-full max-w-[350px] aspect-square rounded-3xl card-img cursor-pointer ">
    <div className="p-6 flex flex-col justify-between h-full">
    
          <img src={cardhover} alt="" className="card-show absolute z-100 rounded-full top-[-110px] bg-white"  />
      <div className="space-y-1">
        <p className="text-[40px] font-medium tracking-tight text-cyan-400">
          {stat}
        </p>
        <p className="text-gray-400 text-sm">
         {description}
        </p>
      </div>
      <div className="text-gray-600 text-sm">
        {number}
      </div>
    </div>
  </div>
  </div>
  );
};

export default Card;
