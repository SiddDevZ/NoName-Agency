import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full bg-black bg-opacity-[0.03] backdrop-blur-md rounded-xl h-14 p-1 flex justify-between items-center px-6 font-[inter]">
      <span className="space-x-[0.6rem] flex items-center font-semibold">
        <img src="./ph_shower-bold.png" alt="masked logo" className='w-[1.9rem]' />
        <h1 className="text-2xl">Masked</h1>
      </span>

      <div className="text-[21px] flex lg:gap-16 gap-6">
        <a href="/">Home</a>
        <a href="#projects">Projects</a>
        <a href="/blog">Blog</a>
      </div>

      <button className="rounded-full py-1 px-6 text-[#00982a] text-[22px] bg-[rgb(0,187,52,0.12)]">
        Contact
      </button>
    </nav>
  );
};

export default Navbar;
