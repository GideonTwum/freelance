'use client'
import React, { useState } from 'react'
import EmployerDashboard from '../components/EmployerDashboard';
import CreatedJobs from '../components/CreatedJobs';

const page = () => {
    const [activePage, setActivePage] = useState(false);
    const assignActivePage = (getValue) => {
        setActivePage(getValue)
    }
    const renderPages = () => {
        switch (activePage) {
            case 'dashboard':
                return <EmployerDashboard />;
            case 'view':
                return <CreatedJobs />;
            default:
                return <EmployerDashboard />;
        }
    }
  return (
    <div className='flex h-screen'>
        {/* sidebar */}
        <div className='h-auto w-80 flex flex-col gap-8 p-10 bg-[#FAFDF9] '>
            <div>
                <h1 className='text-xl font-bold'>DASHBOARD</h1>
            </div>
            <div>
                <div onClick={()=>assignActivePage('dashboard')} className='cursor-pointer text-sm hover:bg-green-400 rounded-sm p-2'>
                    <p>Dashboard</p>
                </div>
                <div onClick={()=>assignActivePage('view')} className='cursor-pointer text-sm hover:bg-green-400 rounded-sm p-2'>
                    <p>View Jobs</p>
                </div>
            </div>  
        </div>


            {/* rendered pages */}
        <div className='bg-[#818181]/10 p-20 w-screen'>
                {renderPages()}
        </div>
    </div>
  )
}

export default page