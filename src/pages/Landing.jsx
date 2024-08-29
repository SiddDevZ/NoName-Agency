import React from 'react'
import Layout from '.././components/Layout/layout';
import Card from '.././components/UI/Card';
import Navbar from '.././components/UI/Navbar';

const Landing = () => {
  return (
    <>
      <Layout>
        <Navbar />
        <div className="pt-40 text-center">
          <h1 className="font-serif text-[105px]">
            Get Your Website{' '}
            <span className="block">
              Built by{' '}
              <span className="text-[#00982a] text-shadow">Experts</span>
            </span>
          </h1>
        </div>
      </Layout>
    </>
  )
}

export default Landing
