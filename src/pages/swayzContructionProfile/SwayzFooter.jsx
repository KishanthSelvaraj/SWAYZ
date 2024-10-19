import React from 'react'
import logo from "../../assets/logo.jpeg"
import { BsTelephone } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
import { ImLocation } from "react-icons/im";

const SwayzFooter = () => {
  return (
    <div>
      <div>
        {/* <div className="flex justify-center my-10 md:text-3xl font-bold text-xl">Get in Touch</div> */}
        <div className="md:px-10 px-5 text-center text-customGolden md:text-3xl text-xl font-bold">
            GET IN TOUCH
            <div className="mx-auto mt-2 w-[120px] h-[2.5px] bg-customGolden rounded-full"></div>
          </div>
        <div className='flex flex-col md:flex-row mt-10 justify-center md:justify-evenly gap-y-10 text-sm items-center'>
            <div>
                <img src={logo} alt="" className='w-20 md:w-40' />
            </div>
            <div className='flex flex-col px-10  lg:flex-row gap-y-5 gap-x-10 justify-center'>
                <div className='flex  items-center gap-x-5'>
                <div className='border p-2 rounded-full bg-customGolden'>< BsTelephone className='w-5 h-auto text-white'/></div>
                <div>010 006 5983</div>
                </div>
                <div className='flex  items-center gap-x-5'>
                <div className='border p-2 rounded-full bg-customGolden'><TfiWorld className='w-5 h-auto text-white'/></div>
                <div>
                    <div>info@swayzgroup.co.za</div>
                    <div>www.swayzgroup.co.za</div>
                </div>
                </div>
                <div className='flex  items-center gap-x-5'>
                <div className='border p-2 rounded-full bg-customGolden'>< ImLocation  className='w-5 h-auto text-white'/></div>
                <div>120 11th Street, Parkmore Sandton, 2196</div>
                </div>
            </div>
        </div>
      </div>
      <div className='border-b my-10'></div>
    </div>
  )
}

export default SwayzFooter
