import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGasPump, FaTruck, FaTools, FaBell, FaEye, FaCheckCircle } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const FuelManagementSolutions = () => {
  const cardsRef = useRef(null);

  useLayoutEffect(() => {
    const cards = cardsRef.current.children;

    // Set up scroll trigger for each card
    gsap.utils.toArray(cards).forEach((card, index) => {
      gsap.fromTo(card, { y: 100, opacity: 0 }, {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          end: "top 30%",
          toggleActions: "play none none none",
          scrub: true,
        },
        delay: index * 0.1 // Stagger the start of each card's animation
      });
    });
  }, []);

  return (
    <div className="relative overflow-hidden py-20 bg-gray-100 text-black flex flex-col md:flex-row">
      {/* Left Section for heading and paragraph */}
      <div className="w-full md:w-1/3 px-4 mb-10 md:mb-0">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-customGolden">
          FUEL MANAGEMENT SOLUTIONS
        </h2>
        <p className="text-customGrey font-semibold text-base">
          Fuel theft can occur through siphoning, excessive filling of containers during refueling, and obtaining slips for more fuel than actually filled. Our solutions effectively eliminate these issues, ensuring enhanced security and profitability for your business.
        </p>
      </div>

      {/* Right Section for grid of cards */}
      <div
        ref={cardsRef}
        className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4"
      >
        {[
          { title: "Fuel Sensor", description: "A fuel sensor gives updates of fuel levels every 4 minutes.", icon: <FaGasPump className="text-customGolden" /> },
          { title: "Multi-Tank", description: "Sensor installed on multi-tank vehicles, providing a total fuel value.", icon: <FaTruck className="text-customGolden" /> },
          { title: "Odd Shaped Tanks", description: "Sensors can be programmed for accurate readings in odd-shaped tanks.", icon: <FaTools className="text-customGolden" /> },
          { title: "Accurate Delivery", description: "Ensure the fuel you're charged for is delivered.", icon: <FaBell className="text-customGolden" /> },
          { title: "Theft Notification", description: "Get notified via SMS when fuel theft is detected.", icon: <FaEye className="text-customGolden" /> },
          { title: "Live Monitoring", description: "View storage tanks and bowsers live from anywhere in the world.", icon: <FaCheckCircle className="text-customGolden" /> },
        ].map((card, index) => (
          <div key={index} className="p-6 border border-black rounded-lg shadow-lg flex items-center transition-transform transform hover:scale-105">
            <div className="text-3xl mr-4">{card.icon}</div>
            <div>
              <h3 className="font-bold text-xl">{card.title}</h3>
              <p className="text-customGrey font-semibold text-base">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .flex {
            flex-direction: column; /* Stack left and right sections on small screens */
          }
          .w-full {
            width: 100%; /* Ensure both sections take full width on mobile */
          }
        }
      `}</style>
    </div>
  );
};

export default FuelManagementSolutions;
