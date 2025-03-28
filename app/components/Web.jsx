import React from 'react'
import Jobs from './Jobs'
import { CiBookmark } from "react-icons/ci";

const Web = () => {
  return (
    <div className='h-auto grid grid-cols-4'>
        <Jobs 
            jobTitle='Frontend Developer'
            desc='Building responsive web applications using modern frameworks'
            stack='React.js, TypeScript, Tailwind CSS'
            bookmark={<CiBookmark />}
        />
        <Jobs 
            jobTitle='UI/UX Developer'
            desc='Creating intuitive user interfaces and seamless user experiences'
            stack='Figma, React.js, CSS3'
            bookmark={<CiBookmark />}
        />
        <Jobs 
            jobTitle='Full Stack Developer'
            desc='Developing full-stack web applications with modern technologies'
            stack='Next.js, Node.js, MongoDB'
            bookmark={<CiBookmark />}
        />
        <Jobs 
            jobTitle='React Native Developer'
            desc='Building cross-platform mobile applications'
            stack='React Native, Redux, JavaScript'
            bookmark={<CiBookmark />}
        />
        <Jobs 
            jobTitle='Web Performance Engineer'
            desc='Optimizing web applications for maximum performance'
            stack='React.js, Webpack, Performance Tools'
            bookmark={<CiBookmark />}
        />
        <Jobs 
            jobTitle='Frontend Architect'
            desc='Designing scalable frontend architecture and best practices'
            stack='React.js, TypeScript, Design Systems'
            bookmark={<CiBookmark />}
        />
        <Jobs 
            jobTitle='JavaScript Developer'
            desc='Developing interactive web applications'
            stack='JavaScript, HTML5, CSS3'
            bookmark={<CiBookmark />}
        />
        <Jobs 
            jobTitle='Frontend Team Lead'
            desc='Leading frontend development team and projects'
            stack='React.js, Next.js, Team Management'
            bookmark={<CiBookmark />}
        />
    </div>
  )
}

export default Web