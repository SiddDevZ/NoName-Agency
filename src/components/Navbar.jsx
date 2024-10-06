import React, { useState, useEffect } from 'react';
import 'remixicon/fonts/remixicon.css'

const Navbar = ({ redirect, proj }) => {

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true' || false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="w-full text-gray-800 dark:text-gray-200 rounded-2xl h-14 p-2 flex justify-between items-center px-8 font-['Inter'] md:w-[80vw] sm:w-[90vw] xss:w-[95vw] mx-auto sm:bg-white/10 sm:backdrop-filter sm:backdrop-blur-3xl sm:border dark:sm:bg-gray-800/10 dark:sm:border-[#676767]">
      {/* <img src="./logo.webp" alt="Logo" className="h-[60%] w-auto object-contain" /> */}
      <h2 className="text-2xl font-black opacity-55 ">
        <span className="text-red-500">L</span>
        <span className="text-blue-500">U</span>
        <span className="text-green-500">V</span>
        <span className="text-orange-500">O</span>
      </h2>

      <div className="text-lg flex lg:gap-12 gap-8 sm:flex xss:hidden">
        <a href="/" className="hover:text-[#00982a] dark:hover:text-[#00ff47] transition-colors duration-200 cursor-pointer">Home</a>
        <a onClick={() => proj()} className="hover:text-[#00982a] dark:hover:text-[#00ff47] transition-colors duration-200 cursor-pointer">Projects</a>
        <a href="/blog" className="hover:text-[#00982a] dark:hover:text-[#00ff47] transition-colors duration-200 cursor-pointer">Blog</a>
      </div>
      <div className='flex align-middle gap-2'>
        <button onClick={toggleDarkMode} className='h-[2.7rem] w-[2.7rem] border border-[#1a1a1a4f] dark:border-[#e8e8e84f] transition-all hover:border-[#262626] hover:dark:border-[#dbdbdb] rounded-full'>
          <i className={`ri-${darkMode ? 'sun-line' : 'moon-line'} text-2xl`}></i>
        </button>
        <button onClick={() => redirect()} className="rounded-full xss:hidden sm:block h-[2.7rem] px-8 text-[#00982a] dark:text-[#00ff47] hover:text-white dark:hover:text-[#00ff47] hover:bg-green-500 dark:hover:bg-[#0a5b28] transition-all duration-300 text-lg bg-[rgba(0,187,53,0.15)] dark:bg-[rgba(0,255,71,0.12)] focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 focus:ring-opacity-50 xs:text-base xs:px-6 xss:text-sm xss:px-5">
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;