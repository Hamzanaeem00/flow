import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTiktok, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import React from 'react'

const ContactSocialMedia = () => {
  return (
    <div className=" col-span-1  ">
    <div className="grid grid-cols-2 gap-2 w-full">
      {/* Instagram */}
      <div className="h-[200px] bg-black flex justify-center items-center rounded-3xl border border-gray-700">
        <FontAwesomeIcon icon={faInstagram} className= "text-4xl text-cyan-400" />
        

      </div>

      {/* TikTok */}
      <div className="h-[200px] bg-black flex justify-center items-center rounded-3xl  border border-gray-700">
      <FontAwesomeIcon icon={faTiktok} className= "text-4xl text-cyan-400" />
        
      </div>

      {/* Facebook */}
      <div className="h-[200px] bg-black flex justify-center items-center rounded-3xl border border-gray-700">
      <FontAwesomeIcon icon={faFacebookF} className= "text-4xl text-cyan-400" />

      </div>

      {/* Questions Box */}
      <div className="h-[200px] w-full bg-black flex flex-col relative justify-center items-center rounded-3xl  border border-gray-700">
      <p className="text-pink-700 font-semibold text-xs text-lg absolute top-10 left-16 "  style={{
                   
                    transform: "rotate(-30deg)",
                  }}>
            Do you have <br /> any questions?
          </p>
          <div className="flex justify-center items-center mt-6 border-2 border-pink-500 rounded-full h-14 w-14" >
            <FontAwesomeIcon
              icon={faPhone}
              className="text-3xl text-cyan-400"
            />
            </div>

      </div>
    </div>
  </div>

  )
}

export default ContactSocialMedia