import React from "react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const mediaQuery = useMediaQuery({ query: "(min-width: 614px)" });

  useEffect(() => {
    if (mediaQuery) {
      setIsOpen(false);
    }
  }, [mediaQuery]);
  console.log(isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <React.Fragment>
      <section className="max-w-[95vw] mx-auto md:flex nav_section_hide">
        <nav
          className={`  fixed top-5 min-w-[95vw] mx-auto nav-bar  rounded-full  transition-all duration-300
      ${isScrolled ? "bg-black backdrop-blur-sm" : "bg-black"}`}
        >
          <div className=" px-2 sm:px-2 w-full">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <NavLink
                href="/"
                className="text-white text-2xl font-semibold px-2 sm:px-2"
              >
                flow<span className="text-aqua">.</span>
              </NavLink>

              {/* Navigation Links */}
              <div className=" md:flex items-center space-x-8">
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  About us
                </button>
                <NavLink
                  href="/services"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  Services
                </NavLink>
                <NavLink
                  href="/portfolio"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  Portfolio
                </NavLink>
                <NavLink
                  href="/faq"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  FAQ
                </NavLink>
                <NavLink
                  href="/blog"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  Blog
                </NavLink>
              </div>

              {/* Contact Button */}
              {/* <button variant="secondary" className="bg-white text-black hover:bg-gray-100">
            Contact us
          </button> */}
              <Button
                text="Contact us"
                backgroundColor="bg-white"
                textColor="text-black"
                hover="hover:bg-gray-100"
                borderRadius="50px"
              />
            </div>
          </div>
        </nav>
      </section>
      {/* Mobile View Section */}
      <div className="hidden mobile-navigation pt-4 pb-1 pl-4 border-b fixed top-0 w-full bg-black">
        <FontAwesomeIcon
          onClick={() => setIsOpen(!isOpen)}
          icon={faBars}
          className="text-xl hover:scale-110 transition-all duration-200 text-white"
        />
      </div>
      {isOpen && (
        <section className="w-full flex justify-center items-center">
          <nav
            className={`fixed top-[60px] w-[50vh] mx-10 h-[80vh] pt-10 rounded-lg transition-all duration-300 nav-bar
            ${isScrolled ? "bg-black/80" : "bg-black"}`}
          >
            <div className=" px-2 sm:px-2 w-full">
              <div className="flex flex-col items-center gap-10 justify-between h-16">
                <div className="flex border-b w-full text-center justify-center">
                  {/* Logo */}
                  <NavLink
                    href="/"
                    className=" text-pink-500 text-2xl font-semibold -tracking-tighter px-2 sm:px-2"
                  >
                    flow<span className="text-aqua">.</span>
                  </NavLink>
                  {/* <h1 className="text-white rotate-45 text-2xl">+</h1> */}
                </div>

                {/* Navigation Links */}
                <div className=" flex flex-col justify-center items-center gap-10 font-medium">
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    About us
                  </button>
                  <NavLink
                    href="/services"
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    Services
                  </NavLink>
                  <NavLink
                    href="/portfolio"
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    Portfolio
                  </NavLink>
                  <NavLink
                    href="/faq"
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    FAQ
                  </NavLink>
                  <NavLink
                    href="/blog"
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    Blog
                  </NavLink>
                </div>

                {/* Contact Button */}
                {/* <button variant="secondary" className="bg-white text-black hover:bg-gray-100">
     Contact us
   </button> */}
                <Button
                  text="Contact us"
                  backgroundColor="bg-white"
                  textColor="text-black"
                  hover="hover:bg-gray-100"
                  borderRadius="50px"
                />
              </div>
            </div>
          </nav>
        </section>
      )}
    </React.Fragment>
  );
}
