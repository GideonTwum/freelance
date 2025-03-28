import React from 'react'

const Jobs = ({jobTitle, desc, bookmark, stack}) => {
  return (
    <div className="bg-white rounded-lg flex flex-col justify-between shadow-md h-70 p-4 w-70 mt-4 mb-4 hover:shadow-lg transition-shadow">
        <div className="flex justify-between items-start">
            <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{jobTitle}</h2>
                <p className="text-gray-600 text-sm">{desc}</p>
                <div>
                  <p className='text-green-800 text-sm '>{stack}</p>
                </div>
            </div>
            <div className="ml-4">
                <button className="text-blue-500 cursor-pointer hover:text-blue-600">
                    {bookmark}
                </button>
            </div>
        </div>
        <div>
          <button className='bg-green-300 text-sm h-10 w-30 cursor-pointer hover:bg-green-500 rounded-md'>Apply</button>
        </div>
    </div>
  )
}

export default Jobs