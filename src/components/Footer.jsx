import React from 'react';

const Footer = () => {
  return (
    <div className="font-[poppins] md:w-[85vw] sm:w-[90vw] xss:w-[92.5vw] mx-auto flex flex-col justify-between gap-[47px] pb-16">
      <div className="space-y-[47px] border-b border-black/30 pb-4">
        <div className="flex xs:flex-row flex-col w-full xs:justify-between">
          <h3 className="2xl:text-[50px] lg:text-[40px] md:text-[32px] text-[26px] tracking-tighter sm:leading-[4rem] font-serif w-fit">
            We Don't Just Build <br />
            Websites, <span className="text-[#00982a]">We Build Dreams</span>
          </h3>
          <nav className=" lg:gap-6 md:gap-2 hidden xs:flex">
            <img
              src="mdi_linkedin.png"
              alt=""
              className="2xl:h-[50px] md:h-[50px] h-[40px] w-auto brightness-50"
            />
            <img
              src="mdi_github.png"
              alt=""
              className="2xl:h-[50px] md:h-[50px] h-[40px] w-auto"
            />
            <img
              src="ic_outline-discord.png"
              alt=""
              className="2xl:h-[50px] md:h-[50px] h-[40px] w-auto brightness-50"
            />
          </nav>
        </div>
        <div className="font-[poppins] w-full flex justify-between">
          <div className="xs:space-y-2">
            <p className="font-medium 2xl:text-[16px] text-[12px] text-black/60">
              Email us:
            </p>
            <p className="2xl:text-[24px] xs:text-[18px] text-[16px]">
              hello@masked.com
            </p>
          </div>
          <div className="xs:gap-4 gap-1 items-center hidden xs:flex">
            <img
              src="ph_shower-bold.png"
              alt=""
              className="2xl:h-[40px] xs:h-[35px] h-[30px]"
            />
            <p className="2xl:text-[28px] sm:text-[23px] xs:text-[22px] text-[20px] xs:tracking-normal tracking-tighter font-semibold">
              Masked
            </p>
          </div>
          <nav className="flex xs:hidden gap-2">
            <img
              src="mdi_linkedin.png"
              alt=""
              className="2xl:h-[54px] md:h-[50px] h-[33px] w-auto brightness-50"
            />
            <img
              src="mdi_github.png"
              alt=""
              className="2xl:h-[54px] md:h-[50px] h-[33px] w-auto"
            />
            <img
              src="ic_outline-discord.png"
              alt=""
              className="2xl:h-[54px] md:h-[50px] h-[33px] w-auto brightness-50"
            />
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;
