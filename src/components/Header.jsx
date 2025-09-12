import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='mx-8 sm:mx-16 x1:mx-24 relative'>
      <div className='text-center mt-20 mb-8'>
         <div className='inline-flex items-center justify-center gap-4 text-sm sm:text-base mb-4 font-medium text-gray-600'>
            <p>New feature integerated</p>
            <img src={assets.star_icon} className='w-2.5' alt="" />
         </div>
      </div>
      <img src={assets.gradientBackground} alt="" className='absolute -top-50 -z-1 opacity-50' />
    </div>
  )
}

export default Header
