import React from 'react'
import Jobs from './Jobs'
import { CiBookmark } from "react-icons/ci";

const Web = ({ searchQuery }) => {
  const jobs = [
    {
      jobTitle: 'Frontend Developer',
      desc: 'Building responsive web applications using modern frameworks',
      stack: 'React.js, TypeScript, Tailwind CSS'
    },
    {
      jobTitle: 'UI/UX Developer',
      desc: 'Creating intuitive user interfaces and seamless user experiences',
      stack: 'Figma, React.js, CSS3'
    },
    {
      jobTitle: 'Full Stack Developer',
      desc: 'Developing full-stack web applications with modern technologies',
      stack: 'Next.js, Node.js, MongoDB'
    },
    {
      jobTitle: 'React Native Developer',
      desc: 'Building cross-platform mobile applications',
      stack: 'React Native, Redux, JavaScript'
    },
    {
      jobTitle: 'Web Performance Engineer',
      desc: 'Optimizing web applications for maximum performance',
      stack: 'React.js, Webpack, Performance Tools'
    },
    {
      jobTitle: 'Frontend Architect',
      desc: 'Designing scalable frontend architecture and best practices',
      stack: 'React.js, TypeScript, Design Systems'
    },
    {
      jobTitle: 'JavaScript Developer',
      desc: 'Developing interactive web applications',
      stack: 'JavaScript, HTML5, CSS3'
    },
    {
      jobTitle: 'Frontend Team Lead',
      desc: 'Leading frontend development team and projects',
      stack: 'React.js, Next.js, Team Management'
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
    <div className='h-auto grid grid-cols-4'>
        {filteredJobs.map((job, index) => (
          <Jobs 
            key={index}
            jobTitle={job.jobTitle}
            desc={job.desc}
            stack={job.stack}
            bookmark={<CiBookmark />}
          />
        ))}
    </div>
  )
}

export default Web