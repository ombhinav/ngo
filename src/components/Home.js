import React from 'react'
import sample from './sample.mp4'



const Home = () => {
  return (
    <>
    <div className='overlay'></div>

    <video src={sample} className='videoTag w-full brightness-50' autoPlay loop muted />
    
    
    
    <section className='content'>
    <div className='flex flex-row justify-between mt-10 pt-10 mb-20 pb-10'>
      
      <div >
       <h1 className='text-9xl mt-8 pt-10 pl-40 ml-5 pb-4 mb-5 '>SAVE <br/> TREES</h1>
       <p className='text-2xl mt-5 pt-3 pl-40 ml-10 pb-4 mb-4'>Let's lend a hand to <br/> to plant a tree.</p>
      </div>

      
      <div>
        {/* <img src={tree} alt="discount" className='w-[640px] h-[380px] rounded-lg ' /> */}
        <button type="button" className="py-3 px-6 text-[24px] mt-[350px] mr-[210px] rounded-[10px] border border-white-500" >Join Now  <span className='text-2xl'>→ </span></button>
      </div>

    </div>
    </section>
    <div>
      <h1 className='pt-36 text-7xl text-center pb-20 text-black content'> Our Core Values</h1>
    </div>
    <div className='flex flex-row justify-center '>
    <li className='  text-black content text-4xl pt-12 p-16 list-none border-r-2 border-black'>
        <a href='/'>Social Justice</a> 
      </li>
      <li className='text-black content text-4xl pt-12 p-16 list-none border-r-2 border-black'>
        <a href='/'>Transparency and Accountability</a>
      </li>
      <li className=' text-black content text-4xl pt-12 p-16 list-none'>
        <a href='/'>Equality</a>
      </li>
    </div>
    </>
  )
}

export default Home
