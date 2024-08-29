import React from "react";
import Layout from ".././components/Layout/layout";
import Card from ".././components/Card";
import Navbar from ".././components/Navbar";
import Button from ".././components/Button";

const Landing = () => {
  return (
    <>
      <div className="h-[50rem] w-full  bg-white  bg-grid-black/[0.04] relative flex">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center  bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]"></div>
        <main className="w-[90vw] z-20 md:w-[80vw] max-w-[1920px] mx-auto pt-5">
          <Navbar />
          <div className="pt-[6.9rem] text-center">
            <h1 className="font-serif text-[5.4vw] leading-[1.15]">
              Get Your Website
              <span className="block mt-0">
                Built by{" "}
                <span className="text-[#00982a] relative">Experts</span>
              </span>
            </h1>
            <h3 className="font-pop text-[1vw] font-semibold tracking-[0.05em] mt-[3vh] text-center text-[#383838]">
              We create beautiful, fast websites that are designed to <br />{" "}
              elevate your brand and engage your audience.
            </h3>
            <div className="space-x-4 mt-6">
              <button className="px-[2.15rem] py-[0.6rem] bg-[#158941] border border-[#158941] transition-all hover:bg-[#127638] hover:border-[#127638] text-white text-lg font-pop font-medium rounded-full">
                Inquire Now
              </button>
              <button className="px-[2.15rem] py-[0.6rem] border border-black text-black text-lg font-pop font-medium rounded-full backdrop-filter backdrop-blur-sm transition-all hover:bg-black hover:bg-opacity-[0.03]">
                View Projects
              </button>
            </div>
            <h5 className="mt-3 text-sm leading-5 opacity-50 italic">No Signup needed, No subscription required.</h5>
 
          </div>
        </main>
      </div>
    </>
  );
};

export default Landing;
