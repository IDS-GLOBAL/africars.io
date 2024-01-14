'use client'

import React from 'react'
import Link from 'next/link'

async function getPosts(){
  //const res = await fetch(`${process.env.BASE_URL}`+'/api/getPosts')
  //const res = await fetch(`${process.env.BASE_URL}api/getPosts`, { cache: 'force-cache' })
  //const res = await fetch(`http://localhost:5556/api/getPosts`, { cache: 'force-cache' })
  const res = await fetch(`http://localhost:5556/api/getPosts`)
  //const res = await fetch(`/api/getPosts`)
  console.log('Line 9 res: ', res)

  if(!res.ok){
    console.log('res Not Okay res: ', res)
    return  new Error("failed to fetch");
    
  }
}

const Home = async () => {

  const data = await getPosts()
  
  console.log('Home Line 22 data: ', data)
  return ( 
    <main className="py-8 px-48">
      <div>
          <p className='p-2'><Link className='bg-teal-700 text-black font-medium p-2' href="{./}">Home Page</Link></p>
          <p className='p-2'><Link className='bg-teal-700 text-black font-medium p-2' href="{./dashboard}">Dashboard</Link></p>
          <p className='p-2'><Link className='bg-teal-700 text-black font-medium p-2' href="{./about}">About us</Link></p>
      </div>

      <div>

      </div>
    </main>
  )
}

export default Home
