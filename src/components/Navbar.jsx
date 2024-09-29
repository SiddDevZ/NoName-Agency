import React from 'react';

const Navbar = ({ redirect, proj }) => {
  return (
    <nav className="w-full text-gray-800 rounded-2xl h-14 p-2 flex justify-between items-center px-8 font-['Inter'] md:w-[80vw] sm:w-[90vw] xss:w-[95vw] mx-auto sm:bg-white/10 sm:backdrop-filter sm:backdrop-blur-3xl sm:border">
      <span className="flex items-center space-x-3 group">
        <img
          src="./ph_shower-bold.png"
          alt="masked logo"
          className="w-8 h-8 transition-transform duration-300 group-hover:rotate-12 xs:w-7 xs:h-7 xss:w-6 xss:h-6"
        />
        <h1 className="text-2xl unselectable font-bold tracking-tight xs:text-xl xss:text-lg">Masked</h1>
      </span>

      <div className="text-lg flex lg:gap-12 gap-8 sm:flex xss:hidden">
        <a href="/" className="hover:text-green-400 transition-colors duration-200 cursor-pointer">Home</a>
        <a onClick={() => proj()} className="hover:text-green-400 transition-colors duration-200 cursor-pointer">Projects</a>
        <a href="/blog" className="hover:text-green-400 transition-colors duration-200 cursor-pointer">Blog</a>
      </div>

      <button onClick={() => redirect()} className="rounded-full py-2 px-8 text-[#00982a] hover:text-white hover:bg-green-500 transition-all duration-300 text-lg bg-[rgb(0,187,52,0.12)] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 xs:text-base xs:px-6 xss:text-sm xss:px-5">
        Contact
      </button>
    </nav>
  );
};

export default Navbar;
