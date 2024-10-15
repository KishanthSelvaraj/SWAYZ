import React, { useEffect, useRef } from "react";
import {
  GiMagnifyingGlass,
  GiWaterRecycling,
  GiOilDrum,
  GiWaterfall,
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

  return (
    <div>
      <section ref={sectionRef} className="md:mt-16 mt-5">
        <div className="py-12 bg-yellow-50 bg-opacity-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="font-heading mb-4 bg-orange-100 text-orange-800 px-4 py-2 rounded-lg inline-block text-xs font-semibold tracking-widest uppercase title-font">
                High-Pressure Cleaning
              </h2>
              <p className="text-customGrey font-semibold text-sm">
                In addition to our standard cleaning services, 
                <span className="font-bold text-customGrey text-base"> Swayz Cleaning Services </span>
                offers high-pressure cleaning for exterior surfaces, driveways, sidewalks, parking lots, and other areas requiring <span className="text-customBlue font-bold">deep cleaning</span> and <span className="text-customBlue font-bold">stain removal</span>. Our high-pressure cleaning equipment utilizes powerful jets of water to effectively remove dirt, grime, mold, mildew, grease, and stubborn stains.
              </p>
            </div>

            <div className="mt-10 overflow-hidden"> {/* Add overflow-hidden to prevent scroll issues */}
              <dl ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start card">
                  <div className="flex-shrink-0">
                    <div className="h-16 w-16 flex justify-center rounded-full bg-primary-500">
                      <GiMagnifyingGlass className="text-customGolden text-4xl" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="font-heading text-lg leading-6 font-bold text-gray-700">
                      Surface Preparation
                    </p>
                    <p className="mt-2 font-semibold text-sm text-customGrey">
                      Before high-pressure cleaning, our team inspects the surface to assess the level of dirt and any specific areas of concern. We may <span className="font-bold text-gray-700">pre-treat heavily soiled areas</span> or apply <span className="font-bold text-customBlue">environmentally friendly cleaning solutions</span> to enhance the cleaning process.
                    </p>
                  </div>
                </div>

                <div className="flex items-start card">
                  <div className="flex-shrink-0">
                    <div className="h-16 w-16 flex justify-center rounded-full bg-primary-500">
                      <GiWaterRecycling className="text-customGolden text-4xl" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="font-heading text-lg leading-6 font-bold text-gray-700">
                      High-Pressure Washing
                    </p>
                    <p className="mt-2 font-semibold  text-sm text-customGrey">
                      Using <span className="font-bold text-gray-700">state-of-the-art high-pressure cleaning equipment</span>, we apply controlled streams of water at high pressure to the surface, effectively dislodging <span className="text-customBlue font-bold">dirt, debris, and contaminants</span>, leaving the surface clean and refreshed.
                    </p>
                  </div>
                </div>

                <div className="flex items-start card">
                  <div className="flex-shrink-0">
                    <div className="h-16 w-16 flex justify-center rounded-full bg-primary-500">
                      <GiOilDrum className="text-customGolden text-4xl" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="font-heading text-lg leading-6 font-bold text-gray-700">
                      Stain Removal
                    </p>
                    <p className="mt-2  font-semibold  text-sm text-customGrey">
                      High-pressure cleaning is especially effective for removing <span className="font-bold text-gray-700">tough stains</span>, such as <span className="text-customBlue font-bold">oil stains, graffiti, algae, and mold</span>. Our technicians adjust the pressure and nozzle settings to target specific stains without damaging the underlying surface.
                    </p>
                  </div>
                </div>

                <div className="flex items-start card">
                  <div className="flex-shrink-0">
                    <div className="h-16 w-16 flex justify-center rounded-full bg-primary-500">
                      <GiWaterfall className="text-customGolden text-4xl" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="font-heading text-lg leading-6 font-bold text-gray-700">
                      Rinse and Finishing
                    </p>
                    <p className="mt-2  font-semibold  text-sm text-customGrey">
                      After high-pressure cleaning, the surface is thoroughly rinsed to remove any remaining debris and cleaning solutions. We take care to ensure that <span className="font-bold text-gray-700">surrounding areas are protected</span> from overspray and that water runoff is properly managed.
                    </p>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PressureCleaning;
