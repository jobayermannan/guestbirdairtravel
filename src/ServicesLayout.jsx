import React from 'react';
import HeaderSection from './HeaderSection';
import ServiceCard from './ServiceCard';

const ServicesLayout = () => {
  return (
    <div className="flex flex-col items-center w-full mx-auto">
      <HeaderSection 
        title="We Make Your Dream Travel"
        subtitle="WHAT WE DO"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
      />
      <div className="flex flex-row justify-center gap-8 w-full mt-8">
        <ServiceCard 
          icon="https://dashboard.codeparrot.ai/api/image/Z59Anw58MnUDluQc/solar-ea.png"
          title="VISA Processing"
          description="Lorem ipsum dolor sit amet, ctetur adipiscing elit."
        />
        <ServiceCard 
          icon="https://dashboard.codeparrot.ai/api/image/Z59Anw58MnUDluQc/system-u.png"
          title="Passport Processing"
          description="Lorem ipsum dolor sit amet, ctetur adipiscing elit."
        />
        <ServiceCard 
          icon="https://dashboard.codeparrot.ai/api/image/Z59Anw58MnUDluQc/guidance.png"
          title="Tour Packages"
          description="Lorem ipsum dolor sit amet, ctetur adipiscing elit."
        />
      </div>
    </div>
  );
};

export default ServicesLayout;