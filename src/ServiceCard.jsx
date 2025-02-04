import React from 'react';

const ServiceCard = ({ 
  icon = 'https://dashboard.codeparrot.ai/api/image/Z59Anw58MnUDluQc/solar-ea.png',
  title = 'VISA Processing',
  description = 'Lorem ipsum dolor sit amet, ctetur adipiscing elit.',
  iconSize = 72
}) => {
  return (
    <div className="w-full max-w-[350px] h-[282.68px] bg-gradient-to-b from-transparent via-transparent to-[#4141A5] bg-opacity-10 rounded-[12px] p-[35px] flex flex-col gap-[11px] box-border">
      <img 
        src={icon} 
        alt={title}
        className="w-[72px] h-[72px] object-contain self-center"
        style={{ width: `${iconSize}px`, height: `${iconSize}px` }}
      />
      
      <div className="flex flex-col gap-[10px] mt-[11px] text-center">
        <h3 className="font-urbanist font-bold text-[20px] leading-[30px] text-[#1A093F] m-0 uppercase">
          {title}
        </h3>
        
        <p className="font-urbanist font-normal text-[16px] leading-[26px] text-[#8C849F] m-0">
          {description}
        </p>
        
        <button 
          className="flex items-center justify-center gap-[10px] bg-transparent border-none p-0 cursor-pointer mt-[10px] hover:opacity-80"
        >
          <span className="font-urbanist font-medium text-[14px] leading-[30px] text-[#F15A29] uppercase">
            Get Started
          </span>
          <img 
            src="https://dashboard.codeparrot.ai/api/image/Z59Anw58MnUDluQc/arrow-al.png" 
            alt="arrow" 
            className="w-[24px] h-[24px]"
          />
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;