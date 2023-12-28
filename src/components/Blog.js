import React from 'react'

const Blog = () => {
  return (
    <div>

    <h1 className='text-[100px] text-black px-[90px] pt-[90px] '>
    Blogs
    </h1>
    
    <div className='flex flex-row'>
    <article className="blog-post ">
   <h2 class="display-5 link-body-emphasis mb-1 text-black px-[100px] mt-[40px]">Why Dhoni is the real THALA!</h2>
   <p class="blog-post-meta text-gray-600 px-[100px] mb-[10px]">December 14, 2020 by <a href="/">Chris</a></p>
   <p className=' text-black px-[100px]'>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
   <ul className=' text-black px-[100px]'>
      <li className='text-black'>First list item</li>
      <li className='text-black'>Second list item with a longer description</li>
      <li className='text-black'>Third list item to close it out</li>
   </ul>
   <p className='px-[100px] text-black'>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout.</p>
   <button type="button" class=" btn button-blue hover:bg-black text-white ml-[100px] mt-[20px] ">Read More</button> 

   <h2 class="display-5 link-body-emphasis mb-1 text-black px-[100px] mt-[50px]">Why Kohli is the real PAMPA!</h2>
   <p class="blog-post-meta text-gray-600 px-[100px] mb-[10px]">December 14, 2020 by <a href="/">Chris</a></p>
   <p className=' text-black px-[100px]'>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
   <ul className=' text-black px-[100px]'>
      <li className='text-black'>First list item</li>
      <li className='text-black'>Second list item with a longer description</li>
      <li className='text-black'>Third list item to close it out</li>
   </ul>
   <p className='px-[100px] text-black'>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout.</p>
   <button type="button" class=" btn button-blue hover:bg-black text-white ml-[100px] mt-[20px] mb-[100px] ">Read More</button>
</article>

<div>
<div class="col-md-4">
   <div class="position-sticky ">
      <div class="p-4 mt-[-90px] mb-3 bg-body-tertiary rounded-xl min-w-[400px]">
         <h4 class="fst-italic text-black">About</h4>
         <p class="mb-0 text-black">Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you.</p>
      </div>
      <div>
         <h4 class="fst-italic text-black">Recent posts</h4>
         <ul class="list-unstyled">
            <li>
               <a class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="/">
                  <svg class="bd-placeholder-img" width="100%" height="96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                     <rect width="100%" height="100%" fill="#777"></rect>
                  </svg>
                  <div class="col-lg-8">
                     <h6 class="mb-0 text-black min-w-[400px]">Example blog post title</h6>
                     <small class="text-body-secondary text-black">January 15, 2023</small>
                  </div>
               </a>
            </li>
            <li>
               <a class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="/">
                  <svg class="bd-placeholder-img" width="100%" height="96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                     <rect width="100%" height="100%" fill="#777"></rect>
                  </svg>
                  <div class="col-lg-8">
                     <h6 class="mb-0 text-black min-w-[400px]">This is another blog post title</h6>
                     <small class="text-body-secondary">January 14, 2023</small>
                  </div>
               </a>
            </li>
            <li>
               <a class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="/">
                  <svg class="bd-placeholder-img" width="100%" height="96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                     <rect width="100%" height="100%" fill="#777"></rect>
                  </svg>
                  <div class="col-lg-8">
                     <h6 class="mb-0 text-black min-w-[400px]">Longer blog post title: Hey there!!</h6>
                     <small class="text-body-secondary">January 13, 2023</small>
                  </div>
               </a>
            </li>
         </ul>
      </div>
      <div class="p-4">
         <h4 class="fst-italic text-black">Archives</h4>
         <ol class="list-unstyled mb-0">
            <li className='text-black'><a href="/">March 2021</a></li>
            <li className='text-black'><a href="/">February 2021</a></li>
            <li className='text-black'><a href="/">January 2021</a></li>
            <li className='text-black'><a href="/">December 2020</a></li>
           
         </ol>
      </div>
      {/* <div class="p-4">
         <h4 class="fst-italic text-black">Elsewhere</h4>
         <ol class="list-unstyled">
            <li className='text-black'><a href="/">GitHub</a></li>
            <li className='text-black'><a href="/">Twitter</a></li>
            <li className='text-black'><a href="/">Facebook</a></li>
         </ol>
      </div> */}
   </div>
</div>
</div>
    </div>
    </div>
  )
}

export default Blog
