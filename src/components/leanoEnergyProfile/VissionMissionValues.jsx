import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const VisionMissionValues = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    itemsRef.current.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, scale: 0.5, rotate: -10 },
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          duration: 0.5,
          delay: index * 0.2,
        }
      );
    });
  }, []);

  const items = [
    {
      title: "OUR VISION",
      content:
        "Our company is developed on sustainable values and creating empowerment opportunities in South Africa, whilst striving to promote sustainable energy.",
    },
    {
      title: "OUR MISSION",
      content:
        "Leano Energy aims to enter the green energy market, by promoting renewable energy together with high quality and affordable services.",
    },
    {
      title: "OUR VALUES",
      content:
        "Leano Energy conducts its business with integrity and is committed to meeting.",
    },
  ];

  return (
    <section className="pb-12 -mt-10 md:mt-0 bg-white sm:pb-16 lg:pb-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-xl md:text-4xl font-bold leading-tight text-customGolden font-pj">
            OUR VISION, MISSION AND VALUES
            <div className="mx-auto mt-2 md:w-[200px] w=[120px] h-[2px] bg-customGolden rounded-full"></div>

          </h2>
          <p className="mt-4 text-customGrey font-semibold md:text-lg text-sm leading-7 sm:mt-8">
            Empowering creativity and innovation through technology.
          </p>
        </div>

        <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0">
          {items.map((item, index) => (
            <div
              key={item.title}
              ref={(el) => (itemsRef.current[index] = el)}
              className="md:p-8 lg:p-14"
            >
              <svg
                className="mx-auto"
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {index === 0 && (
                  <>
                    <path
                      d="M23 1C10.3 1 1 10.3 1 23s9.3 22 22 22 22-9.3 22-22S35.7 1 23 1z"
                      stroke="#C5975B"
                      strokeWidth="2"
                    />
                    <path d="M23 3v20" stroke="#C5975B" strokeWidth="2" />
                    <path d="M23 23h20" stroke="#C5975B" strokeWidth="2" />
                  </>
                )}
                {index === 1 && (
                  <>
                    <path
                      d="M1 1h44v44H1V1z"
                      stroke="#C5975B"
                      strokeWidth="2"
                    />
                    <path d="M22 5v36" stroke="#C5975B" strokeWidth="2" />
                    <path d="M5 22h36" stroke="#C5975B" strokeWidth="2" />
                  </>
                )}
                {index === 2 && (
                  <>
                    <path
                      d="M21 1L1 41h40L21 1z"
                      stroke="#C5975B"
                      strokeWidth="2"
                    />
                    <path d="M21 1v40" stroke="#C5975B" strokeWidth="2" />
                  </>
                )}
              </svg>
              <h3 className="mt-12 text-xl md:text-3xl font-bold text-customGolden font-pj">
                {item.title}
              </h3>
              <p className="mt-5 text-customGrey font-semibold text-md">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionMissionValues;
