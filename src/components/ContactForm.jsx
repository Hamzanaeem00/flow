import React from "react";

const ContactForm = () => {
  return (
    <div className="rounded-3xl col-span-2 py-2 bg-black ">
      <div className="bg-black text-white p-8 rounded-3xl w-full ">
        {/* Title */}
        <h1 className="text-5xl font-normal p-2 mb-2 ">Let’s work together</h1>

        {/* Form */}
        <form className="space-y-4">
          {/* Full Name and Email */}
          <div className="grid grid-cols-2  lg:grid-cols-2 sm-grid-cols-2 xs:grid-cols-2 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full name"
              className="w-full h-[53px] bg-inputColor text-white p-3 rounded-lg placeholder-gray-400 focus:outline-none
               outline-none focus:ring-1 focus:ring-accent  placeholder:font-light
              "
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full h-[53px] bg-inputColor text-white p-3 rounded-lg placeholder-gray-400 focus:outline-none
               outline-none focus:ring-1 focus:ring-accent  placeholder:font-light
              "
            />
          </div>

          {/* Message */}
          <input
            placeholder="Message"
            rows="4"
            className="w-full min-h-[110px] bg-inputColor text-white p-3 rounded-2xl
             placeholder-gray-400 focus:outline-none 
             outline-none focus:ring-1 focus:ring-accent  placeholder:font-light
             "
          ></input>

          {/* Send Button and Privacy Notice */}
          <div className="flex items-center justify-start">
            <button
              type="submit"
              className="rounded-full border bg-white border-white/50 max-w-[170px] px-8 py-4 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group font-semibold"
            >
              <span className="group-hover:translate-y-[120%] group-hover:opacity-0 transition-all duration-500 text-black">
               Send
              </span>
              <p className="-translate-y-[120%]  text-black opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100
               transition-all duration-300 absolute  font-semibold">
                Let's talk
              </p>
            </button>
            <p className="text-sm text-gray-600 mx-4 w-60">
              By clicking the button “send”, you agree with{" "}
              <span className="underline cursor-pointer">
                privacy policy terms
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
