import React from 'react';

const HeroSection_ImageGallery = ({ className }) => {
  return (
    <div className="w-full bg-inherit">
      {/* Constrain main content to 1240px */}
      <div className="max-w-[1240px] mx-auto p-5">
        <div className={`flex flex-row gap-5 min-w-[1024px] ${className}`}>
          {/* Hero Section */}
          <div className="flex flex-col gap-4 flex-1">
            {/* Explore The World Header */}
            <div className="flex items-center gap-2">
              <span className="font-urbanist text-lg font-medium text-[#f15a29] leading-[30px]">
              
                Travel Without Borders 
              </span>
              <img
                src="https://dashboard.codeparrot.ai/api/image/Z5815TRi7Jes38vO/world.png"
                alt="World"
                className="w-5 h-5"
              />
            </div>

            {/* Main Title */}
            <div className="relative">
              <h1 className="font-urbanist text-6xl font-extrabold leading-[76px] text-[#1a093f] max-w-[611px] m-0">
              Making Your Travel Dreams Reality
              </h1>
              <img
                src="https://dashboard.codeparrot.ai/api/image/Z5815TRi7Jes38vO/launch.png"
                alt="Launch"
                className="w-12 h-[74px] ml-2.5"
              />
            </div>

            {/* Description */}
            <p className="font-urbanist text-base font-normal leading-[26px] text-[#8c849f] max-w-[453px] m-0">
            Your Trusted Visa Processing Partner in Bangladesh. We simplify visa applications for your global journey. Experience smooth travel with our expert visa agency in Bangladesh.
            </p>

            {/* Buttons */}
            <div className="flex gap-2.5 items-center">
              <button className="bg-[#f15a29] text-white border-none rounded-[25px] py-2.5 px-9 font-urbanist text-lg font-bold leading-[30px] cursor-pointer">
                Book Now
              </button>
              <button className="flex items-center gap-2.5 bg-none border-none text-[#f15a29] font-urbanist text-sm font-medium cursor-pointer">
                Learn More
                <img
                  src="https://dashboard.codeparrot.ai/api/image/Z5815TRi7Jes38vO/arrow-al.png"
                  alt="Arrow"
                  className="w-6 h-6"
                />
              </button>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="flex gap-5">
            {/* Tour Card 1 */}
            <div className="w-[324px] h-[416px] bg-white rounded-lg border-[1.5px] border-[#f0effb]">
              <img
                src="https://dashboard.codeparrot.ai/api/image/Z5815TRi7Jes38vO/image-2.png"
                alt="Kashmir"
                className="w-full h-[200px] object-cover rounded-t-lg"
              />
              <div className="p-6">
                <span className="font-urbanist text-2xl font-extrabold text-[#f15a29]">
                  $2,700
                </span>
                <div className="mt-5">
                  <h3 className="font-urbanist text-2xl font-bold text-[#1a093f] m-0">
                    Kashmir Day Night
                  </h3>
                  <p className="font-plus-jakarta-sans text-base font-medium text-[#1a093f] opacity-50 m-2">
                    2821 Lake Sevilla, Palm Harbor, TX
                  </p>
                </div>
                <hr className="border-[1.5px] border-[#f0effb] my-5" />
                <div className="flex justify-between text-[#8c849f] font-urbanist text-base">
                  <span>7D/6N</span>
                  <span>People: 5</span>
                  <span>Malaysia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroSection_ImageGallery.defaultProps = {
  className: ''
};

export default HeroSection_ImageGallery;