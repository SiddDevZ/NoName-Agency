import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full bg-black bg-opacity-[0.03] backdrop-blur-md rounded-xl h-[3.646vw] p-1 flex justify-between items-center px-6 font-[inter]">
      <span className="space-x-[0.6rem] flex items-center font-semibold">
        <img src="./ph_shower-bold.png" alt="masked logo" className='w-[1.771vw]' />
        <h1 className="text-[1.458vw] leading-8">Masked</h1>
      </span>

      <div className="text-[1.302vw] flex lg:gap-[3.646vw] gap-6">
        <a href="/">Home</a>
        <a href="#projects">Projects</a>
        <a href="/blog">Blog</a>
      </div>

      <button className="rounded-full py-[0.208vw] px-[1.563vw] text-[#00982a] text-[1.406vw] bg-[rgb(0,187,52,0.12)]">
        Contact
      </button>
    </nav>
  );
};

export default Navbar;
