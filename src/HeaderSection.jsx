import React from 'react';

const HeaderSection = ({ 
  title = "We Make Your Dream Travel",
  subtitle = "WHAT WE DO",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
}) => {
  return (
    <div className="flex flex-col items-center gap-2.5 min-w-[320px] max-w-full mx-auto p-5">
      <span className="font-plus-jakarta-sans text-lg font-bold leading-[30px] tracking-[3px] text-[#F15A29] uppercase text-center">
        {subtitle}
      </span>
      
      <h1 className="font-urbanist text-6xl font-bold leading-[58px] text-[#1A093F] m-0 text-center capitalize">
        {title}
      </h1>

      <p className="font-urbanist text-base font-normal leading-[26px] text-[#8C849F] m-0 max-w-[453px] text-center">
        {description}
      </p>
    </div>
  );
};

export default HeaderSection;