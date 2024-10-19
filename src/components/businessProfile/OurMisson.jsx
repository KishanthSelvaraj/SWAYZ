import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const OurMisson = () => {
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
    <div className="relative ">
      {/* SVG for the curved background */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg
          className="w-full"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#e5f0e5" // Adjust this to match your desired background color
            d="M0,160L60,165.3C120,171,240,181,360,192C480,203,600,213,720,202.7C840,192,960,160,1080,160C1200,160,1320,192,1380,208L1440,224V320H1380C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320H0V160Z"
          />
        </svg>
      </div>

      <div ref={sectionRef} className="relative w-full bg-yellow-100 p-8 z-10 lg:py-20 py-10">
        <div className="animated md:px-10 px-5 text-center text-customGolden md:text-3xl text-xl font-bold my-4">
          OUR MISSION
          <div className="mx-auto mt-2 w-[120px] h-[2.5px] bg-customGolden rounded-full"></div>
        </div>

        {/* Description */}
        <p className="text-customBlack font-bold text-sm md:text-lg text-center my-5 lg:mx-56 mx-5 animated">
          At Swayz Security Services our mission is to strive towards perfection
          and be recognized as the leader in providing comprehensive security
          solutions.
        </p>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Section */}
          <div ref={cardsRef} className="w-full md:w-1/2 flex justify-center items-center rounded-md animated">
            <img
              src="/timeline1.jpg"
              alt="Supply Chain & Distribution"
              className="w-full h-auto lg:p-10 border-none my-3"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 lg:p-10 flex justify-center items-center">
            <div className="text-center animated">
              <p className="text-customGrey  font-semibold pt-2 text-justify text-md md:text-sm lg:text-lg">
                Our Mission is driven by a deep commitment to protecting our
                clients, their assets, and their peace of mind. We understand the
                importance of maintaining a safe and secure environment, whether
                it's for individuals, businesses, or communities. In order to
                fulfill our mission, we focus on several key aspects. We
                prioritize staying up-to-date with the latest security
                technologies and solutions.
              </p>
              <p className="text-customGrey  font-semibold pt-2 text-justify text-md md:text-sm lg:text-lg">
                Finally, we are committed to continuous training and improvement
                in order to enhance the professionalism and knowledge of our
                security personnel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMisson;
