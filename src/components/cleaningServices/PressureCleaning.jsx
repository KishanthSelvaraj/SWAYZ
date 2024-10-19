import React, { useEffect, useRef } from "react";
import {
  GiMagnifyingGlass,
  GiWaterRecycling,
  GiOilDrum,
  GiWaterfall,
  GiMagicBroom,
} from "react-icons/gi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PressureCleaning = () => {
  const sectionRef = useRef(null); // Reference for the section to animate
  const cardsRef = useRef(null); // Reference for the cards container

  useEffect(() => {
    // GSAP animation for the Pressure Cleaning section
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%", // Start when the top of the section is at 80% of the viewport height
        toggleActions: "play none none reverse", // Play on enter, reverse on leave
        once: true, // Animation triggers only once
      },
    });

    // Title animation
    tl.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 }, // Start state
      { opacity: 1, y: 0, duration: 0.5 } // End state
    );

    // Card animations
    gsap.fromTo(
      cardsRef.current.children,
      { x: -100, opacity: 0 }, // Start state for each card
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.3,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%", // Trigger when the top of the cards is at 80% of the viewport height
          toggleActions: "play none none reverse",
          once: false, // Animation triggers only once
        },
      }
    );

    // Cleanup to kill the ScrollTrigger
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Define the card content as an array of objects
  const services = [
    {
      icon: <GiMagnifyingGlass className="text-4xl" />,
      title: "Surface Preparation",
      description:
        "Before high-pressure cleaning, our team inspects the surface to assess the level of dirt and any specific areas of concern. We may pre-treat heavily soiled areas or apply environmentally friendly cleaning solutions to enhance the cleaning process.",
    },
    {
      icon: <GiWaterRecycling className="text-4xl" />,
      title: "High-Pressure Washing",
      description:
        "Using state-of-the-art high-pressure cleaning equipment, we apply controlled streams of water at high pressure to the surface, effectively dislodging dirt, debris, and contaminants, leaving the surface clean and refreshed.",
    },
    {
      icon: <GiOilDrum className="text-4xl" />,
      title: "Stain Removal",
      description:
        "High-pressure cleaning is especially effective for removing tough stains, such as oil stains, graffiti, algae, and mold. Our technicians adjust the pressure and nozzle settings to target specific stains without damaging the underlying surface.",
    },
    {
      icon: <GiWaterfall className="text-4xl" />,
      title: "Rinse and Finishing",
      description:
        "After high-pressure cleaning, the surface is thoroughly rinsed to remove any remaining debris and cleaning solutions. We take care to ensure that surrounding areas are protected from overspray and that water runoff is properly managed.",
    },
  ];

  return (
    <div>
      <section ref={sectionRef} className="md:my-16 mt-5">
        <div className="py-12 bg-gradient-to-b relative md:mx-20 mx-5 my-10 rounded-2xl from-yellow-600 via-yellow-700 to-yellow-800 text-white p-6">
          {/* Image Background */}
          <div
            className=" top-0 left-0 h-[750px] absolute md:w-96 w-full bg-cover bg-center rounded-2xl opacity-30"
            style={{ backgroundImage: "url('/cleaningImages/vector8.png')" }}
          ></div>
          <div className="rounded-2xl md:px-8 mt-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div></div>
              <div>
                <h2 className="font-heading mb-4 flex items-center text-white px-4 py-2 rounded-lg gap-2 text-xl md:text-3xl font-bold tracking-widest uppercase title-font">
                  <span>
                    <GiMagicBroom className="flex text-3xl" />
                  </span>
                  High-Pressure Cleaning
                </h2>
                <p className="text-white font-semibold text-lg md:mb-20 mb-10 ml-3">
                  In addition to our standard cleaning services,
                  <span className="font-bold text-base">
                    {" "}
                    Swayz Cleaning Services{" "}
                  </span>
                  offers high-pressure cleaning for exterior surfaces,
                  driveways, sidewalks, parking lots, and other areas requiring{" "}
                  <span className="text-customBlue font-bold">
                    deep cleaning
                  </span>{" "}
                  and{" "}
                  <span className="text-customBlue font-bold">
                    stain removal
                  </span>
                  . Our high-pressure cleaning equipment utilizes powerful jets
                  of water to effectively remove dirt, grime, mold, mildew,
                  grease, and stubborn stains.
                </p>
              </div>
            </div>
            <div
              ref={cardsRef}
              className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mt-6"
            >
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start card border border-gray-400 rounded-2xl p-4 transition-transform transform hover:scale-105"
                >
                  <div className="flex items-center mb-2 text-yellow-900">
                    <div className="h-16 w-16 flex items-center justify-center bg-yellow-600 rounded-full">
                      {service.icon}
                    </div>
                  </div>
                  <p className="font-heading text-xl leading-6 font-bold text-white">
                    {service.title}
                  </p>
                  <p className="mt-2 font-semibold text-base text-white">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PressureCleaning;
