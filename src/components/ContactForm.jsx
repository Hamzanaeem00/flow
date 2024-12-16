import React from 'react'

const ContactForm = () => {
  return (
    <div className="rounded-3xl col-span-2 py-2 bg-black">
      <div className="bg-black text-white p-8 rounded-lg w-full ">
        {/* Title */}
        <h1 className="text-5xl font-normal p-2 mb-2">Let’s work together</h1>

        {/* Form */}
        <form className="space-y-4">
          {/* Full Name and Email */}
          <div className="grid grid-cols-2  lg:grid-cols-2 sm-grid-cols-2 xs:grid-cols-2 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="FULL NAME"
              className="w-full bg-inputColor text-white p-3 rounded-2xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input
              type="email"
              placeholder="EMAIL"
              className="w-full bg-inputColor text-white p-3 rounded-2xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          {/* Message */}
          <input
            placeholder="MESSAGE"
            rows="4"
            className="w-full h-[120px] bg-inputColor text-white p-3 rounded-2xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
          ></input>

          {/* Send Button and Privacy Notice */}
          <div className="flex items-center justify-start">
            <button
              type="submit"
              className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-300 transition"
            >
              Send
            </button>
            <p className="text-sm text-gray-600 mx-4 w-60 ">
              By clicking the button “send”, you agree with{" "}
              <span className="underline cursor-pointer">
                privacy policy terms
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm