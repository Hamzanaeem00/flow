 import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import Button from "./Button"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={
      `  fixed top-5 min-w-[95vw]  rounded-full  transition-all duration-300
      ${isScrolled ? "bg-black/80 backdrop-blur-sm" : "bg-black"}`
    }>
      <div className=" px-2 sm:px-2 w-full">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink href="/" className="text-white text-2xl font-semibold px-2 sm:px-2">
            flow<span className="text-aqua">.</span>
          </NavLink>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-gray-300 transition-colors"
            >
              About us
            </button>
            <NavLink href="/services" className="text-white hover:text-gray-300 transition-colors">
              Services
            </NavLink>
            <NavLink href="/portfolio" className="text-white hover:text-gray-300 transition-colors">
              Portfolio
            </NavLink>
            <NavLink href="/faq" className="text-white hover:text-gray-300 transition-colors">
              FAQ
            </NavLink>
            <NavLink href="/blog" className="text-white hover:text-gray-300 transition-colors">
              Blog
            </NavLink>
          </div>

          {/* Contact Button */}
          {/* <button variant="secondary" className="bg-white text-black hover:bg-gray-100">
            Contact us
          </button> */}
          <Button text="Contact us" backgroundColor="bg-white" textColor = "text-black" hover= "hover:bg-gray-100" borderRadius= "50px"  />
        </div>
      </div>
    </nav>
  )
}

