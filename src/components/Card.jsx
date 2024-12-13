import React from "react";

const Card = ({ stat, description, number, isLastCard }) => {
  return (
    <div className="bg-black w-full max-w-[350px] aspect-square rounded-3xl">
    <div className="p-6 flex flex-col justify-between h-full">
      <div className="space-y-1">
        <p className="text-[40px] font-medium tracking-tight text-cyan-400">
          10,000+
        </p>
        <p className="text-gray-400 text-sm">
          Created campaigns
        </p>
      </div>
      <div className="text-gray-600 text-sm">
        /01
      </div>
    </div>
  </div>
  );
};

export default Card;
