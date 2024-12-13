import React from 'react'

const Button = ({text , backgroundColor, textColor, hover, borderRadius }) => {
  return (
    <button style={{borderRadius: borderRadius}} className={`${backgroundColor} ${textColor}  ${hover} ${borderRadius} px-6 py-3 font-medium `}>{text}</button>
  )
}

export default Button