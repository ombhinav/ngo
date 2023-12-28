import React from 'react'
import happy from './happy.gif'

const Volunteer = () => {
  return (
    <div>
    <h1 className='text-[100px] text-black px-[90px] pt-[90px] '>
    Get Involved
    </h1>

    <h2 className='text-black text-[30px] px-[100px] pt-[50px]  min-w-[60%]'> Volunteer Form</h2>
    <div className='flex flex-row'>

      <div className='text-black px-[100px] pt-[50px]  min-w-[60%]' >

        <div class="row g-3 mt-[-30px]">
          <div class="col">
            <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
          </div>
        </div>
      <div class="col-12">
        <label for="inputAddress" class="form-label">Address</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="Address"/>
      </div>
      <div class="col-12">
        <label for="inputAddress" class="form-label">Address</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="Message"/>
      </div>
      <div class="row g-3 mt-[20px] ">
          <div class="col">
            <input type="text" class="form-control" placeholder="Phone Number" aria-label="Phone Number"/>
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Email" aria-label="Email"/>
          </div>
        </div>
      <button type="button" class="btn button-black">Submit</button>
  
      </div>
      <div className='max-h-[50px]'>
      <img src={happy}  alt='aboutUs' className='mt-[-130px] ml-[20px]' />

      </div>
    </div>
    </div>
  )
}

export default Volunteer
