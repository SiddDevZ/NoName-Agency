import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full bg-[#FBFBFB] rounded-xl h-16 p-1 shadow-[inset_0px_0px_20px_#F0F0F0] flex justify-between items-center px-6 font-[inter]">
      <span className="space-x-[13px] flex items-center font-semibold">
        <img src="./ph_shower-bold.png" alt="masked logo" />
        <h1 className="text-[26px]">Masked</h1>
      </span>
      <ul className="text-[22px] flex lg:gap-16 gap-6">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
      </ul>
      <button className="rounded-full py-1 px-6 text-[#00982a] text-[22px] bg-[rgb(0,187,52,0.12)]">
        Contact
      </button>
    </nav>
  );
};

export default Navbar;
