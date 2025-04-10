import React from 'react'
import Jobs from './Jobs'
import { CiBookmark } from "react-icons/ci";

const Web = ({ searchQuery }) => {
  const jobs = [
    {
      jobTitle: 'Frontend Developer',
      desc: 'Building responsive web applications using modern frameworks',
      stack: 'React.js, TypeScript, Tailwind CSS',
      budget: '5000',
      deadline: '2024-03-31',
      company: 'TechCorp Inc.',
      location: 'Remote'
    },
    {
      jobTitle: 'UI/UX Developer',
      desc: 'Creating intuitive user interfaces and seamless user experiences',
      stack: 'Figma, React.js, CSS3',
      budget: '4500',
      deadline: '2024-04-15',
      company: 'DesignHub',
      location: 'New York'
    },
    {
      jobTitle: 'Full Stack Developer',
      desc: 'Developing full-stack web applications with modern technologies',
      stack: 'Next.js, Node.js, MongoDB',
      budget: '6000',
      deadline: '2024-04-30',
      company: 'WebSolutions',
      location: 'Remote'
    },
    {
      jobTitle: 'React Native Developer',
      desc: 'Building cross-platform mobile applications',
      stack: 'React Native, Redux, JavaScript',
      budget: '5500',
      deadline: '2024-04-20',
      company: 'MobileFirst',
      location: 'San Francisco'
    }
  ];

  const filteredJobs = jobs.filter(job => {
    const searchLower = searchQuery.toLowerCase();
    return (
      job.jobTitle.toLowerCase().includes(searchLower) ||
      job.desc.toLowerCase().includes(searchLower) ||
      job.stack.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className=''>
      <div className='h-auto grid gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-20 p-4'>
        {filteredJobs.map((job, index) => (
          <Jobs 
            key={index}
            jobTitle={job.jobTitle}
            desc={job.desc}
            stack={job.stack}
            budget={job.budget}
            deadline={job.deadline}
            company={job.company}
            location={job.location}
            bookmark={<CiBookmark />}
          />
        ))}
      </div>
    </div>
  )
}

export default Web