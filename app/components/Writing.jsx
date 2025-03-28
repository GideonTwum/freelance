import React from 'react'
import { CiBookmark } from "react-icons/ci";
import Jobs from './Jobs';

const Writing = () => {
  return (
    <div className='h-auto grid grid-cols-4'>
        <Jobs 
            jobTitle='Content Writing'
            desc='Create engaging blog posts, articles, and web content for various industries. Strong SEO knowledge required.'
            stack='WordPress, SEO Tools, Google Analytics'
            bookmark={<CiBookmark />}
        />
        <Jobs 
            jobTitle='Technical Writing'
            desc='Develop clear documentation, user guides, and API documentation for software products.'
            stack='Markdown, Git, Confluence, JIRA'
            bookmark={<CiBookmark />}
        />
        <Jobs 
            jobTitle='Copywriting'
            desc='Craft compelling marketing copy for websites, advertisements, and promotional materials.'
            stack='Grammarly, Hemingway Editor, CMS'
            bookmark={<CiBookmark />}
        />
        <Jobs 
            jobTitle='UX Writing'
            desc='Design microcopy and user interface text to enhance product usability and user experience.'
            stack='Figma, Sketch, Adobe XD'
            bookmark={<CiBookmark />}
        />
        <Jobs 
            jobTitle='Social Media Writing'
            desc='Create engaging social media content and develop content strategies across platforms.'
            stack='Hootsuite, Buffer, Sprout Social'
            bookmark={<CiBookmark />}
        />
        <Jobs 
            jobTitle='Grant Writing'
            desc='Research and write grant proposals for non-profits and organizations seeking funding.'
            stack='Microsoft Office, Grant Management Software'
            bookmark={<CiBookmark />}
        />
        <Jobs 
            jobTitle='Medical Writing'
            desc='Develop scientific content for healthcare publications and clinical documentation.'
            stack='PubMed, Medical Databases, LaTeX'
            bookmark={<CiBookmark />}
        />
        <Jobs 
            jobTitle='Script Writing'
            desc='Write engaging scripts for videos, podcasts, and other digital media content.'
            stack='Final Draft, Celtx, Adobe Story'
            bookmark={<CiBookmark />}
        />
    </div>
  )
}

export default Writing