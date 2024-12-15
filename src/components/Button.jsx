import React from "react";

const Button = ({
  text,
  backgroundColor,
  textColor,
  hover,
  borderRadius,
  padding,
  onClick,
}) => {
  return (
    <button
      style={{ borderRadius: borderRadius }}
      className={`${backgroundColor} ${textColor}  ${hover} ${borderRadius} ${padding} px-6 py-3 font-medium `}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
