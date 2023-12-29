import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-center list-none bg-black text-white pb-4'>
      <li className=' text-2xl mr-auto pl-[90px] pt-4'>
        <Link to='/'> Home</Link> 
      </li>
      <li className='text-2xl pt-4 pr-10  '>
        <Link to='Blogs'>Blogs</Link>
      </li>
    
      <li className=' text-2xl pt-4 pr-10'>
        <Link to='/GetInvolved'>Get Involved</Link>
      </li>
      <li className='text-2xl pt-4 pr-10'>
        <Link to='/Projects'>Projects</Link>
      </li>
      <li className=' text-2xl pt-4 pr-10 '>
        <Link to='/ContactUs'>Contact Us</Link>
      </li>
      
      <li className='text-2xl pt-4 pr-[90px]'>
        <Link to='/AboutUs'>About Us</Link>
      </li>
    </div>
  )
}

export default Navbar
