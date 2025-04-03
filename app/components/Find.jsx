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
    <div className=' p-30 h-100 flex flex-col ' id='Find'>
    
        <div>
            <p className='font-bold text-xl text-green-600'>Find Your Desired Job</p>
        </div>
        <div className='bg-[#818181]/10 h-10 flex items-center p-4 w-[80vw] rounded-md'>
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
      <div className='mt-10  flex items-center justify-center gap-10'> 
            <div onClick={()=>assignActivePage('Web developement')} className='bg-green-400 w-40 p-2 rounded-lg cursor-pointer'>
              <p className='text-center'>Web Development</p>
            </div>
            <div onClick={()=>setActivePage('Graphic Designing')}  className='bg-green-400 w-40 p-2 rounded-lg cursor-pointer'>
              <p className='text-center'>Graphic Designing</p>
            </div>
            <div onClick={()=>setActivePage('Writing')}  className='bg-green-400 w-40 p-2 rounded-lg cursor-pointer'>
              <p className='text-center'>Writing</p>
            </div>
        </div>

        {/* Rendered Pages */}
        <div>
              {renderPages()}
        </div>
      </div>
        
    </div>
  )
}

export default Find