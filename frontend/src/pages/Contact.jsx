import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>CONTACT <span className='text-gray-700 font-bold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className=' hover:scale-110 hover:z-10 hover:shadow-lg 
                transition-all duration-300 ease-in-out rounded-xl w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className=' font-semibold text-lg text-gray-600'>OUR OFFICE</p>
          <p className=' text-gray-500'>Mohali, Chandigarh University <br /> NH-5 Chandigarh-Ludhiana Highway, Mohali, Punjab (INDIA)</p>
          <p className=' text-gray-500'>Tel: (+91) 9632456798 <br /> Email: medihivemed@gmail.com</p>
          <p className=' font-semibold text-lg text-gray-600'>CAREERS AT PRESCRIPTO</p>
          <p className=' text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>

    </div>
  )
}

export default Contact
