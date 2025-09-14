import React from 'react'
import {assets} from '../assets/assets'     
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate();
    
  return (
    <div className='flex justify-between items-center py-5 mx-8 sm:mx-20 x1:mx-32'>
        
       <div onClick={() => navigate('/')} className="w-40 sm:w-56 cursor-pointer">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 140" role="img" aria-label="Blogify logo">
    <defs>
      <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#6366F1"/>
        <stop offset="50%" stopColor="#22C55E"/>
        <stop offset="100%" stopColor="#06B6D4"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="none"/>
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle"
          fontFamily="-apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif"
          fontSize="80" fontWeight="800" fill="url(#g)" letterSpacing="1">
      BlogifyAi
    </text>
  </svg>
</div>

        
        <button onClick={() => navigate('/admin')} className='flex items-center gap-2 rounded-full text sm 
        cursor-pointer bg-primary text-white px-10 py-2.5'>Login
            <img src={assets.arrow} alt="arrow" />
        </button>
    </div>
  )
}

export default Navbar
