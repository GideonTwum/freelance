'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { FaMapMarkerAlt, FaDollarSign, FaCalendarAlt, FaBuilding, FaCode } from 'react-icons/fa'

const JobDetailsPage = () => {
  const router = useRouter()
  
  // Mock job data - in a real app, this would come from an API or database
  const jobDetails = {
    title: "Senior Full Stack Developer",
    company: "TechCorp Inc.",
    location: "Remote",
    budget: "5000",
    deadline: "2024-06-30",
    description: "We are looking for an experienced Full Stack Developer to join our team. The ideal candidate will have strong experience with React, Node.js, and modern web development practices.",
    stack: "React, Node.js, MongoDB"
  }

  const handleApply = () => {
    // Here you would typically handle the application process
    alert('Application submitted successfully!')
    router.push('/freelancer')
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{jobDetails.title}</h1>
                <div className="flex items-center text-gray-600 mb-4">
                  <FaBuilding className="mr-2" />
                  <span>{jobDetails.company}</span>
                </div>
              </div>
              <button
                onClick={handleApply}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
              >
                Apply Now
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center text-gray-600">
                <FaMapMarkerAlt className="mr-2" />
                <span>{jobDetails.location}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <FaDollarSign className="mr-2" />
                <span>Budget: ${jobDetails.budget}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <FaCalendarAlt className="mr-2" />
                <span>Deadline: {jobDetails.deadline}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <FaCode className="mr-2" />
                <span>Tech Stack: {jobDetails.stack}</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Job Description</h2>
              <p className="text-gray-600 whitespace-pre-line">{jobDetails.description}</p>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Requirements</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Proficiency in {jobDetails.stack}</li>
                <li>Strong problem-solving skills</li>
                <li>Excellent communication abilities</li>
                <li>Ability to work independently and meet deadlines</li>
              </ul>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">How to Apply</h2>
              <p className="text-gray-600 mb-4">
                To apply for this position, click the "Apply Now" button above. Make sure your profile is up to date with your latest skills and experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobDetailsPage
