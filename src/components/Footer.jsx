import React from 'react';

const Footer = () => {
  return (
    <div className="font-[poppins] md:w-[80vw] sm:w-[90vw] xss:w-[95vw] mx-auto flex flex-col justify-between gap-[47px] pb-16">
      <div className="space-y-[47px] border-b border-black/30 pb-4">
        <div className="flex xs:flex-row flex-col w-full xs:justify-between">
          <h3 className="2xl:text-[58px] lg:text-[40px] md:text-[32px] text-[26px] tracking-tighter font-[libre] w-fit">
            We Don't Just Build <br />
            Websites, <span className="text-[#00982a]">We Build Dreams</span>
          </h3>
          <nav className="flex lg:gap-6 md:gap-2">
            <img
              src="mdi_linkedin.png"
              alt=""
              className="2xl:h-[74px] md:h-[50px] h-[40px] w-auto"
            />
            <img
              src="mdi_github.png"
              alt=""
              className="2xl:h-[74px] md:h-[50px] h-[40px] w-auto"
            />
            <img
              src="ic_outline-discord.png"
              alt=""
              className="2xl:h-[74px] md:h-[50px] h-[40px] w-auto"
            />
          </nav>
        </div>
        <div className="font-[poppins] w-full flex justify-between">
          <div className="space-y-2">
            <p className="font-medium 2xl:text-[16px] text-[12px]">Email us:</p>
            <p className="2xl:text-[24px] xs:text-[18px] text-[16px]">
              hello@masked.com
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <img
              src="ph_shower-bold.png"
              alt=""
              className="2xl:h-[52px] xs:h-[40px] h-[30px]"
            />
            <p className="2xl:text-[32px] sm:text-[26px] xs:text-[22px] text-[20px] xs:tracking-normal tracking-tighter font-semibold">
              Masked
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
