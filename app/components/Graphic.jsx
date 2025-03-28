import React from 'react'
import Jobs from './Jobs'
import { CiBookmark } from "react-icons/ci";

const Graphic = () => {
  return (
    <div className='h-auto grid grid-cols-4'>
        <Jobs 
            jobTitle='Flyer Design'
            desc='Beautiful flyer designs for Weddings'
            stack='Photoshop, Canva'
            bookmark={<CiBookmark />}
        />
        <Jobs 
            jobTitle='Logo Design'
            desc='Create unique and memorable brand logos'
            stack='Illustrator, Figma'
            bookmark={<CiBookmark />}
        />
        <Jobs 
            jobTitle='Social Media Graphics'
            desc='Engaging visuals for social platforms'
            stack='Photoshop, Canva, After Effects'
            bookmark={<CiBookmark />}
        />
        <Jobs 
            jobTitle='Book Cover Design'
            desc='Eye-catching covers for authors'
            stack='Photoshop, InDesign'
            bookmark={<CiBookmark />}
        />
        <Jobs 
            jobTitle='UI/UX Design'
            desc='Modern interface designs for web/mobile'
            stack='Figma, Sketch, Adobe XD'
            bookmark={<CiBookmark />}
        />
        <Jobs 
            jobTitle='Business Cards'
            desc='Professional business card designs'
            stack='Illustrator, InDesign'
            bookmark={<CiBookmark />}
        />
        <Jobs 
            jobTitle='Package Design'
            desc='Creative product packaging solutions'
            stack='Illustrator, Photoshop, Dimension'
            bookmark={<CiBookmark />}
        />
        <Jobs 
            jobTitle='Motion Graphics'
            desc='Animated graphics for digital media'
            stack='After Effects, Premiere Pro'
            bookmark={<CiBookmark />}
        />
    </div>
  )
}

export default Graphic