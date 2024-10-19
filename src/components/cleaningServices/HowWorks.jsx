import React, { useEffect, useRef } from "react";
import {
  FaTasks,
  FaClipboardList,
  FaRegStar,
  FaShieldAlt,
  FaComments,
  FaTools,
} from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const content = [
  {
    id: 1,
    title: "Initial Assessment:",
    description:
      "Before beginning any cleaning project, we conduct a thorough initial assessment of the space. This allows us to understand the specific cleaning requirements, identify any areas of concern, and tailor our cleaning approach accordingly.",
    icon: <FaTasks className="text-3xl text-blue-600 transition-transform duration-300 hover:cursor-pointer hover:scale-110" />,
  },
  {
    id: 2,
    title: "Customized Cleaning Plan",
    description:
      "Based on the assessment findings and the client’s preferences, we develop a customized cleaning plan. This outlines the scope of work, the frequency of cleaning, and any special instructions or requests from the client.",
    icon: <FaClipboardList className="text-3xl text-green-600 transition-transform duration-300 hover:cursor-pointer hover:scale-110" />,
  },
  {
    id: 3,
    title: "Detail Cleaning",
    description:
      "Our team pays attention to detail, ensuring that no corner is overlooked. We clean and disinfect high-touch surfaces, such as doorknobs, light switches, and countertops, to minimize the spread of germs and maintain cleanliness.",
    icon: <FaRegStar className="text-3xl text-yellow-500 transition-transform duration-300 hover:cursor-pointer hover:scale-110" />,
  },
  {
    id: 4,
    title: "Quality Inspection",
    description:
      "After completing the cleaning process, a quality inspection is conducted to ensure that all cleaning tasks have been performed to our high standards. Any areas requiring additional attention are addressed promptly.",
    icon: <FaShieldAlt className="text-3xl text-red-600 transition-transform duration-300 hover:cursor-pointer hover:scale-110" />,
  },
  {
    id: 5,
    title: "Client Feedback",
    description:
      "We value feedback from our clients and encourage open communication throughout the cleaning process. Clients are invited to provide feedback on the quality of our service, and we take any suggestions or concerns seriously to continually improve our services.",
    icon: <FaComments className="text-3xl text-purple-600 transition-transform duration-300 hover:cursor-pointer hover:scale-110" />,
  },
  {
    id: 6,
    title: "Follow-Up and Maintenance",
    description:
      "We offer follow-up services to maintain the cleanliness of the space on a regular basis. Our team works closely with clients to establish cleaning schedules that meet their needs and ensure long-term satisfaction.",
    icon: <FaTools className="text-3xl text-orange-500 transition-transform duration-300 hover:cursor-pointer hover:scale-110" />,
  },
];

const HowWorks = () => {
  const listRef = useRef(null); // Reference for the list of items

  useEffect(() => {
    const items = gsap.utils.toArray(listRef.current.children);

    // Create a timeline for the animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: listRef.current,
        start: "top 70%", // Start animation when the top of the section is at 80% of the viewport height
        toggleActions: "play none none reverse", // Play on enter, reverse on leave
        once: false, // Animation triggers only once
      },
    });

    items.forEach((item, index) => {
      tl.fromTo(
        item,
        { opacity: 0, y: 30 }, // Start state
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.2, // Stagger each item by 0.2 seconds
        },
        index * 0.2 // Stagger the start time of each item
      );
    });

    return () => {
      // Cleanup to kill all ScrollTriggers
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="bg-customGrey1 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="font-heading mb-4 bg-orange-100 text-orange-800 px-4 py-2 rounded-lg inline-block text-sm font-semibold tracking-widest uppercase title-font">
            How It Works - The Process
          </p>
          <p className="mx-auto mt-4 max-w-5xl md:text-lg text-md  font-semibold text-customGrey">
            At Swayz Cleaning Services, our cleaning process is designed to
            deliver exceptional results while prioritizing the health and
            well-being of our clients and the environment. We are committed to
            excellence in every aspect of our service, from initial assessment
            to follow-up maintenance, to ensure that our clients spaces are
            consistently clean, comfortable, and inviting.
          </p>
        </div>
        <ul
          ref={listRef}
          className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-10 sm:mt-16 lg:mt-20 lg:max-w-5xl lg:grid-cols-3"
        >
          {content.map((item) => (
            <li key={item.id} className="flex-start group relative flex lg:flex-col">
              <span
                className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                aria-hidden="true"
              ></span>
              <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-400 group-hover:bg-orange-50">
                {item.icon}
              </div>
              <div className="ml-6 lg:ml-0 lg:mt-10">
                <h3 className="md:text-2xl text-xl font-bold text-customBlack before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                  {item.title}
                </h3>
                <h4 className="mt-2 md:text-base   text-sm font-semibold text-customGrey">
                  <span className="font-semibold opacity-90 text-customGrey">{item.description.split(":")[0]}:</span>
                  {item.description.split(":")[1]}
                </h4>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HowWorks;
