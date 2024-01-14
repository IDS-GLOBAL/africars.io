import React from 'react'
import Link from 'next/link'

const Home = () => {
  return (
    <main className="py-8 px-48">
      <div>
          <p className='p-2'><Link className='bg-teal-700 text-black font-medium p-2' href="{/}">Home Page</Link></p>
          <p className='p-2'><Link className='bg-teal-700 text-black font-medium p-2' href="{/dashboard}">Dashboard</Link></p>
          <p className='p-2'><Link className='bg-teal-700 text-black font-medium p-2' href="{/about}">About us</Link></p>
      </div>
    </main>
  )
}

export default Home
