import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const CoreValues = () => {
  const cardsRef = useRef(null); // Single ref for the container
  const scrollAnimationRef = useRef(null); // Reference to the animation
  const [isScrolling, setIsScrolling] = useState(true);

  // Core values data
  const coreValuesData = [
    {
      image: "/cleaningImages/CV!.webp",
      title: "Excellence",
      description:
        "We are dedicated to delivering exceptional service and exceeding expectations in everything we do.",
    },
    {
      image: "/cleaningImages/CV2.png",
      title: "Integrity",
      description:
        "We conduct our business with honesty, transparency, and ethical behavior.",
    },
    {
      image: "/cleaningImages/CV3.jpeg",
      title: "Teamwork",
      description:
        "We foster a collaborative and supportive work environment where every team member is valued.",
    },
    {
      image: "/cleaningImages/CV4.png",
      title: "Customer Focus",
      description:
        "We prioritize the needs and satisfaction of our clients above all else.",
    },
    {
      image: "/cleaningImages/CV5.png",
      title: "Continuous Growth",
      description:
        "We believe in constant learning and development, encouraging innovation and personal growth.",
    },
    {
      image: "/cleaningImages/CV6.jpg",
      title: "Professionalism",
      description:
        "We maintain the highest standards of professionalism in our conduct and communication.",
    },
    {
      image: "/cleaningImages/CV7.jpg",
      title: "Innovation",
      description: "We embrace innovation and continuous improvement.",
    },
    {
      image: "/cleaningImages/CV8.webp",
      title: "Sustainability",
      description:
        "We are committed to environmental sustainability and responsible stewardship of natural resources.",
    },
    {
      image: "/cleaningImages/CV9.jpg",
      title: "Safety",
      description: "We prioritize the safety and well-being of our employees and clients.",
    },
    {
      image: "/cleaningImages/CV!.webp",
      title: "Excellence",
      description:
        "We are dedicated to delivering exceptional service and exceeding expectations in everything we do.",
    },
    {
      image: "/cleaningImages/CV2.png",
      title: "Integrity",
      description:
        "We conduct our business with honesty, transparency, and ethical behavior.",
    },
    {
      image: "/cleaningImages/CV3.jpeg",
      title: "Teamwork",
      description:
        "We foster a collaborative and supportive work environment where every team member is valued.",
    },
    {
      image: "/cleaningImages/CV4.png",
      title: "Customer Focus",
      description:
        "We prioritize the needs and satisfaction of our clients above all else.",
    },
    {
      image: "/cleaningImages/CV5.png",
      title: "Continuous Growth",
      description:
        "We believe in constant learning and development, encouraging innovation and personal growth.",
    },
    {
      image: "/cleaningImages/CV6.jpg",
      title: "Professionalism",
      description:
        "We maintain the highest standards of professionalism in our conduct and communication.",
    },
    {
      image: "/cleaningImages/CV7.jpg",
      title: "Innovation",
      description: "We embrace innovation and continuous improvement.",
    },
    {
      image: "/cleaningImages/CV8.webp",
      title: "Sustainability",
      description:
        "We are committed to environmental sustainability and responsible stewardship of natural resources.",
    },
    {
      image: "/cleaningImages/CV9.jpg",
      title: "Safety",
      description: "We prioritize the safety and well-being of our employees and clients.",
    },  {
      image: "/cleaningImages/CV!.webp",
      title: "Excellence",
      description:
        "We are dedicated to delivering exceptional service and exceeding expectations in everything we do.",
    },
    {
      image: "/cleaningImages/CV2.png",
      title: "Integrity",
      description:
        "We conduct our business with honesty, transparency, and ethical behavior.",
    },
    {
      image: "/cleaningImages/CV3.jpeg",
      title: "Teamwork",
      description:
        "We foster a collaborative and supportive work environment where every team member is valued.",
    },
    {
      image: "/cleaningImages/CV4.png",
      title: "Customer Focus",
      description:
        "We prioritize the needs and satisfaction of our clients above all else.",
    },
    {
      image: "/cleaningImages/CV5.png",
      title: "Continuous Growth",
      description:
        "We believe in constant learning and development, encouraging innovation and personal growth.",
    },
    {
      image: "/cleaningImages/CV6.jpg",
      title: "Professionalism",
      description:
        "We maintain the highest standards of professionalism in our conduct and communication.",
    },
    {
      image: "/cleaningImages/CV7.jpg",
      title: "Innovation",
      description: "We embrace innovation and continuous improvement.",
    },
    {
      image: "/cleaningImages/CV8.webp",
      title: "Sustainability",
      description:
        "We are committed to environmental sustainability and responsible stewardship of natural resources.",
    },
    {
      image: "/cleaningImages/CV9.jpg",
      title: "Safety",
      description: "We prioritize the safety and well-being of our employees and clients.",
    },  {
      image: "/cleaningImages/CV!.webp",
      title: "Excellence",
      description:
        "We are dedicated to delivering exceptional service and exceeding expectations in everything we do.",
    },
    {
      image: "/cleaningImages/CV2.png",
      title: "Integrity",
      description:
        "We conduct our business with honesty, transparency, and ethical behavior.",
    },
    {
      image: "/cleaningImages/CV3.jpeg",
      title: "Teamwork",
      description:
        "We foster a collaborative and supportive work environment where every team member is valued.",
    },
    {
      image: "/cleaningImages/CV4.png",
      title: "Customer Focus",
      description:
        "We prioritize the needs and satisfaction of our clients above all else.",
    },
    {
      image: "/cleaningImages/CV5.png",
      title: "Continuous Growth",
      description:
        "We believe in constant learning and development, encouraging innovation and personal growth.",
    },
    {
      image: "/cleaningImages/CV6.jpg",
      title: "Professionalism",
      description:
        "We maintain the highest standards of professionalism in our conduct and communication.",
    },
    {
      image: "/cleaningImages/CV7.jpg",
      title: "Innovation",
      description: "We embrace innovation and continuous improvement.",
    },
    {
      image: "/cleaningImages/CV8.webp",
      title: "Sustainability",
      description:
        "We are committed to environmental sustainability and responsible stewardship of natural resources.",
    },
    {
      image: "/cleaningImages/CV9.jpg",
      title: "Safety",
      description: "We prioritize the safety and well-being of our employees and clients.",
    },  {
      image: "/cleaningImages/CV!.webp",
      title: "Excellence",
      description:
        "We are dedicated to delivering exceptional service and exceeding expectations in everything we do.",
    },
    {
      image: "/cleaningImages/CV2.png",
      title: "Integrity",
      description:
        "We conduct our business with honesty, transparency, and ethical behavior.",
    },
    {
      image: "/cleaningImages/CV3.jpeg",
      title: "Teamwork",
      description:
        "We foster a collaborative and supportive work environment where every team member is valued.",
    },
    {
      image: "/cleaningImages/CV4.png",
      title: "Customer Focus",
      description:
        "We prioritize the needs and satisfaction of our clients above all else.",
    },
    {
      image: "/cleaningImages/CV5.png",
      title: "Continuous Growth",
      description:
        "We believe in constant learning and development, encouraging innovation and personal growth.",
    },
    {
      image: "/cleaningImages/CV6.jpg",
      title: "Professionalism",
      description:
        "We maintain the highest standards of professionalism in our conduct and communication.",
    },
    {
      image: "/cleaningImages/CV7.jpg",
      title: "Innovation",
      description: "We embrace innovation and continuous improvement.",
    },
    {
      image: "/cleaningImages/CV8.webp",
      title: "Sustainability",
      description:
        "We are committed to environmental sustainability and responsible stewardship of natural resources.",
    },
    {
      image: "/cleaningImages/CV9.jpg",
      title: "Safety",
      description: "We prioritize the safety and well-being of our employees and clients.",
    },  {
      image: "/cleaningImages/CV!.webp",
      title: "Excellence",
      description:
        "We are dedicated to delivering exceptional service and exceeding expectations in everything we do.",
    },
    {
      image: "/cleaningImages/CV2.png",
      title: "Integrity",
      description:
        "We conduct our business with honesty, transparency, and ethical behavior.",
    },
    {
      image: "/cleaningImages/CV3.jpeg",
      title: "Teamwork",
      description:
        "We foster a collaborative and supportive work environment where every team member is valued.",
    },
    {
      image: "/cleaningImages/CV4.png",
      title: "Customer Focus",
      description:
        "We prioritize the needs and satisfaction of our clients above all else.",
    },
    {
      image: "/cleaningImages/CV5.png",
      title: "Continuous Growth",
      description:
        "We believe in constant learning and development, encouraging innovation and personal growth.",
    },
    {
      image: "/cleaningImages/CV6.jpg",
      title: "Professionalism",
      description:
        "We maintain the highest standards of professionalism in our conduct and communication.",
    },
    {
      image: "/cleaningImages/CV7.jpg",
      title: "Innovation",
      description: "We embrace innovation and continuous improvement.",
    },
    {
      image: "/cleaningImages/CV8.webp",
      title: "Sustainability",
      description:
        "We are committed to environmental sustainability and responsible stewardship of natural resources.",
    },
    {
      image: "/cleaningImages/CV9.jpg",
      title: "Safety",
      description: "We prioritize the safety and well-being of our employees and clients.",
    },
  ];

  // Clone the data to allow infinite scroll
  const allCoreValues = [...coreValuesData, ...coreValuesData];

  // Infinite scroll effect using GSAP
  useEffect(() => {
    const ctx = gsap.context(() => {
      scrollAnimationRef.current = gsap.to(cardsRef.current, {
        xPercent: -100 * (coreValuesData.length), // Move to scroll the entire list
        repeat: -1, // Infinite loop
        duration: 1000, // Adjust duration for scrolling speed
        ease: "linear",
        paused: !isScrolling, // Initially running, pauses on hover
      });
    });

    return () => ctx.revert();
  }, [isScrolling]);

  // Pause and resume scrolling smoothly
  const handleMouseEnter = () => {
    if (scrollAnimationRef.current) {
      scrollAnimationRef.current.pause();
    }
  };

  const handleMouseLeave = () => {
    if (scrollAnimationRef.current) {
      scrollAnimationRef.current.play();
    }
  };

  return (
    <div className="relative mt-10 bg-yellow-100">
      <div className="relative z-10 overflow-hidden">
        {/* Background container for OUR CORE VALUES section */}
        <div className="bg-yellow-50 pt-10 pb-60">
          <div className="md:px-10 px-5 text-center text-customGolden md:text-3xl text-xl font-bold my-5">
            OUR CORE VALUES
            <div className="mx-auto mt-2 w-[120px] h-[2px] bg-customGolden rounded-full"></div>
          </div>
          <p className="text-customGrey font-semibold md:text-lg text-md  text-center">
            These core values guide our decisions, actions, and relationships,
            shaping the culture and identity of Swayz Cleaning Services.
          </p>
        </div>

        <div
          className="flex space-x-6 md:py-20 py-10 px-5 -mt-60"
          ref={cardsRef}
         
        >
          {allCoreValues.map((value, index) => (
            <div
              key={index}
              className={`relative flex-shrink-0 rounded-3xl hover:cursor-pointer overflow-hidden group ${index % 2 === 0 ? "md:mt-14" : ""}`}
              style={{ width: "256px", height: "320px" }} // consistent sizing for images
            >
              {/* Image */}
              <img
                src={value.image}
                alt={value.title}
                onMouseEnter={handleMouseEnter} // Stop scrolling on hover
                onMouseLeave={handleMouseLeave} // Resume scrolling on mouse leave
                className="w-full h-full object-cover hover:cursor-pointer rounded-3xl transition-transform duration-300 transform group-hover:scale-105"
              />

              {/* Always visible title */}
              <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-gray-800 to-transparent h-24 flex items-end justify-center">
                <h3 className="font-bold text-white text-lg text-center mb-2">
                  {value.title}
                </h3>
              </div>

              {/* Hidden description that appears on hover */}
              <div className="absolute inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-center">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
