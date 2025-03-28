import React from 'react'
import { FaBriefcase, FaUserTie, FaChartLine } from 'react-icons/fa'

const EmployerDashboard = () => {
  return (
    <div className="p-6 bg-gray-50">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Overview</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div className='bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Active Jobs</p>
              <h2 className="text-2xl font-semibold mt-2">24</h2>
              <p className="text-green-500 text-sm mt-2">↑ 12% from last month</p>
            </div>
            <div className="bg-blue-100 p-4 rounded-full">
              <FaBriefcase className="text-blue-600 text-xl" />
            </div>
          </div>
        </div>

        <div className='bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Applicants</p>
              <h2 className="text-2xl font-semibold mt-2">156</h2>
              <p className="text-green-500 text-sm mt-2">↑ 8% from last month</p>
            </div>
            <div className="bg-purple-100 p-4 rounded-full">
              <FaUserTie className="text-purple-600 text-xl" />
            </div>
          </div>
        </div>

        <div className='bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Interview Scheduled</p>
              <h2 className="text-2xl font-semibold mt-2">32</h2>
              <p className="text-green-500 text-sm mt-2">↑ 15% from last month</p>
            </div>
            <div className="bg-green-100 p-4 rounded-full">
              <FaChartLine className="text-green-600 text-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployerDashboard