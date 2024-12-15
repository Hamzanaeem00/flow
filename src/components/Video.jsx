import React, { useState } from "react";
import social from "../assets/images/socialimage.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import { faPlay } from "@fortawesome/free-solid-svg-icons"; // Import the specific icon

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <div className="flex justify-end absolute right-[-12px] top-[-12px] social-media-container px-2 h-10 bg-black rounded-full flex items-center justify-center">
        <FontAwesomeIcon className="w-6 h-3 text-white" icon={faPlay} />
      </div>
      <img
        loading="lazy"
        src={social}
        className="w-full rounded-3xl h-[190px] shadow-lg"
      />
    </>
  );
};

export default Video;
