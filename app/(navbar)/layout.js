import React from 'react'
import NavLinks from '../components/NavLinks';

export default function Layout({ children }) {
  return (
    <div className='bg-[#dbeafe]'>
      <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
        <div className="w-full max-w-md">
           <NavLinks />
            { children }
        </div>
    </div>
      
     </div>
  )
}

