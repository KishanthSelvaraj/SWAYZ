import React, { useEffect, useRef, useState } from "react";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const CleaningHomePage = () => {
  const navigate = useNavigate();
  const statsRef = useRef(null);
  const contentRef = useRef(null);
  const [isCounting, setIsCounting] = useState(false);
  const statistics = [
    { value: 10, label: "Years of Experience" },
    { value: 500, label: "Projects Successfully Completed" },
    { value: 100, label: "Satisfaction Guaranteed" },
    { value: 50, label: "Expert Cleaners On-Call" },
  ];

  useEffect(() => {
    const statsAnimation = gsap.fromTo(
      statsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
          onEnter: () => startCounting(),
        },
      }
    );

    const contentAnimation = gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Cleanup function to kill the animations on component unmount
    return () => {
      statsAnimation.kill();
      contentAnimation.kill();
    };
  }, []);

  const startCounting = () => {
    if (!isCounting) {
      setIsCounting(true);
      statistics.forEach((stat, index) => {
        const target = statsRef.current.children[index].firstChild; // The <h2> element
        let count = 0;
        const increment = Math.ceil(stat.value / 100); // Increment based on value to make it smoother
        const duration = 2000; // Total duration for counting

        const countInterval = setInterval(() => {
          count += increment;
          if (count > stat.value) count = stat.value;
          target.innerHTML = count + "+";

          if (count === stat.value) {
            clearInterval(countInterval);
          }
        }, duration / (stat.value / increment));
      });
    }
  };

  return (
    <>
      {/* Statistics Section */}
      <div
        className="md:col-span-2 md:my-16 my-10 grid md:grid-cols-4 gap-4"
        ref={statsRef}
      >
        {statistics.map((stat, index) => (
          <div key={index} className="text-center">
            <h2 className="md:text-[80px] text-[67px] font-extrabold text-customGolden">
              {stat.value}
            </h2>
            <p className="md:text-lg font-semibold text-customGrey text-base">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Content Section */}
      <div className="grid md:grid-cols-2 items-center gap-8" ref={contentRef}>
        <div className="">
          <video
            src="/cleaningImages/homeGif.mp4"
            alt="Home-Video"
            className="w-96 h-96 object-cover mx-auto"
            autoPlay
            loop
            muted
          />
        </div>
        <div className="md:p-8 px-5">
          <h1 className="md:text-3xl text-xl font-bold mb-4">
            Tired of Dealing with Messy Spaces?
          </h1>
          <p className="md:text-2xl font-semibold text-customGolden mb-4">
            You’re in the Right Place.
          </p>
          <p className="md:text-lg text-base font-semibold text-customGrey mb-6">
            Keeping your surroundings clean can feel overwhelming, especially
            with today's busy schedules. Don’t let the stress of cleaning weigh
            you down. Whether it’s your home, office, or a special event, we’ve
            got it covered.
          </p>
          <p className="md:text-lg text-base font-semibold">
            Relax, Let Us Handle the Dirty Work!
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-8">
            <div className="flex items-center">
              <FaCheck className="text-green-500 mr-2" />
              <span className="md:text-lg text-base font-semibold text-customGrey">
                Commercial Cleaning
              </span>
            </div>
            <div className="flex items-center">
              <FaCheck className="text-green-500 mr-2" />
              <span className="md:text-lg text-base font-semibold text-customGrey">
                Residential Cleaning
              </span>
            </div>
            <div className="flex items-center">
              <FaCheck className="text-green-500 mr-2" />
              <span className="md:text-lg text-base font-semibold text-customGrey">
                Specialized Services
              </span>
            </div>
            <div
              className="flex items-center md:ml-10 bg-customGolden cursor-pointer rounded-lg w-fit px-2 py-1 text-white"
              onClick={() => navigate("/cleaning-services")}
            >
              <span className="md:text-md text-base font-semibold text-white">
                Know More
              </span>
              <FaArrowRight className="text-white ml-2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CleaningHomePage;
