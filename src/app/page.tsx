'use client'

require('dotenv').config()
import React from 'react'
import Link from 'next/link'

// const getPosts = async () => {
async function getPosts() {
  

  const res = await fetch(`http://localhost:5556/api/getPosts`)
  
  
  
  //const res = await fetch(process.env.BASE_URL  + 'getPosts')
  //const res = await fetch(process.env.BASE_URL+'getPosts', { cache: 'force-cache' })
  
  
  //const res = await fetch(`${process.env.BASE_URL}/api/getPosts`, { cache: 'force-cache' })
  //const res = await fetch(`${process.env.BASE_URL}api/getPosts`, { cache: 'force-cache' })
  //const res = await fetch(`http://localhost:5556/api/getPosts`)
  //const res = await fetch(`/api/getPosts`)
  console.log('Line 9 res: ', res)

  if(!res.ok){
    console.log('res Not Okay res: ', res)
    return  new Error("failed to fetch");
    
  }

  return res.json();
}

export default async function Home(){

  const data: { id: number; title: string }[] = await getPosts()
  //const data = await getPosts()
  
  console.log('Home Line 22 data: ', JSON.stringify(data))
  //console.log('Home Line 22 data: ', data)
  return ( 
    <main className="py-8 px-48">
      <div>
          <p className='p-2'><Link className='bg-teal-700 text-black font-medium p-2' href="{./}">Home Page</Link></p>
          <p className='p-2'><Link className='bg-teal-700 text-black font-medium p-2' href="{./dashboard}">Dashboard</Link></p>
          <p className='p-2'><Link className='bg-teal-700 text-black font-medium p-2'  href="{./about}">About us</Link></p>
      </div>

      <div>
        {/* {data.title} */}
          {/* {data.map(post => (
            <h1>{post.title}Ayo Man</h1>
          ))} */}
      </div>
    </main>
  )
}


