'use client'
import React from 'react'

const Splash = () => {
  const employerPage = () =>{
    window.location.href = '../employer';
  }
  return (
    <div className='image flex flex-col gap-10 items-center justify-center'>
      <div>
        <p className='text-center font-bold text-[60px] leading-tight text-white'>Hello there, <br /> welcome to my Freelance</p>
        <p className='text-center leading-tight text-white'>Feel free to browse for jobs and talents</p>
      </div>
      <div className='flex gap-10'>
        <button className='bg-white h-10 w-30 rounded-md hover:bg-green-200 cursor-pointer'>Freelancer</button>
        <button onClick={()=> employerPage()} className='bg-white h-10 w-30 rounded-md hover:bg-green-200 cursor-pointer'>Employer</button>
      </div>
    </div>
  )
}

export default Splash