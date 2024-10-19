import React, { useEffect, useRef } from "react";

import { FaIndustry } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
import { GrUserExpert } from "react-icons/gr";
import { RiVipLine } from "react-icons/ri";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
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
      <section ref={sectionRef} className="lg:py-20 py-10">
        <div className="py-12 bg-white ">
          <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4">
            <div className="md:px-10 px-5 text-center text-customGolden md:text-3xl text-xl font-bold mb-10">
              ABOUT SWAYZ SECURITY SERVICES
              <div className="mx-auto mt-2 w-[120px] h-[2.5px] bg-customGolden rounded-full"></div>
            </div>

            <div className="mt-10 overflow-hidden md:mx-5 mx-2">
              {" "}
              {/* Add overflow-hidden to prevent scroll issues */}
              <dl
                ref={cardsRef}
                className="grid grid-cols-1 md:grid-cols-2 gap-10"
              >
                <div className="flex items-start card">
                  <div className="flex-shrink-0">
                    <div className="h-16 w-16 flex justify-center rounded-full bg-primary-500">
                      <MdOutlineSecurity className="text-customGolden text-4xl" />
                    </div>
                  </div>
                  <div className="md:ml-4">
                    <p className="font-heading  leading-6 font-bold text-customGrey md:text-2x text-xl">
                      Comprehensive Security and Risk Assessment Services
                    </p>
                    <p className="mt-2 font-semibold   text-sm md:text-base text-justify text-customGrey">
                      We offer a wide range of services to meet the diverse
                      needs of our clients. In addition to providing
                      comprehensive security services, we specialize in
                      professional research and security analysis. This enables
                      us to identify risks and vulnerabilities, allowing us to
                      develop tailored security strategies for our clients.{" "}
                    </p>
                  </div>
                </div>

                <div className="flex items-start card">
                  <div className="flex-shrink-0">
                    <div className="h-16 w-16 flex justify-center rounded-full bg-primary-500">
                      <GrUserExpert className="text-customGolden text-4xl" />
                    </div>
                  </div>
                  <div className="md:ml-4">
                    <p className="font-heading leading-6 font-bold text-customGrey md:text-2x text-xl">
                      Tailored Solutions and Expert Equipment Advice
                    </p>
                    <p className="mt-2 font-semibold  text-sm md:text-base text-justify text-customGrey">
                      Understanding that each client has unique security
                      requirements, we conduct thorough assessments to determine
                      the most effective solutions. We also provide expert
                      advice on security systems, offering cutting-edge
                      detection equipment such as alarms, safes, and other
                      safety materials to enhance protection.
                    </p>
                  </div>
                </div>

                <div className="flex items-start card">
                  <div className="flex-shrink-0">
                    <div className="h-16 w-16 flex justify-center rounded-full bg-primary-500">
                      <FaIndustry className="text-customGolden text-4xl" />
                    </div>
                  </div>
                  <div className="md:ml-4">
                    <p className="font-heading leading-6 font-bold text-customGrey md:text-2x text-xl">
                      Security Solutions for Diverse Industries
                    </p>
                    <p className="mt-2 text-justify font-semibold    text-sm md:text-base text-customGrey">
                      With our expertise and experience, we understand the
                      unique challenges faced by various industries. Shopping
                      centres, for instance, require comprehensive surveillance
                      and security due to their size and potential for large
                      crowds. Our services extend to mining complexes and other
                      high-risk areas, ensuring top-notch protection.
                    </p>
                  </div>
                </div>

                <div className="flex items-start card">
                  <div className="flex-shrink-0">
                    <div className="h-16 w-16 flex justify-center rounded-full bg-primary-500">
                      <RiVipLine className="text-customGolden text-4xl" />
                    </div>
                  </div>
                  <div className="md:ml-4">
                    <p className="font-heading leading-6 font-bold text-customGrey md:text-2x text-xl">
                      VIP and Tourist Protection Services
                    </p>
                    <p className="mt-2 text-justify font-semibold    text-sm md:text-base text-customGrey">
                      We offer VIP services and close protection for
                      high-profile individuals or groups. Safety is our top
                      priority, which is why we also provide transportation and
                      protection services for tourists visiting the country. Our
                      specialized approach addresses diverse security threats,
                      from common crime to industrial and state-related
                      offenses.
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

export default About;
