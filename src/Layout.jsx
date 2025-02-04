import React from 'react';
import Header from './Header';
import HeroSection_ImageGallery from './HeroSection_ImageGallery';

const Layout = () => {
  return (
    <div className="w-full bg-[#f9f9ff]">
      <Header />
      
      {/* Main content area constrained to 1240px */}
      <div className="max-w-[1240px] mx-auto min-h-screen flex flex-col ">
        <div className="flex flex-row flex-grow items-center justify-between">
          <HeroSection_ImageGallery className="flex-grow h-auto" />
          <div
            className="w-[443px] h-[494px] bg-cover opacity-70"
            style={{
              backgroundImage: 'url(https://dashboard.codeparrot.ai/api/image/Z5815TRi7Jes38vO/rectangl.png)'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Layout;