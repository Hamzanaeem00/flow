import { ChevronDown, ChevronDownCircle, Instagram, Music, Play } from 'lucide-react'
import React, { useState } from 'react'
import social from '../assets/images/socialimage.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faPlay } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon
import here from '../assets/images/here.png'


const SocialBanner = () => {
      const [isPlaying, setIsPlaying] = useState(false)
    
  return (
    <div>
        <div className=' max-w-[88vw] mx-auto cursor-pointer mt-40 px-6  ' >
        <div className=' grid grid-cols-12  gap-0 '>
            <div className='lg:col-span-10 md:col-span-12 sm:col-span-12 xs:col-span-12'>
                {/* Icons  */}
            <div className='icon flex '>
            <div className="bg-lightGray md:mt-5  hover:bg-black hover:scale-125  transition duration-150 ease-in-out  text-white flex items-center justify-center rounded-full w-20 h-20">
            {/* TikTok Icon (use any SVG or library like Font Awesome) */}
            <Music className="w-8 h-8 text-black hover:text-white" />
          </div>
          <div className="bg-lightGray  md:mt-5 hover:bg-black hover:scale-125 hover:text-white  transition duration-150 ease-in-out text-white flex items-center justify-center rounded-full w-20 h-20">
            <Instagram className="w-8 h-8 text-black hover:text-white" />
            {/* Instagram Icon */}
          </div>
          <div>
          <span  className='lg:text-9xl md:text-6xl sm:text-6xl xs:text-3xl ml-5'>{"Your success "} <br /> 
          </span>
          </div>
            </div>
            <span className=' tracking-tight lg:text-9xl md:text-6xl sm:text-6xl xs:text-3xl'>in the </span> 
          <span className=' tracking-tighter lg:text-9xl md:text-6xl sm:text-6xl xs:text-3xl text-gray-300'>social media</span>
            </div>
    
          <div className='lg:col-span-2 md:col-span-6 sm:col-span-6  xs:col-span-12 relative w-full mt-6'>
            <div className='flex justify-end absolute right-[-12px] top-[-12px] px-2 h-10  bg-black rounded-full flex items-center justify-center'>
            <FontAwesomeIcon className="w-6 h-3 text-white"icon={faPlay} />
            </div>
      <img src={social}  className='w-full rounded-3xl h-[200px] shadow-lg'/>
          </div>
          
          </div>  
        </div>



<div className="grid grid-cols-12 gap-4 items-center p-8">
      {/* Left Icon */}
      <div className="col-span-1 flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-16 bg-punk bg-aqua p-5  rounded-full ">
  <path fill-rule="evenodd" d="M11.47 13.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 0 0-1.06-1.06L12 11.69 5.03 4.72a.75.75 0 0 0-1.06 1.06l7.5 7.5Z" clip-rule="evenodd" />
  <path fill-rule="evenodd" d="M11.47 19.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 1 0-1.06-1.06L12 17.69l-6.97-6.97a.75.75 0 0 0-1.06 1.06l7.5 7.5Z" clip-rule="evenodd" />
</svg>

      </div>

      {/* Text Content */}
      <div className="col-span-11">
        <h1 className="text-4xl ">
          <span className="relative text-9xl flex">
            world starts{" "}
          <img src={here} alt="" className='mx-2 mt-2' width="400px" />
          </span>
        </h1>
      </div>
    </div>
   
    </div>
  )
}

export default SocialBanner