import React, { useEffect, useRef } from "react";
import {
  FaPalette,
  FaSeedling,
  FaLeaf,
  FaBroom,
  FaWater,
  FaMountain,
} from "react-icons/fa";
import { MdGrass } from "react-icons/md"; // Grass icon
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const services = [
  {
    icon: <MdGrass className="bg-orange-50 text-customGolden text-3xl" />,
    title: "Lawn Maintenance",
    description:
      "Regular mowing, edging, and trimming to keep lawns neat and manicured.",
  },
  {
    icon: <FaPalette className="bg-orange-50 text-customGolden text-3xl" />,
    title: "Garden Design and Installation",
    description:
      "Planning and creating aesthetically pleasing garden landscapes tailored to clients’ preferences and property specifications.",
  },
  {
    icon: <FaSeedling className="bg-orange-50 text-customGolden text-3xl" />,
    title: "Planting and Pruning",
    description:
      "Expert planting of flowers, shrubs, trees, and other greenery, along with regular pruning to promote healthy growth and maintain desired shapes.",
  },
  {
    icon: <FaLeaf className="bg-orange-50 text-customGolden text-3xl" />,
    title: "Weed Control",
    description:
      "Removal of weeds from garden beds and lawns, as well as application of weed control measures to prevent their regrowth.",
  },
  {
    icon: <FaBroom className="bg-orange-50 text-customGolden text-3xl" />,
    title: "Seasonal Cleanup",
    description:
      "Fall and spring cleanup services, including leaf removal, debris clearing, and preparing gardens for seasonal changes.",
  },
  {
    icon: <FaWater className="bg-orange-50 text-customGolden text-3xl" />,
    title: "Irrigation Maintenance",
    description:
      "Inspection, repair, and maintenance of irrigation systems to ensure proper functioning and efficient water usage.",
  },
  {
    icon: <FaMountain className="bg-orange-50 text-customGolden text-3xl" />,
    title: "Hardscape Maintenance",
    description:
      "Cleaning and maintenance of hardscape features such as patios, walkways, and retaining walls to keep them clean, safe, and visually appealing.",
  },
];

const LandscapingServices = () => {
  const servicesRef = useRef(null); // Reference for the services container

  useEffect(() => {
    // GSAP animation for the Landscaping Services cards
    const services = servicesRef.current.children;

    gsap.fromTo(
      services,
      { y: 50, opacity: 0 }, // Start state for each card
      {
        y: 0,
        opacity: 1,
        duration: 0.2,
        ease: "bounce", // Smooth easing function
        stagger: 0.3, // Stagger animation
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 60%", // Trigger when the top of the services is at 80% of the viewport height
          toggleActions: "play none none reverse",
          once: false, // Animation triggers only once
        },
      }
    );

    return () => {
      // Cleanup to kill the ScrollTrigger
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="mx-auto mb-20 mt-14">
      <div className="md:px-10 px-5 uppercase text-center text-customGolden md:text-3xl text-xl font-bold">
        Landscaping & Gardening
        <div className="mx-auto mt-2 w-[120px] h-[2.5px] bg-customGolden rounded-full"></div>
      </div>
      {/* Description */}
      <p className="text-customGrey font-bold md:text-lg text-md text-center my-5 lg:mx-96 mx-5">
        Our Landscaping and Gardening services are designed to enhance the
        beauty and functionality of outdoor spaces, creating inviting
        environments that complement our clients properties.
      </p>

      <div
        ref={servicesRef}
        className="grid md:grid-cols-2 pt-10 md:px-10 px-5 lg:grid-cols-4 gap-5 mt-10 p-2"
      >
        {/* First row with four cards */}
        {services.slice(0, 4).map((service, index) => (
          <div
            key={index}
            className="p-4 bg-white shadow border rounded-[10px] transition-transform transform hover:scale-105"
          >
            <button className="p-2 bg-orange-50 text-customGolden rounded-[10px] cursor-default">
              {service.icon}
            </button>
            <p className="md:text-xl text-lg text-[#252432] my-2.5 font-bold">{service.title}</p>
            <p className="md:text-base text-sm text-customGrey font-semibold">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 md:px-10 px-5 lg:grid-cols-3 gap-5 p-2 mt-1.5">
        {/* Second row with three cards */}
        {services.slice(4, 7).map((service, index) => (
          <div
            key={index}
            className="p-4 bg-white shadow border rounded-[10px] transition-transform transform hover:scale-105"
          >
            <button className="p-2 bg-orange-50 text-customGolden rounded-[10px] cursor-default">
              {service.icon}
            </button>
            <p className="md:text-xl text-lg font-bold text-[#252432] my-2.5">{service.title}</p>
            <p className="md:text-base text-sm text-customGrey font-semibold">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandscapingServices;
