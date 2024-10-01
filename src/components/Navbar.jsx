import React, { useState, useEffect } from 'react';
import 'remixicon/fonts/remixicon.css'

const Navbar = ({ redirect, proj }) => {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="w-full text-gray-800 dark:text-gray-200 rounded-2xl h-14 p-2 flex justify-between items-center px-8 font-['Inter'] md:w-[80vw] sm:w-[90vw] xss:w-[95vw] mx-auto sm:bg-white/10 sm:backdrop-filter sm:backdrop-blur-3xl sm:border dark:sm:bg-gray-800/10 dark:sm:border-[#676767]">
      <span className="flex items-center space-x-3 group">
        <img
          src="./ph_shower-bold.png"
          alt="Luvo logo"
          className="w-8 h-8 transition-transform duration-300 group-hover:rotate-12 xs:w-7 xs:h-7 xss:w-6 xss:h-6 dark:invert"
        />
        <h1 className="text-2xl unselectable font-bold tracking-tight xs:text-xl xss:text-lg dark:text-white">Luvo Web</h1>
      </span>

      <div className="text-lg flex lg:gap-12 gap-8 sm:flex xss:hidden">
        <a href="/" className="hover:text-[#00982a] dark:hover:text-[#00ff47] transition-colors duration-200 cursor-pointer">Home</a>
        <a onClick={() => proj()} className="hover:text-[#00982a] dark:hover:text-[#00ff47] transition-colors duration-200 cursor-pointer">Projects</a>
        <a href="/blog" className="hover:text-[#00982a] dark:hover:text-[#00ff47] transition-colors duration-200 cursor-pointer">Blog</a>
      </div>
      <div className='flex align-middle gap-2'>
        <button onClick={toggleDarkMode} className='h-[2.7rem] w-[2.7rem] border border-[#1a1a1a4f] dark:border-[#e8e8e84f] transition-all hover:border-[#262626] hover:dark:border-[#dbdbdb] rounded-full'>
          <i class="ri-sun-line text-2xl"></i>
        </button>
        <button onClick={() => redirect()} className="rounded-full h-[2.7rem] px-8 text-[#00982a] dark:text-[#00ff47] hover:text-white dark:hover:text-[#00ff47] hover:bg-green-500 dark:hover:bg-[#0a5b28] transition-all duration-300 text-lg bg-[rgb(0,187,52,0.12)] dark:bg-[rgba(0,255,71,0.12)] focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 focus:ring-opacity-50 xs:text-base xs:px-6 xss:text-sm xss:px-5">
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;