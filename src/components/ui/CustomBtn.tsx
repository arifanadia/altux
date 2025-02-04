import React from "react";

const CustomBtn = ({
  title,
  onClick,
}: {
  title: string;
  onClick?: () => void;
}) => {
  return (
    <div>
      <button
        onClick={onClick} // Now correctly typed as a function
        className="relative group border border-primary hover:text-black hover:border-none rounded-full p-3 text-sm lg:text-base font-medium w-28 md:w-36 overflow-hidden"
      >
        <span className="relative z-10">{title}</span> 
        <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-125 group-hover:skew-x-[-45deg] transition-all duration-500"></span>
      </button>
    </div>
  );
};

export default CustomBtn;
