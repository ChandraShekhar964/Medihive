import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
        <div className='text-center text-2xl pt-10 text-black-700 font-opensans'>
            <p> <span className='text-black-700 font-medium hover:text-gray-500'>ABOUT US</span></p>
        </div>
        <div className='my-10 flex flex-col md:flex-row gap-12'>
            <img className=' hover:scale-110 hover:z-10 hover:shadow-lg 
                transition-all duration-300 ease-in-out rounded-full w-full md:max-w-[360px] ' src={assets.about_image} alt="" />
            <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
                <p>Welcome to MediHive — Your Digital Gateway to Smarter Healthcare.
At MediHive, we make managing your health effortless. From booking doctor appointments to organizing your medical records, our platform is designed to simplify every step of your healthcare journey. We understand how time-consuming
 and stressful health management can be — that’s why we’ve built a system that puts control, convenience, and care in your hands.


                </p>
                <p>At MediHive, we're dedicated to advancing healthcare through smart technology.
We continuously improve our platform by integrating cutting-edge innovations that enhance user experience and streamline care.
Whether you're scheduling your first appointment or managing ongoing health needs, MediHive is here to support you — every step of the way.
                </p>
                <b className='text-gray-800'>Our Vision</b>
                <p>At MediHive, our vision is to create a connected and seamless healthcare experience for all.
We aim to close the gap between patients and providers by making access to care simpler, faster, and more convenient—wherever and whenever it's needed.


                </p>
            </div>
        </div>
        <div className='text-xl my-4'>
            <p>WHY <span className='text-gray-700 font-serif'>CHOOSE US</span></p>
        </div>
        <div className='flex flex-col md:flex-row mb-20 gap-5'>
            <div className='border rounded-2xl px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-green-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
                <b>EFFICIENCY:</b>
                <p>Streamlined Appointment Scheduling That Fits Into Your Busy Lifestyle.</p>
            </div>
            <div className='border rounded-2xl px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-green-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
                <b>CONVENIENCE:</b>
                <p>Access To A Network Of Trusted HealthCare Professionals In Your Area.</p>
            </div>
            <div className='border rounded-2xl px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-green-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
                <b>PERSONALIZATION:</b>
                <p>Tailored Recommenations And Remainders To Help You Stay On Top Of Your Health.</p>
            </div>
        </div>
    </div>
  )
}

export default About
