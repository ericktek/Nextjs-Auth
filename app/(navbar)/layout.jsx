'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const layout = ({ children }) => {

  const pathname = usePathname();
  return (
    <div>
      <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
        <div className="w-full max-w-md">
          
            
            <div className="flex items-center justify-center mt-6 py-2">
                <Link href="login" className={`w-1/3 py-2 ${pathname === '/login' ? 'bg-blue-400  border-blue-500 dark:border-blue-400 rounded-md text-white': 'text-gray-500 dark:text-gray-500 '} font-medium text-center  capitalize  `}>
                    sign in
                </Link>

                <Link href="register" className={`w-1/3 py-2 font-medium text-center ${pathname === '/register' ? 'bg-blue-400 text-white border-b-2 rounded-md border-blue-500 dark:border-blue-400 ':'text-gray-500 dark:text-gray-500 '} capitalize `}>
                    sign up
                </Link>
            </div>
            { children }
        </div>
    </div>
      
     </div>
  )
}

export default layout