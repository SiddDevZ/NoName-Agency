import React from 'react';
import Layout from '.././components/Layout/layout';
import Footer from '../components/Footer';
import Card from '.././components/Card';
import Navbar from '.././components/Navbar';
import Button from '.././components/Button';
import Meetings from '../components/Meetings';
import Projects from '../components/Projects';

const Landing = () => {
  return (
    <>
      <div className="w-full bg-white   relative flex mx-auto">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center  bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]"></div>
        <main className=" z-20 mx-auto">
          <div className="bg-grid-black/[0.04] pt-5">
            <Navbar />
            <div className="pt-[6.9rem] text-center">
              <h1 className="font-serif lg:text-[5.3rem] md:text-[5rem] sm:text-[10vw] xs:text-[10.3vw] xss:text-[10.3vw] leading-[1.15]">
                Get Your Website
                <span className="block mt-0">
                  Built by{' '}
                  <span className="text-[#00982a] relative">Experts</span>
                </span>
              </h1>
              <h3 className="font-pop lg:text-[1rem] md:text-[0.8rem] sm:text-[0.8rem] xs:text-[2.3vw] xss:text-[2.2vw] font-semibold tracking-[0.05em] lg:mt-[1.1rem] md:mt-[0.95vh] sm:mt-[1.5vh] xss:mt-[1.35vh] text-center text-[#383838]">
                We create beautiful, fast websites that are designed to <br />{' '}
                elevate your brand and engage your audience.
              </h3>
              <div className="space-x-2 xs:space-x-3 sm:space-x-4 md:mt-6 sm:mt-5 xss:mt-3">
                <button className="px-[4.5vw] py-[1.7vw] xs:px-[4.2vw] xs:py-[1.5vw] sm:px-[2rem] sm:py-[0.6rem] md:px-[2.5rem] md:py-[0.7rem] lg:px-[2.15rem] lg:py-[0.6rem] bg-[#158928] border border-[#158928] transition-all hover:scale-[1.03] hover:bg-[#1e802e] hover:border-[#1e802e] text-white text-[3.5vw] xs:text-[3vw] sm:text-[1rem] md:text-[1.2rem] font-pop font-medium rounded-full">
                  Inquire Now
                </button>
                <button className="px-[4.5vw] py-[1.7vw] xs:px-[4.2vw] xs:py-[1.5vw] sm:px-[2rem] sm:py-[0.6rem] md:px-[2.5rem] md:py-[0.7rem] lg:px-[2.15rem] lg:py-[0.6rem] border border-black text-black text-[3.5vw] xs:text-[3vw] sm:text-[1rem] md:text-[1.2rem] font-pop hover:scale-[1.03] font-medium rounded-full backdrop-filter backdrop-blur-sm transition-all hover:bg-black hover:bg-opacity-[0.03]">
                  View Projects
                </button>
              </div>
              <h5 className="sm:mt-3 xss:mt-1.5 sm:text-sm xss:text-xs leading-5 opacity-50 italic">
                No Signup needed, No subscription required.
              </h5>
              <div className="flex justify-center items-center sm:mt-8 xss:mt-5 space-x-8 opacity-90 sm:space-x-4 xs:space-x-3 xss:space-x-2.5">
                <img
                  src="google.png"
                  alt="Google Logo"
                  className="h-12 w-auto sm:h-10 xs:h-[8vw] xss:h-[8vw]"
                />
                <img
                  src="buzz.png"
                  alt="Buzz Logo"
                  className="h-24 w-auto sm:h-20 xs:h-[16vw] xss:h-[14vw]"
                />
                <img
                  src="mit.png"
                  alt="MIT Logo"
                  className="h-8 w-auto sm:h-7 xs:h-[5vw] xss:h-[4.6vw]"
                />
                <img
                  src="forbes.png"
                  alt="Forbes Logo"
                  className="h-10 w-auto sm:h-8 xs:h-[6vw] xss:h-[6vw]"
                />
              </div>
            </div>
          </div>

          <div className="mt-96 mb-96 md:w-[80vw] sm:w-[90vw] xss:w-[95vw] mx-auto max-w-[1920px] mx-auto">
            <h2 className="border-[1.5px] px-4 font-normal py-1.5 rounded-3xl border-black font-pop text-lg w-auto inline-block">
              About Us
            </h2>
            <div className="mt-4 flex w-full">
              <div className="w-[50%]">
                <h2 className="font-serif text-[3.1rem] leading-[1.15]">
                  Creating Websites That <br /> Increase Your Sales
                </h2>
                <div className="flex items-center space-x-4 mt-6">
                  <div className="flex -space-x-4">
                    {[1, 2, 3].map((index) => (
                      <div
                        key={index}
                        className="w-12 h-12 rounded-full overflow-hidden"
                      >
                        <img
                          src="icon-park_attention.png"
                          alt="User avatar"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="h-9 w-[1.15px] bg-black opacity-50"></div>
                  <div>
                    <div className="flex text-[#ffac33]">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm font-medium text-black">
                      loved by founders worldwide
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[50%]">
                <p className="font-pop text-[1.04rem] tracking-[-0.002em] leading-[1.45rem]">
                  We specialize in designing and developing stunning websites
                  that are optimized to drive conversions. By blending
                  creativity with strategic design, we turn visitors into loyal
                  customers. Our journey began with a simple mission, to deliver
                  high quality development at affordable prices.
                </p>
                <button className="px-[1.42rem] mt-5 py-[0.4rem] bg-[#158928] border border-[#158928] transition-all hover:scale-[1.03] hover:bg-[#1e802e] hover:border-[#1e802e] text-white text-base font-pop font-medium rounded-full">
                  Let's Chat
                </button>
              </div>
            </div>
          </div>
          <Projects />
          <Footer />
        </main>
      </div>
    </>
  );
};

export default Landing;
