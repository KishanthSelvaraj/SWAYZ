import React, { useState } from 'react';
import { MdOutlineStarRate } from "react-icons/md";

const services = [
    "Office Buildings",
    "Retail Spaces",
    "Restaurants and Cafes",
    "Educational Facilities",
    "Healthcare Centers",
    "Industrial Complexes",
    "Houses",
    "Apartments",
    "Condominiums",
    "Vacation Rentals",
    "Deep Cleaning",
    "Carpet and Upholstery Cleaning",
    "Window Cleaning",
    "Floor Care and Maintenance",
    "Post-Construction Cleaning",
    "Move-In/Move-Out Cleaning",
];

const InfiniteScrollServices = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="overflow-hidden"
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`whitespace-nowrap animate-scroll ${isHovered ? 'paused' : ''}`} 
        style={{
          animationPlayState: isHovered ? 'paused' : 'running',
        }}
      >
        {services.map((service, index) => (
          <div key={index} className="inline-block mx-10 mt-10 mb-5 relative group">   
            <div className='flex items-center'>
              <MdOutlineStarRate className="text-orange-700 text-4xl mr-2" />
              <span className="text-3xl text-customGrey flex">
                {service.split(' ').map((word, wordIndex) => (
                  <span 
                    key={wordIndex} 
                    className={`transition-colors duration-100 hover:text-customGolden hover:font-semibold hover:uppercase cursor-pointer mx-1`} // Added margin here
                  >
                    {word}
                  </span>
                ))}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScrollServices;
