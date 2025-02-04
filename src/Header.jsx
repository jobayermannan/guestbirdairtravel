import React from 'react';

const Header = () => {
  return (
    <div className="w-full">
      {/* Top Bar: full-width background */}
      <div className="w-full bg-[#1a093f]">
        {/* Constrain top bar content to 1240px */}
        <div className="max-w-[1240px] mx-auto h-[50px] flex items-center  justify-between px-8 md:px-[15px]">
          <div className="flex gap-6">
            {/* Phone */}
            <div className="flex items-center gap-3">
              <img
                src="https://dashboard.codeparrot.ai/api/image/Z5815TRi7Jes38vO/ion-call.png"
                alt="phone"
                className="w-4 h-4"
              />
              <span className="text-white font-urbanist text-base">
                +8801XXX-XXXXXX
              </span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <img
                src="https://dashboard.codeparrot.ai/api/image/Z5815TRi7Jes38vO/ic-round.png"
                alt="email"
                className="w-4 h-4"
              />
              <span className="text-white font-urbanist text-base">
                mail@guestbirdtravel.com
              </span>
            </div>
          </div>

          {/* Follow Us */}
          <div className="flex items-center gap-4">
            <span className="text-white font-urbanist text-base">Follow us</span>
            <img
              src="https://dashboard.codeparrot.ai/api/image/Z5815TRi7Jes38vO/frame-4.png"
              alt="social"
              className="h-4"
            />
          </div>
        </div>
      </div>

      {/* Main Header: full-width background (transparent or change as needed) */}
      <div className="w-full bg-transparent">
        {/* Constrain main header content to 1240px */}
        <div className="max-w-[1240px] mx-auto h-[128px] flex items-center justify-between  ">
          {/* Logo */}
          <img
            src="https://dashboard.codeparrot.ai/api/image/Z5815TRi7Jes38vO/logo.png"
            alt="logo"
            className="h-[160px] mt-20 object-contain"
          />

          {/* Navigation */}
          <div className="flex items-center gap-4 md:gap-[35px]">
            <span className="text-[#f15a29] font-urbanist font-bold text-lg">
              Home
            </span>
            <span className="text-[#1a093f] font-urbanist font-medium text-lg">
              About Us
            </span>
            <span className="text-[#1a093f] font-urbanist font-medium text-lg">
              Destination
            </span>
            <span className="text-[#1a093f] font-urbanist font-medium text-lg">
              Tour Package
            </span>
            <span className="text-[#1a093f] font-urbanist font-medium text-lg">
              Blogs
            </span>
            <span className="text-[#1a093f] font-urbanist font-medium text-lg">
              Contact Us
            </span>
          </div>

          {/* Contact Button */}
          <button className="bg-[#f15a29] text-white font-urbanist font-bold text-lg px-4 md:px-9 py-[9px] rounded-[25px] hover:bg-[#d94d1f] transition-colors">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;