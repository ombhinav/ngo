import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-center list-none bg-black text-white pb-4'>
      <li className=' text-2xl mr-auto pl-[90px] pt-4'>
        <a href='/'> Home</a> 
      </li>
      <li className='text-2xl pt-4 pr-10  '>
        <a href='Blogs'>Blogs</a>
      </li>
    
      <li className=' text-2xl pt-4 pr-10'>
        <a href='/GetInvolved'>Get Involved</a>
      </li>
      <li className='text-2xl pt-4 pr-10'>
        <a href='/Projects'>Projects</a>
      </li>
      <li className=' text-2xl pt-4 pr-10 '>
        <a href='/ContactUs'>Contact Us</a>
      </li>
      
      <li className='text-2xl pt-4 pr-[90px]'>
        <a href='/AboutUs'>About Us</a>
      </li>
    </div>
  )
}

export default Navbar
