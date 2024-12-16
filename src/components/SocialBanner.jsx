import {  Instagram, Music } from "lucide-react";
import React, { useEffect, useRef } from "react";
import emoji from "../assets/images/pink.svg";
import here from "../assets/images/heree.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Video from "./Video";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const SocialBanner = () => {
  const imgRef = useRef(null);
  const hereimgRef = useRef(null);

  useEffect(() => {
    // Animation for imgRef
    ScrollTrigger.create({
      trigger: imgRef.current, // Element to watch
      start: "top 80%", // Start animation when the top of the image is at 80% viewport height
      scrub: 2,

      onEnter: () => {
        gsap.fromTo(
          imgRef.current,
          { x: -200, opacity: 0 }, // Start position
          { x: 0, opacity: 1, duration: 3, ease: "power3.out" } // End position
        );
      },
      onEnterBack: () => {
        gsap.fromTo(
          imgRef.current,
          { x: -200, opacity: 0 }, // Start position
          { x: 0, opacity: 1, duration: 3, ease: "power3.out" } // End position
        );
      },
    });

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
    <div>
      <div className="  cursor-pointer mt-40" id="/">
        <div className=" max-w-[85vw] mx-auto grid grid-cols-12 gap-0 ">
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
                <span className="text-8xl lg:text-7xl relative md:text-7xl sm:text-5xl xs:text-3xl ml-5">
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
            <div className="mt-7">
              <span className=" lg:text-7xl  text-8xl md:text-7xl sm:text-5xl xs:text-3xl ">
                in the{" "}
              </span>
              <span className=" tracking-tighter text-8xl lg:text-7xl  md:text-7xl sm:text-4xl xs:text-3xl text-gray-300">
                social media
              </span>
            </div>

            {/* for small screens */}

            <div className="grid grid-cols-12 gap-4 items-center p-8 lg:hidden xl:hidden 2xl:hidden">
              {/* Left Icon */}

              <div className="col-span-1 flex items-center justify-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className=" bg-punk bg-aqua p-5  rounded-full "
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
                <span className="relative socail-media tracking-tight  text-8xl lg:text-7xl  md:text-7xl sm:text-4xl xs:text-3xl">
                  world starts{" "}
                  <span className="relative inline-block ">
                    {" "}
                    here!
                    {/* Pink oval */}
                    <span
                      className="absolute inset-0 -top-2 -left-5 w-full h-full  rounded-full z-[-1]"
                      style={{
                        transform: "rotate(-12deg)",
                      }}
                    >
                      <img
                        loading="lazy"
                        ref={hereimgRef}
                        src={here}
                        alt="Animated"
                        style={{
                          maxWidth: "250px",
                        }}
                      />
                    </span>
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
          <div className="col-span-3 lg:col-span-3 md:col-span-12 sm:col-span-12 xs:col-span-12 md:text-center socail-media relative mt-6">
            <Video />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 items-center  md:hidden sm:hidden xs:hidden">
          {/* Left Icon */}
          <div className="col-span-2 flex items-center justify-center cursor-pointer ">
            <img
              loading="lazy"
              src={emoji}
              alt="Animated emoji"
              ref={imgRef}
              style={{ width: "160px", opacity: 0 }} // Initial opacity for smooth animation
            />
            <svg
              style={{
                marginLeft: "-20px",
                marginTop: "-20px",
                zIndex: "-1",
                animation: "bounce 2s infinite",
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="bg-punk bg-aqua p-5 rounded-full"
            >
              <path
                fillRule="evenodd"
                d="M11.47 13.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 0 0-1.06-1.06L12 11.69 5.03 4.72a.75.75 0 0 0-1.06 1.06l7.5 7.5Z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M11.47 19.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 1 0-1.06-1.06L12 17.69l-6.97-6.97a.75.75 0 0 0-1.06 1.06l7.5 7.5Z"
                clipRule="evenodd"
              />
            </svg>

            <style jsx>{`
              @keyframes bounce {
                0%,
                100% {
                  transform: translateY(0);
                }
                50% {
                  transform: translateY(-10px);
                }
              }
            `}</style>
          </div>

          {/* Text Content */}
          <div className="col-span-9 flex mt-[-20px]">
            <span className="relative tracking-tight  text-8xl lg:text-7xl  md:text-7xl sm:text-4xl xs:text-3xl">
              world starts{" "}
              <span className="relative inline-block ">
                {" "}
                here!
                {/* Pink oval */}
                <span
                  className="absolute inset-0 -top-2 -left-5 w-full h-full  rounded-full z-[-1]"
                  style={{
                    transform: "rotate(-6deg)",
                  }}
                >
                  <img
                    loading="lazy"
                    ref={hereimgRef}
                    src={here}
                    alt="Animated"
                    style={{
                      maxWidth: "250px",
                    }}
                  />
                </span>
              </span>
            </span>
            <div
              className=" mx-20 sm-font relative"
              style={{
                transform: "rotate(-25deg)",
              }}
            >
              <span className=" text-pink-500 text-sm font-bold italic absolute bottom-10">
                SMM from <br /> professionals
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialBanner;
