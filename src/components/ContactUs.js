import React from 'react'

const ContactUs = () => {
  return (
    <div>
      <h1 className='text-[100px] text-black px-[90px] pt-[90px] '>
      Contact Us
      </h1>
     <div className='flex flex-row'>

      <div className='text-black px-[90px] pt-[90px] max-w-[50%] min-w-[60%]' >

        <div class="row g-3">
          <div class="col">
            <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
          </div>
        </div>
      <div class="col-12">
        <label for="inputAddress" class="form-label">Address</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
      </div>
      <button type="button" class="btn button-black">Submit</button>
  
      </div>
      <div className='max-h-[50px]'>
      <iframe
                title='map'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119150.55857764366!2d79.07185615537055!3d12.925560220092514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad38e61fa68ffb%3A0xbedda6917d262b5e!2sVellore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1688713043344!5m2!1sen!2sin"
                width="140%"
                height="800%"
                style={{ border: "0", margin: "20px" }}
      ></iframe>

      </div>
    </div>
    </div>
  )
}

export default ContactUs
