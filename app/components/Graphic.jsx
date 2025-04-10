import React from 'react'
import Jobs from './Jobs'
import { CiBookmark } from "react-icons/ci";

const Graphic = () => {
  return (
    <div className='h-auto grid gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-20'>
        <Jobs 
            jobTitle='Flyer Design'
            desc='Beautiful flyer designs for Weddings'
            stack='Photoshop, Canva'
            budget='500'
            deadline='2024-04-15'
            company='DesignStudio'
            location='Remote'
            bookmark={<CiBookmark />}
        />
        <Jobs 
            jobTitle='Logo Design'
            desc='Create unique and memorable brand logos'
            stack='Illustrator, Figma'
            budget='800'
            deadline='2024-04-20'
            company='BrandCraft'
            location='Remote'
            bookmark={<CiBookmark />}
        />
        <Jobs 
            jobTitle='Social Media Graphics'
            desc='Engaging visuals for social platforms'
            stack='Photoshop, Canva, After Effects'
            budget='600'
            deadline='2024-04-10'
            company='SocialMediaPro'
            location='Remote'
            bookmark={<CiBookmark />}
        />
        <Jobs 
            jobTitle='Book Cover Design'
            desc='Eye-catching covers for authors'
            stack='Photoshop, InDesign'
            budget='700'
            deadline='2024-04-25'
            company='BookDesigns'
            location='Remote'
            bookmark={<CiBookmark />}
        />
       
    </div>
  )
}

export default Graphic