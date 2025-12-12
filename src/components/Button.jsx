import React from "react";

const Button = ({ children, className = "" }) => {
  return (
    <>
      <button
        className={`
    w-[110px] md:w-[126px] 
    h-[40px] 
    flex items-center justify-center
    text-[14px] tracking-[0.25em] uppercase
    [clip-path:polygon(0_0,100%_0,100%_70%,92%_100%,0_100%)]
    ${className}
  `}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
