'use client'
import React, { act, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import Web from './Web';
import Graphic from './Graphic';
import Writing from './Writing';

const Find = () => {
  const [activePage, setActivePage] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const assignActivePage = (getValue) =>{
      setActivePage(getValue)
  }

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  }

  const renderPages = () =>{
    switch (activePage) {
      case 'Web developement':
      return <Web searchQuery={searchQuery} />
      case 'Graphic Designing':
      return <Graphic searchQuery={searchQuery} /> 
      case 'Writing':
      return <Writing searchQuery={searchQuery} />
      default:
        return <Web searchQuery={searchQuery} />
    }
  }
  
  return (
    <div className=' p-30 h-screen flex flex-col  ' id='Find'>
    
        <div>
            <p className='font-bold text-xl text-blue-600'>Find Your Desired Job</p>
        </div>
        <div className='bg-transparent ring-1 ring-gray-300 h-10  flex items-center p-4 w-[60vw] lg:w-[80vw] rounded-md'>
            <input 
              type="text" 
              placeholder='search jobs here..' 
              className='outline-none w-[80vw]'
              value={searchQuery}
              onChange={handleSearch}
            />
            <CiSearch />
        </div>
      <div className='flex flex-col'>
      <div className='mt-10  flex flex-wrap items-center justify-center gap-10'> 
            <div 
              onClick={()=>assignActivePage('Web developement')} 
              className={`w-40 p-2 rounded-lg cursor-pointer ${activePage === 'Web developement' ? 'bg-blue-700 text-white' : 'bg-blue-400  '}`}
            >
              <p className='text-center text-sm sm:text-base'>Web Development</p>
            </div>
            <div 
              onClick={()=>setActivePage('Graphic Designing')}  
              className={`w-40 p-2 rounded-lg cursor-pointer ${activePage === 'Graphic Designing' ? 'bg-blue-700 text-white' : 'bg-blue-400  '}`}
            >
              <p className='text-center text-sm sm:text-base'>Graphic Designing</p>
            </div>
            <div 
              onClick={()=>setActivePage('Writing')}  
              className={`w-40 p-2 rounded-lg cursor-pointer ${activePage === 'Writing' ? 'bg-blue-700 text-white' : 'bg-blue-400  '}`}
            >
              <p className='text-center text-sm sm:text-base'>Writing</p>
            </div>
        </div>

        {/* Rendered Pages */}
        <div className='w-[80vw] items-center justify-center '>
              {renderPages()}
        </div>
      </div>
        
    </div>
  )
}

export default Find