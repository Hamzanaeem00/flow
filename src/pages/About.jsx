import React from 'react'
import Achievements from '../components/Achievements'

const About = () => {
  return (
    <div className="text-center mt-40  " id='about' >
    <h2 className="text-5xl lg:text-4xl font-medium ">
      Revealing the secrets <br /> of our achievements
    </h2>

    <Achievements />
  </div>
  )
}

export default About