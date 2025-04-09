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
    },
    {
      jobTitle: 'Web Performance Engineer',
      desc: 'Optimizing web applications for maximum performance',
      stack: 'React.js, Webpack, Performance Tools',
      budget: '5200',
      deadline: '2024-04-10',
      company: 'SpeedTech',
      location: 'Remote'
    },
    {
      jobTitle: 'Frontend Architect',
      desc: 'Designing scalable frontend architecture and best practices',
      stack: 'React.js, TypeScript, Design Systems',
      budget: '7000',
      deadline: '2024-05-01',
      company: 'ArchTech',
      location: 'Boston'
    },
    {
      jobTitle: 'JavaScript Developer',
      desc: 'Developing interactive web applications',
      stack: 'JavaScript, HTML5, CSS3',
      budget: '4500',
      deadline: '2024-04-25',
      company: 'CodeCraft',
      location: 'Remote'
    },
    {
      jobTitle: 'Frontend Team Lead',
      desc: 'Leading frontend development team and projects',
      stack: 'React.js, Next.js, Team Management',
      budget: '8000',
      deadline: '2024-05-15',
      company: 'LeadDev',
      location: 'Chicago'
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
    <div className='h-auto grid gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-20'>
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
  )
}

export default Web