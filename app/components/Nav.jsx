import React from 'react'

const Nav = () => {
  return (
    <div className='flex items-center p-4 bg-white justify-between shadow-lg w-[100%] fixed '>
        <div className='flex p-5'>
            <h1 className='font-bold'>my</h1>
            <h1 className='font-bold text-green-500'>Freelance</h1>
        </div>

        <div className='flex items-center gap-15'>
            <a href="">Home</a>
            <a href="#Why">Why Us?</a>
            <a href="#Find">Find Work</a>
            <a href="">contact</a>
        </div>

        <div className='flex gap-2 '>
            <button className='hover:bg-green-500 h-10 w-20 cursor-pointer rounded-lg'>Login</button>
            <button className=' cursor-pointer bg-green-500 h-10 w-20 rounded-lg'>Signup</button>
        </div>
    </div>
  )
}

export default Nav