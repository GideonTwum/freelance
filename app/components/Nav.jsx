'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
const Nav = () => {
  const router = useRouter()
  const toEmployer = () => {
    router.push('/signup')
  }
  return (
    <div className='flex items-center p-4 bg-white justify-between shadow-lg w-[100%] fixed '>
        <div className='flex p-5'>
            <h1 className='font-bold'>my</h1>
            <h1 className='font-bold text-green-500'>Freelance</h1>
        </div>

        <div className='flex items-center gap-15'>
            <a href="">Home</a>
            {/* <a href="#Why">Why Us?</a> */}
            <a href="#Find">Find Work</a>
            <a href="#contact">contact</a>
        </div>

        <div className='flex gap-2 '>
            <button onClick={()=>toEmployer()} className=' cursor-pointer bg-green-500 h-10 w-20 rounded-lg'>Signup</button>
        </div>
    </div>
  )
}

export default Nav