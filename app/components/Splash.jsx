'use client'
import React from 'react'

const Splash = () => {
  const employerPage = () =>{
    window.location.href = '../employer';
  }
  return (
    <div className='image flex flex-col gap-10 items-center justify-center'>
      <div>
        <p className='text-center font-bold text-[60px] leading-tight text-white'>Where Top Freelancers & <br />Ambitious <span className='text-blue-500'>Employers Connect</span></p>
        <p className='text-center leading-tight text-white'>Your go to platform for hiring trusted freelancers  or finding quality gigs- fast, easy and secure</p>
      </div>
      <div>
        <button className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600 transition-all duration-300'>Explore Jobs</button>
      </div>

    </div>
  )
}

export default Splash