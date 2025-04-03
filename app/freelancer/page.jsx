'use client'
import React from 'react'
import { MdGridView } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { MdOutlineUpdate } from "react-icons/md";
import { MdOutlineTrackChanges } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { useRouter } from 'next/navigation';

const FreelancerPage = () => {
    const router = useRouter()
    const logout = () => {
        router.push('/')
    }
  return (
    <div className="min-h-screen flex bg-gray-50">
    <div className='w-1/4 bg-[#ccc]/20 flex flex-col gap-10 p-10'>
        <div>
            <h1 className='font-bold text-2xl '>Freelancer Dashboard</h1>
        </div>
        <div className='flex flex-col gap-2'>
            <div className='cursor-pointer p-2 rounded-lg hover:bg-green-100 flex gap-2 items-center'>
                <MdGridView />
                <p>View and apply for available jobs</p>
            </div>
            <div className='cursor-pointer p-2 rounded-lg hover:bg-green-100 flex gap-2 items-center'>
                <MdManageAccounts />
                <p>Manage your active projects</p>
            </div>
            <div className='cursor-pointer p-2 rounded-lg hover:bg-green-100 flex gap-2 items-center'>
                <MdOutlineUpdate />
                <p>Update your profile and portfolio</p>
            </div>
            <div className='cursor-pointer p-2 rounded-lg hover:bg-green-100 flex gap-2 items-center'>
                <MdOutlineTrackChanges />
                <p>Track your earnings</p>
            </div>
        </div>
        <div className='flex gap-2 items-center cursor-pointer hover:bg-red-100 p-2 rounded-lg' onClick={() => logout()}>
            <IoMdLogOut />
            <button className='text-sm '>Logout</button>
        </div>
        
    </div>

    {/* renderedPages */}

      {/* <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 ">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Welcome to your Freelancer Dashboard</h1>
              <p className="text-gray-600">
                This is your freelancer dashboard where you can:
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• View and apply for available jobs</li>
                <li>• Manage your active projects</li>
                <li>• Update your profile and portfolio</li>
                <li>• Track your earnings</li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default FreelancerPage 