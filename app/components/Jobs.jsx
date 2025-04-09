'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const Jobs = ({jobTitle, desc, bookmark, stack, budget, deadline, company, location}) => {
  const router = useRouter()

  const handleApply = () => {
    // Construct the URL with job details as query parameters
    const queryParams = new URLSearchParams({
      title: jobTitle,
      description: desc,
      stack: stack,
      budget: budget,
      deadline: deadline,
      company: company || 'Not specified',
      location: location || 'Remote'
    }).toString()

    router.push(`/jobDetails?${queryParams}`)
  }

  return (
    <div className="bg-white rounded-lg flex flex-col justify-between shadow-md h-90 p-4 w-70 mt-4 mb-4 hover:shadow-lg transition-shadow">
        <div className="flex justify-between items-start">
            <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{jobTitle}</h2>
                <p className="text-gray-600 text-sm mb-2">{desc}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">{stack}</span>
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">Budget: ${budget}</span>
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-sm">Deadline: {deadline}</span>
                </div>
            </div>
            <div className="ml-4">
                <button className="text-blue-500 cursor-pointer hover:text-blue-600">
                    {bookmark}
                </button>
            </div>
        </div>
        <div className="mt-4">
          <button 
            onClick={handleApply}
            className='bg-green-300 text-sm h-10 w-30 cursor-pointer hover:bg-green-500 rounded-md'
          >
            Apply
          </button>
        </div>
    </div>
  )
}

export default Jobs