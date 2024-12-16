import React from 'react'
import ContactSocialMedia from '../components/ContactSocialMedia'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <div className=' max-w-[75vw] mt-20  mx-auto grid grid-cols-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1'>
      <ContactSocialMedia />
      <ContactForm />

    </div>
  )
}

export default Contact