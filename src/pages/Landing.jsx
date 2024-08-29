import React from 'react'
import Layout from '.././components/Layout/layout';
import Card from '.././components/UI/Card';
import Navbar from '.././components/UI/Navbar';

const Landing = () => {
  return (
    <>
      <div className="h-[50rem] w-full  bg-white  bg-grid-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center  bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <main className="w-[90vw] md:w-[80vw] max-w-[1920px] mx-auto">
            <Navbar />
            <div className="pt-[7.6rem] text-center">
              <h1 className="font-serif text-[5.5rem] leading-[1.15]">
                Get Your Website
                <span className="block mt-0">
                  Built by{' '}
                  <span className="text-[#00982a] relative">
                    Experts
                  </span>
                </span>
              </h1>
            </div>
        </main>
      </div>
    </>
  )
}

export default Landing
