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
        <Jobs 
            jobTitle='UI/UX Design'
            desc='Modern interface designs for web/mobile'
            stack='Figma, Sketch, Adobe XD'
            budget='1000'
            deadline='2024-04-30'
            company='InterfacePro'
            location='Remote'
            bookmark={<CiBookmark />}
        />
        <Jobs 
            jobTitle='Business Cards'
            desc='Professional business card designs'
            stack='Illustrator, InDesign'
            budget='400'
            deadline='2024-04-12'
            company='CardDesigns'
            location='Remote'
            bookmark={<CiBookmark />}
        />
        <Jobs 
            jobTitle='Package Design'
            desc='Creative product packaging solutions'
            stack='Illustrator, Photoshop, Dimension'
            budget='900'
            deadline='2024-04-22'
            company='PackDesign'
            location='Remote'
            bookmark={<CiBookmark />}
        />
        <Jobs 
            jobTitle='Motion Graphics'
            desc='Animated graphics for digital media'
            stack='After Effects, Premiere Pro'
            budget='1200'
            deadline='2024-05-01'
            company='MotionPro'
            location='Remote'
            bookmark={<CiBookmark />}
        />
    </div>
  )
}

export default Graphic