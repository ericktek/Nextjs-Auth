import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-cyan-500 to-blue-500">
    <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
      <div className='flex flex-col bg-white p-4 rounded-md shadow-md'>
        <h1 className='text-center text-3xl font-bold text-gray-500 dark:text-gray-500'>erick<span className='text-red-400'>tek</span> </h1>
       <Link className='text-center p-3 rounded-md shadow-md bg-gradient-to-r from-cyan-500 to-blue-500 my-2 text-slate-50' href="/register">Welcome</Link>
      <h1 className='text-sm leading-normal'>Let's connect with ericktek Community</h1>
      </div>
    </div>
</section>
    </div>
  )
}

export default page