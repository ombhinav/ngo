import React from 'react'
import about from './about.jpg'

const AboutUs = () => {
  return (
    <div className ='bgcolor-grey'>
      <h1 className='text-6xl text-black px-[90px] pt-[90px] '>
      About Us
      </h1>
      <div className='flex flex-row'>
        <div className=' text-black px-[90px] pt-[80px]'>
        
          Since our inception in 1990, 
        Save Trees is a non-profit organization passionately committed to the preservation and conservation of <br/> our planet's invaluable natural resources. <br/> 
        <br/>
        We have tirelessly advocated for the protection of forests and the <br/> promotion of sustainable practices to ensure a greener and healthier future for generations to come.
          

        </div>
        <div className=' text-black px-[40px]'>
        <img src={about} alt='aboutUs' className='h-[350px] w-[900px] rounded-xl ' />
        </div>
    </div>
    <h1 className='text-6xl text-black px-[90px] pt-[60px] pb-[50px] '>
      Our Mission
      </h1>
      <div className='flex flex-row justify-center py-[50px]'>
    <li className='  text-black  text-4xl pt-12 p-16 list-none border-r-2 border-black'>
        <a href='/'>Conservation</a> 
      </li>
      <li className='text-black  text-4xl pt-12 p-16 list-none border-r-2 border-black'>
        <a href='/'>Reforestation</a>
      </li>
      <li className=' text-black  text-4xl pt-12 p-16 list-none'>
        <a href='/'>Preservation</a>
      </li>
    </div>
      </div>
      
  )
}

export default AboutUs
