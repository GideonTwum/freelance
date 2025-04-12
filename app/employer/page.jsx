'use client'
import React, { useState } from 'react'
import { IoMdLogOut } from "react-icons/io";
import { useRouter } from 'next/navigation';
import { MdPostAdd } from "react-icons/md";
import { MdOutlineRateReview } from "react-icons/md";
import { MdOutlineManageHistory } from "react-icons/md";    
import { MdOutlineTrackChanges } from "react-icons/md";
import PostJobs from '../components/PostJobs';
import ReviewApplications from '../components/ReviewApplications';
import ManageProjects from '../components/ManageProjects';
import TrackBudgets from '../components/TrackBudgets';

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
            case 'reviewApplications':
                return <ReviewApplications />
            case 'manageProjects':
                return <ManageProjects />
            case 'trackBudgets':
                return <TrackBudgets />
            default:
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
                    <div onClick={() => assignPage('postJob')} className='cursor-pointer p-2 rounded-lg hover:bg-blue-100 flex gap-2 items-center'>
                        <MdPostAdd />
                        <p>Post new job listings</p>
                    </div>
                    <div onClick={() => assignPage('reviewApplications')} className='cursor-pointer p-2 rounded-lg hover:bg-blue-100 flex gap-2 items-center'>
                        <MdOutlineRateReview />
                        <p>Review freelancer applications</p>   
                    </div>
                    <div onClick={() => assignPage('manageProjects')} className='cursor-pointer p-2 rounded-lg hover:bg-blue-100 flex gap-2 items-center'>
                        <MdOutlineManageHistory />
                        <p>Manage active projects</p>
                    </div>
                    <div onClick={() => assignPage('trackBudgets')} className='cursor-pointer p-2 rounded-lg hover:bg-blue-100 flex gap-2 items-center'>
                        <MdOutlineTrackChanges />
                        <p>Track project budgets</p>
                    </div>
                </div>
                <div className='flex gap-2 items-center cursor-pointer hover:bg-red-100 p-2 rounded-lg' onClick={() => logout()}>
                    <IoMdLogOut />
                    <button className='text-sm '>Logout</button>
                </div>
            </div>

            <div className='w-3/4 p-10'>
                {renderedPages()}
            </div>
        </div>
    )
}

export default EmployerPage