'use client'
import React, { useState } from 'react'
import { IoMdLogOut } from "react-icons/io";
import { useRouter } from 'next/navigation';
import { MdPostAdd } from "react-icons/md";
import { MdOutlineRateReview } from "react-icons/md";
import { MdOutlineManageHistory } from "react-icons/md";    
import { MdOutlineTrackChanges } from "react-icons/md";
import PostJobs from '../components/PostJobs';

const EmployerPage = () => {
    const router = useRouter()
    const [page, setPage] = useState('postJob');
    const assignPage = (getValue) => {
        setPage(getValue)
    }


    const renderedPages = () => {
        switch (page) {
            case 'postJob':
                return <PostJobs />
        
            default :
                return <PostJobs />
                
        }
    }
    const logout = () => {
        router.push('/')
    }
  return (
    <div className="min-h-screen flex bg-gray-50">
      <div className='w-1/4 bg-[#ccc]/20 flex flex-col gap-10 p-10'>
        <div>
            <h1 className='font-bold text-2xl '>Employer Dashboard</h1>
        </div>
        <div>
            <div onClick={() => assignPage('postJob')} className='cursor-pointer p-2 rounded-lg hover:bg-green-100 flex gap-2 items-center'>
                <MdPostAdd />
                <p>Post new job listings</p>
            </div>
            <div className='cursor-pointer p-2 rounded-lg hover:bg-green-100 flex gap-2 items-center'>
                <MdOutlineRateReview />
                <p>Review freelancer applications</p>   
            </div>
            <div className='cursor-pointer p-2 rounded-lg hover:bg-green-100 flex gap-2 items-center'>
                <MdOutlineManageHistory />
                <p>Manage active projects</p>
            </div>
            <div className='cursor-pointer p-2 rounded-lg hover:bg-green-100 flex gap-2 items-center'>
                <MdOutlineTrackChanges />
                <p>Track project budgets</p>
            </div>
        </div>
        <div className='flex gap-2 items-center cursor-pointer hover:bg-red-100 p-2 rounded-lg' onClick={() => logout()}>
            <IoMdLogOut />
            <button className='text-sm '>Logout</button>
        </div>
      </div>

      {/* renderedPages */}
      <div className='w-3/4 p-10'>
        {renderedPages()}
      </div>
      {/* <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Welcome to your Employer Dashboard</h1>
              <p className="text-gray-600">
                This is your employer dashboard where you can:
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Post new job listings</li>
                <li>• Review freelancer applications</li>
                <li>• Manage active projects</li>
                <li>• Track project budgets</li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}

    </div>
  )
}

export default EmployerPage