'use client'
import React, { useState } from 'react'

const Talent = () => {
  const [searchQuery, setSearchQuery] = useState('')
  
  // Sample talent data
  const talents = [
    {
      id: 1,
      name: 'Ogidi',
      role: 'Web Developer',
      skills: ['React', 'Node.js', 'MongoDB'],
      rating: 4.8,
      projects: 25,
      image: '/images/freelancer.jpg'
    },
    {
      id: 2,
      name: 'Mr. Asare',
      role: 'UI/UX Designer',
      skills: ['Figma', 'Adobe XD', 'Photoshop'],
      rating: 4.9,
      projects: 18,
      image: '/images/freelancer.jpg'
    },
    {
      id: 3,
      name: 'Twum',
      role: 'Mobile Developer',
      skills: ['React Native', 'Flutter', 'Swift'],
      rating: 4.7,
      projects: 32,
      image: '/images/freelancer.jpg'
    },
    {
      id: 4,
      name: 'Kwame',
      role: 'Web Developer',
      skills: ['React', 'Node.js', 'MongoDB'],
      rating: 4.8,
      projects: 25,
      image: '/images/freelancer.jpg'
    },
    {
      id: 5,
      name: 'Kwame',
      role: 'Web Developer',
      skills: ['React', 'Node.js', 'MongoDB'],
      rating: 4.8,
      projects: 25,
      image: '/images/freelancer.jpg'
    },
    {
      id: 6,
      name: 'Kwame',
      role: 'Web Developer',
      skills: ['React', 'Node.js', 'MongoDB'],
      rating: 4.8,
      projects: 25,
      image: '/images/freelancer.jpg'
    }   
  ]

  const filteredTalents = talents.filter(talent => 
    talent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    talent.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    talent.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  return (
    <div id='talent' className='min-h-screen p-10 m-20'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-4xl font-bold text-center mb-8'>Find Top Freelancers</h2>
        
        {/* Search Bar */}
        <div className='mb-8'>
          <input
            type='text'
            placeholder='Search by name, role, or skills...'
            className='w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Talent Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredTalents.map(talent => (
            <div key={talent.id} className='bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300'>
              <div className='flex items-center mb-4'>
                <div className='relative w-16 h-16 mr-4'>
                  <img
                    src={talent.image}
                    alt={talent.name}
                    className='w-full h-full rounded-full object-cover border-2 border-gray-200'
                  />
                </div>
                <div>
                  <h3 className='text-xl font-semibold'>{talent.name}</h3>
                  <p className='text-gray-600'>{talent.role}</p>
                </div>
              </div>
              
              <div className='flex flex-wrap gap-2 mb-4'>
                {talent.skills.map((skill, index) => (
                  <span key={index} className='bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm'>
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                  <span className='text-yellow-500 mr-1'>★</span>
                  <span>{talent.rating}</span>
                </div>
                <span className='text-gray-600'>{talent.projects} projects</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Talent