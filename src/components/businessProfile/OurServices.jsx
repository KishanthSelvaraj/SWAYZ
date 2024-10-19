import React, { useEffect, useRef } from "react";
import { MdDataSaverOff } from "react-icons/md";
import { PiMonitorFill } from "react-icons/pi";
import { GrChatOption } from "react-icons/gr";
import { GoReport } from "react-icons/go";
import { FaDatabase } from "react-icons/fa";
import { SlEnvolopeLetter } from "react-icons/sl";
import { IoIosWater } from "react-icons/io";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const OurServices = () => {
  const servicesRef = useRef(null); // Reference for the services container

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger); // Register the ScrollTrigger plugin

    // GSAP animation for the services cards
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
          start: "top 60%", // Trigger when the top of the services is at 60% of the viewport height
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
    <div>
      {/* Carousel content alternate start */}
      <div className="bg-white px-5 lg:py-20 py-10">
        <div className="container-lg container-fluid md:px-20 lg:px-30 xl:px-30 ">
          <div className="md:px-10 px-5 text-center text-customGolden md:text-3xl text-xl font-bold mb-4">
            OUR SERVICES
            <div className="mx-auto mt-2 w-[120px] h-[2.5px] bg-customGolden rounded-full"></div>
          </div>

          {/* Description */}
          <p className="text-customGrey text-center font-bold text-sm md:text-lg  my-5 lg:mx-56 mx-5">
            We are proud to offer a range of comprehensive services to address
            the ever-growing need for cybersecurity and protection against malicious activities in the cyberspace.
            {/*  Our team of highly skilled
            professionals specializes in various areas of cybersecurity,
            including tactical response and incident management. We understand
            the challenges faced by organizations in detecting and mitigating
            threats, which is why we offer offsite monitoring and surveillance
            system installations. */}
          </p>

          {/* Grid layout starts here */}
          <div ref={servicesRef} className="grid grid-cols-1 pt-5 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="animated bg-white rounded-md shadow p-6 text-center flex flex-col items-center justify-center">
              <MdDataSaverOff className="w-16 h-16 mb-4 text-customGolden" />
              <h4 className="text-lg font-bold text-customGolden mb-2">CLOUD</h4>
              <p className="text-customGray">
                Safeguard your valuable data and applications stored on cloud platforms.
              </p>
            </div>
            <div className="animated bg-customGolden rounded-md shadow p-6 text-center flex flex-col items-center justify-center">
              <FaDatabase className="w-16 h-16 mb-4 text-white" />
              <h4 className="text-lg font-bold text-white mb-2">CONSULTING</h4>
              <p className="text-customBlack">
                Expert consulting services offering tailored solutions.
              </p>
            </div>
            <div className="animated bg-white rounded-md shadow p-6 text-center flex flex-col items-center justify-center">
              <GrChatOption className="w-16 h-16 mb-4 text-customGolden" />
              <h4 className="text-lg font-bold text-customGolden mb-2">ANALYTICS DATA</h4>
              <p className="text-customGray">
                Embrace data with our Analytics and Robotic Process Automation solutions.
              </p>
            </div>
            <div className="animated bg-customGolden rounded-md shadow p-6 text-center flex flex-col items-center justify-center">
              <GoReport className="w-16 h-16 mb-4 text-white" />
              <h4 className="text-lg font-bold text-white mb-2">PENETRATION TESTING</h4>
              <p className="text-customBlack">
                Fortify your defenses by simulating real-world cyber-attacks.
              </p>
            </div>
            <div className="animated bg-white rounded-md shadow p-6 text-center flex flex-col items-center justify-center">
              <IoIosWater className="w-16 h-16 mb-4 text-customGolden" />
              <h4 className="text-lg font-bold text-customGolden mb-2">PAYMENT SOLUTIONS</h4>
              <p className="text-customGray">
                Secure and innovative solutions to simplify transactions.
              </p>
            </div>
            <div className="animated bg-customGolden rounded-md shadow p-6 text-center flex flex-col items-center justify-center">
              <SlEnvolopeLetter className="w-16 h-16 mb-4 text-white" />
              <h4 className="text-lg font-bold text-white mb-2">INDUSTRIAL AUTOMATION</h4>
              <p className="text-customBlack">
                Bringing unparalleled efficiency to your manufacturing processes.
              </p>
            </div>
            <div className="animated bg-white rounded-md shadow p-6 text-center flex flex-col items-center justify-center">
              <MdDataSaverOff className="w-16 h-16 mb-4 text-customGolden" />
              <h4 className="text-lg font-bold text-customGolden mb-2">SECURITY OPERATIONS CENTER (SOC)</h4>
              <p className="text-customGray">
                Frontline defense against cyber threats.
              </p>
            </div>
            <div className="animated bg-customGolden rounded-md shadow p-6 text-center flex flex-col items-center justify-center">
              <GrChatOption className="w-16 h-16 mb-4 text-white" />
              <h4 className="text-lg font-bold text-white mb-2">DRONE (UAV) SERVICES</h4>
              <p className="text-customBlack">
                Assisting various industries including mining, construction, and more.
              </p>
            </div>
            <div className="animated bg-white rounded-md shadow p-6 text-center flex flex-col items-center justify-center">
              <PiMonitorFill className="w-16 h-16 mb-4 text-customGolden" />
              <h4 className="text-lg font-bold text-customGolden mb-2">SECURITY SYSTEMS</h4>
              <p className="text-customGray">
                Designing and maintaining state-of-the-art security solutions.
              </p>
            </div>
            <div className="animated bg-customGolden rounded-md shadow p-6 text-center flex flex-col items-center justify-center">
              <IoIosWater className="w-16 h-16 mb-4 text-white" />
              <h4 className="text-lg font-bold text-white mb-2">RESPONSE ARMED</h4>
              <p className="text-customBlack">
                24/7 highly trained armed response team for emergencies.
              </p>
            </div>
            <div className="animated bg-white rounded-md shadow p-6 text-center flex flex-col items-center justify-center">
              <MdDataSaverOff className="w-16 h-16 mb-4 text-customGolden" />
              <h4 className="text-lg font-bold text-customGolden mb-2">SECURITY CYBER</h4>
              <p className="text-customGray">
                Comprehensive cyber security services for today's digital landscape.
              </p>
            </div>
            <div className="animated bg-customGolden rounded-md shadow p-6 text-center flex flex-col items-center justify-center">
              <GoReport className="w-16 h-16 mb-4 text-white" />
              <h4 className="text-lg font-bold text-white mb-2">GUARDING & VIP</h4>
              <p className="text-customBlack">
                Trusted personnel for asset, personnel, and high-profile client protection.
              </p>
            </div>
          </div>
          {/* Grid layout ends here */}
        </div>
      </div>
      {/* Carousel content alternate End */}
    </div>
  );
};

export default OurServices;
