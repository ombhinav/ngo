import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-center list-none bg-black text-white pb-4'>
      <li className=' text-2xl mr-auto pl-10 pt-4'>
        <a href='/'> Home</a> 
      </li>
      <li className='text-2xl pt-4 pr-10'>
        <a href='/AboutUs'>About Us</a>
      </li>
      <li className='text-2xl pt-4 pr-10'>
        <a href='/'>Projects</a>
      </li>
      <li className=' text-2xl pt-4 pr-10'>
        <a href='/'>Volunteer</a>
      </li>
      <li className=' text-2xl pt-4 pr-10 '>
        <a href='/'>Events</a>
      </li>
      <li className='text-2xl pt-4 pr-10 '>
        <a href='/'>Blogs</a>
      </li>
    </div>
  )
}

export default Navbar
