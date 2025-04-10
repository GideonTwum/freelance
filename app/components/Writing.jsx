import React from 'react'
import { CiBookmark } from "react-icons/ci";
import Jobs from './Jobs';

const Writing = () => {
  return (
    <div className=''>
      <div className='h-auto grid gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-20'>
        <Jobs 
            jobTitle='Content Writing'
            desc='Create engaging blog posts, articles, and web content for various industries. Strong SEO knowledge required.'
            stack='WordPress, SEO Tools, Google Analytics'
            budget='400'
            deadline='2024-04-15'
            company='ContentPro'
            location='Remote'
            bookmark={<CiBookmark />}
        />
        <Jobs 
            jobTitle='Technical Writing'
            desc='Develop clear documentation, user guides, and API documentation for software products.'
            stack='Markdown, Git, Confluence, JIRA'
            budget='600'
            deadline='2024-04-20'
            company='TechDocs'
            location='Remote'
            bookmark={<CiBookmark />}
        />
        <Jobs 
            jobTitle='Copywriting'
            desc='Craft compelling marketing copy for websites, advertisements, and promotional materials.'
            stack='Grammarly, Hemingway Editor, CMS'
            budget='500'
            deadline='2024-04-10'
            company='CopyCraft'
            location='Remote'
            bookmark={<CiBookmark />}
        />
        <Jobs 
            jobTitle='UX Writing'
            desc='Design microcopy and user interface text to enhance product usability and user experience.'
            stack='Figma, Sketch, Adobe XD'
            budget='550'
            deadline='2024-04-25'
            company='UXWords'
            location='Remote'
            bookmark={<CiBookmark />}
        />

      </div>
    </div>
  )
}

export default Writing