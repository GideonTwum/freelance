import React from 'react'
import { CiBookmark } from "react-icons/ci";
import Jobs from './Jobs';

const Writing = () => {
  return (
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
        <Jobs 
            jobTitle='Social Media Writing'
            desc='Create engaging social media content and develop content strategies across platforms.'
            stack='Hootsuite, Buffer, Sprout Social'
            budget='450'
            deadline='2024-04-30'
            company='SocialWords'
            location='Remote'
            bookmark={<CiBookmark />}
        />
        <Jobs 
            jobTitle='Grant Writing'
            desc='Research and write grant proposals for non-profits and organizations seeking funding.'
            stack='Microsoft Office, Grant Management Software'
            budget='800'
            deadline='2024-04-12'
            company='GrantPro'
            location='Remote'
            bookmark={<CiBookmark />}
        />
        <Jobs 
            jobTitle='Medical Writing'
            desc='Develop scientific content for healthcare publications and clinical documentation.'
            stack='PubMed, Medical Databases, LaTeX'
            budget='700'
            deadline='2024-04-22'
            company='MedWrite'
            location='Remote'
            bookmark={<CiBookmark />}
        />
        <Jobs 
            jobTitle='Script Writing'
            desc='Write engaging scripts for videos, podcasts, and other digital media content.'
            stack='Final Draft, Celtx, Adobe Story'
            budget='650'
            deadline='2024-05-01'
            company='ScriptCraft'
            location='Remote'
            bookmark={<CiBookmark />}
        />
    </div>
  )
}

export default Writing