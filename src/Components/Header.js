import React from 'react';

const Header = () => {
  return (
    <header className="bg-[#232F3E] h-32 flex items-center justify-center">
      <nav>
        <img
          className="max-h-32 cursor-pointer"
          alt="amazon"
          src="https://m.media-amazon.com/images/G/01/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_us-main._CB468775337_.png"
        />
      </nav>
    </header>
  );
};

export default Header;
