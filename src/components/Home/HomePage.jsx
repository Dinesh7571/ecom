import React from 'react'

import iphone from '../../assets/iphone-14-pro.webp'
import mac from '../../assets/mac-system-cut.jfif'
import HeroSection from './HeroSection'
import FeaturedProducts from './FeaturedProducts'

const HomePage = () => {
  return (
    <div>
        <HeroSection title="Buy iPhone 14 Pro"
         subtitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti rem exercitationem quibusdam aperiam nemo quam!"
         link='/product/653bfa9d182c60ace99610fe' image={iphone}/>
         
        <FeaturedProducts/>

        <HeroSection title="Build the ultimate setup"
         subtitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti rem exercitationem quibusdam aperiam nemo quam!"
         link='/product/653bfa9d182c60ace9961106' image={mac}/>
    </div>
  )
}

export default HomePage