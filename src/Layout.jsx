import React from 'react';
import Header from './Header';
import HeroSection_ImageGallery from './HeroSection_ImageGallery';

const Layout = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#f9f9ff]">
      <Header className="flex-grow-0 h-auto" />
      <div className="flex flex-row flex-grow items-center justify-between p-5">
        <HeroSection_ImageGallery className="flex-grow h-auto" />
        <div className="w-[443px] h-[494px] bg-cover opacity-70" style={{backgroundImage: 'url(https://dashboard.codeparrot.ai/api/image/Z5815TRi7Jes38vO/rectangl.png)'}}></div>
      </div>
    </div>
  );
};

export default Layout;

