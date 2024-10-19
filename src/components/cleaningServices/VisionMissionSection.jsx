import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FcOvertime, FcPositiveDynamic } from "react-icons/fc";

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const VisionMissionSection = () => {
  const sectionRef = useRef(null); // Reference for the main section
  const missionRef = useRef(null);  // Reference for the mission card
  const visionRef = useRef(null);   // Reference for the vision card

  // Refs for mission card elements
  const missionIconRef = useRef(null);
  const missionTextRef = useRef(null);
  const missionDescRef = useRef(null); // Ref for mission description

  // Refs for vision card elements
  const visionIconRef = useRef(null);
  const visionTextRef = useRef(null);
  const visionDescRef = useRef(null); // Ref for vision description

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation for the title and description of the goals and values section
      gsap.fromTo(
        [sectionRef.current.querySelector('.section-title'), sectionRef.current.querySelector('.section-description')],
        { y: 50, opacity: 0 }, // Start state
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%", // Adjust this to control when the animation starts
            once: true, // Only trigger once
          },
        }
      );

      // Animation for the mission card elements
      gsap.fromTo(
        [missionIconRef.current, missionTextRef.current, missionDescRef.current],
        { y: 100, opacity: 0 }, // Start state
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2, // Stagger the animations
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%", // Adjust this to control when the animation starts
            once: true, // Only trigger once
          },
        }
      );

      // Animation for the vision card elements
      gsap.fromTo(
        [visionIconRef.current, visionTextRef.current, visionDescRef.current],
        { y: 100, opacity: 0 }, // Start state
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2, // Stagger the animations
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%", // Adjust this to control when the animation starts
            once: true, // Only trigger once
          },
        }
      );
    }, sectionRef); // context scope

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <div ref={sectionRef} className="overflow-hidden"> {/* Add ref to the main section for the animation trigger */}
      {/* 2nd section */}
      <div className="bg-customGrey1">
        <div className="px-5 md:px-10 py-16">
          <div className="font-bold uppercase md:text-3xl text-xl section-title"> {/* Added class for targeting */}
            Our Goals and Values
          </div>
          <div className="md:text-base text-sm font-opensans text-[#808080] font-semibold section-description"> {/* Added class for targeting */}
            Committed to excellence, our vision drives us to set the standard in
            the industry, while our mission focuses on delivering quality
            services that exceed client expectations.
          </div>
        </div>
      </div>
      <div className="grid gap-5 -mt-10 md:grid-cols-2 md:px-10 px-5">
        {/* Mission Section */}
        <div
          ref={missionRef}
          className="flex flex-col p-6 transition-all duration-500 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl lg:flex-row lg:space-y-0 lg:space-x-6"
        >
          <div ref={missionIconRef}>
            <FcOvertime className="text-6xl text-customGolden" />
          </div>
          <div className="flex-1">
            <h5 ref={missionTextRef} className="mb-3 text-lg text-customGolden uppercase font-bold lg:text-2xl">
              Our Mission
            </h5>
            <p ref={missionDescRef} className="md:text-base text-sm text-customGrey font-semibold"> {/* Added ref for description */}
              At Swayz Cleaning Services, our mission is to elevate the standard
              of cleanliness in every space we touch. Through professionalism,
              integrity, and attention to detail, we aim to surpass our clients’
              expectations and create immaculate environments where people
              thrive.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div
          ref={visionRef}
          className="flex flex-col p-6 transition-all duration-500 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl lg:flex-row lg:space-y-0 lg:space-x-6"
        >
          <div ref={visionIconRef}>
            <FcPositiveDynamic className="text-5xl text-customGolden" />
          </div>
          <div className="flex-1">
            <h5 ref={visionTextRef} className="mb-3 text-lg text-customGolden uppercase font-bold lg:text-2xl">
              Our Vision
            </h5>
            <p ref={visionDescRef} className="md:text-base text-sm text-customGrey font-semibold"> {/* Added ref for description */}
              To be the leading provider of cleaning and landscaping services,
              renowned for our commitment to excellence, sustainability, and
              customer satisfaction. We strive to continually innovate and set
              new standards in quality, ensuring a cleaner, greener, and more
              vibrant environment for the communities we serve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMissionSection;
