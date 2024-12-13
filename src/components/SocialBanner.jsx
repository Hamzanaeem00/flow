import {
  ChevronDown,
  ChevronDownCircle,
  Instagram,
  Music,
  Play,
} from "lucide-react";
import React, { useState } from "react";
import social from "../assets/images/socialimage.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import { faPlay } from "@fortawesome/free-solid-svg-icons"; // Import the specific icon
import emoji from "../assets/images/pink.png";

const SocialBanner = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      <div className=" max-w-[90vw] mx-auto cursor-pointer mt-40 px-6  ">
        <div className=" grid grid-cols-12 gap-0 ">
          <div className="col-span-8 lg:col-span-9 md:col-span-12 sm:col-span-12 xs:col-span-12 ">
            {/* Icons  */}
            <div className="icon flex ">
              <div className="bg-lightGray   hover:bg-black hover:scale-125  transition duration-150 ease-in-out  text-white flex items-center justify-center rounded-full w-20 h-20">
                {/* TikTok Icon (use any SVG or library like Font Awesome) */}
                <Music className="w-8 h-8 text-black hover:text-white" />
              </div>
              <div className="bg-lightGray hover:bg-black hover:scale-125 hover:text-white  transition duration-150 ease-in-out text-white flex items-center justify-center rounded-full w-20 h-20">
                <Instagram className="w-8 h-8 text-black hover:text-white" />
                {/* Instagram Icon */}
              </div>
              <div>
                <span className="text-8xl lg:text-7xl relative  md:text-7xl sm:text-5xl xs:text-3xl ml-5">
                  {"Your success "} <br />
                  <span className="absolute top-0 right-28 right-[-15px] flex flex-col">
                    {/* First Arc */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="#ff007f"
                      className="w-8 h-8 -rotate-30"
                    >
                      <path d="M4 12a8 8 0 0116 0" />
                    </svg>
                    {/* Second Arc */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="#ff007f"
                      className="w-6 h-6 -mt-4 -rotate-30"
                    >
                      <path d="M6 12a6 6 0 0112 0" />
                    </svg>
                  </span>
                </span>
              </div>
            </div>
            <span className=" tracking-tight lg:text-7xl  text-8xl md:text-7xl sm:text-5xl xs:text-3xl ">
              in the{" "}
            </span>
            <span className=" tracking-tighter text-8xl lg:text-7xl  md:text-7xl sm:text-4xl xs:text-3xl text-gray-300">
              social media
            </span>
            <div className="grid grid-cols-12 gap-4 items-center p-8 lg:hidden xl:hidden 2xl:hidden">
              {/* Left Icon */}
              <img src={emoji} alt="" />
              <div className="col-span-1 flex items-center justify-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-16 bg-punk bg-aqua p-5  rounded-full "
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.47 13.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 0 0-1.06-1.06L12 11.69 5.03 4.72a.75.75 0 0 0-1.06 1.06l7.5 7.5Z"
                    clip-rule="evenodd"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M11.47 19.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 1 0-1.06-1.06L12 17.69l-6.97-6.97a.75.75 0 0 0-1.06 1.06l7.5 7.5Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>

              {/* Text Content */}
              <div className="col-span-9 flex mt-[-20px]  ">
                <span className="relative tracking-tight  text-8xl lg:text-7xl  md:text-7xl sm:text-4xl xs:text-3xl">
                  world starts{" "}
                  <span className="relative inline-block ">
                    {" "}
                    here!
                    {/* Pink oval */}
                    <span
                      className="absolute inset-0 -top-2 -left-5 w-full h-full border-4 border-pink-500 rounded-full z-[-1]"
                      style={{
                        transform: "rotate(-12deg)",
                      }}
                    ></span>
                  </span>
    
                </span>
                
              </div>
              <div className="col-span-2">
                <span
                  className=" text-pink-500 text-sm font-bold italic"
                  style={{
                    top: "-30px",
                    right: "-120px",
                    transform: "rotate(-30deg)",
                  }}
                >
                  SMM from professionals
                </span>
              </div>
            </div>
            
          </div>
          <div className="col-span-3 lg:col-span-3 md:col-span-12 sm:col-span-12 xs:col-span-12 md:text-center relative  mt-6">
            <div className="flex justify-end absolute right-[-12px] top-[-12px] px-2 h-10  bg-black rounded-full flex items-center justify-center">
              <FontAwesomeIcon className="w-6 h-3 text-white" icon={faPlay} />
            </div>
            <img
              src={social}
              className="w-full rounded-3xl h-[160px] shadow-lg"
            />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 items-center p-8 md:hidden sm:hidden xs:hidden">
              {/* Left Icon */}
              <div className="col-span-1 flex items-center justify-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-16 bg-punk bg-aqua p-5  rounded-full "
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.47 13.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 0 0-1.06-1.06L12 11.69 5.03 4.72a.75.75 0 0 0-1.06 1.06l7.5 7.5Z"
                    clip-rule="evenodd"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M11.47 19.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 1 0-1.06-1.06L12 17.69l-6.97-6.97a.75.75 0 0 0-1.06 1.06l7.5 7.5Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>

              {/* Text Content */}
              <div className="col-span-8 flex mt-[-20px]">
                <span className="relative tracking-tight  text-8xl lg:text-7xl  md:text-7xl sm:text-4xl xs:text-3xl">
                  world starts{" "}
                  <span className="relative inline-block ">
                    {" "}
                    here!
                    {/* Pink oval */}
                    <span
                      className="absolute inset-0 -top-2 -left-5 w-full h-full border-4 border-pink-500 rounded-full z-[-1]"
                      style={{
                        transform: "rotate(-12deg)",
                      }}
                    ></span>
                  </span>
    
                </span>
                
              </div>
              <div className="col-span-2 mx-3 sm-font relative"  style={{
                    transform: "rotate(-25deg)",
                  }}>
                <span
                  className=" text-pink-500 text-sm font-bold italic absolute bottom-10"
                 
                >
                  SMM from <br /> professionals
                </span>
              </div>
            </div>
      </div>
    </div>
  );
};

export default SocialBanner;

