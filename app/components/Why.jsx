import Image from 'next/image'
import React from 'react'

const Why = () => {
  return (
    <div className='h-screen flex items-center justify-center' id='Why'>
        <div>
            <Image width={500} height={500} src='/images/freelancer.jpg' alt='freelancer' className='rounded-xl'/>
        </div>
        <div className='p-10 flex flex-col gap-2'>
            <p className='text-green-500 font-bold text-5xl'>Why Us?</p>
            <p className='leading-loose'>Our platform is designed to make freelancing easy, <br />from job discovery to payment processing. We connect  <br />you with serious clients who value your skills and pay fairly. <br />Get paid on time with  our secure and transparent <br />payment system,  Showcase your work effortlessly and attract top <br /> clients.</p>
            <a href="" className='text-green-500'>Learn more</a>
        </div>
    </div>
  )
}

export default Why