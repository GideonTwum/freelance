'use client'
import React from 'react'
import { MdGridView } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { MdOutlineUpdate } from "react-icons/md";
import { MdOutlineTrackChanges } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { useRouter } from 'next/navigation';
import Nav from '../components/Nav';
import Find from '../components/Find';

const FreelancerPage = () => {
    const router = useRouter()
    const logout = () => {
        router.push('/')
    }
  return (
    <div className="min-h-screen flex bg-gray-50">
      <Nav />
      <Find />
    </div>
  )
}

export default FreelancerPage 