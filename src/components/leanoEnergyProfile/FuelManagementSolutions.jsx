import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGasPump, FaTruck, FaTools, FaBell, FaEye, FaCheckCircle } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const FuelManagementSolutions = () => {
  const cardsRef = useRef(null);

  useLayoutEffect(() => {
    gsap.fromTo(
      cardsRef.current.children,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 90%",
          end: "top 30%",
          toggleActions: "play none none none",
          scrub: true,
          markers: false,
        },
      }
    );
  }, []);

  return (
    <div className="relative overflow-hidden  py-20 bg-gray-100 text-black">
      {/* Summary Section */}
      <div className="px-4 mb-10">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center pb-5">FUEL MANAGEMENT SOLUTIONS</h2>
        <p className="text-lg text-center">
          Fuel theft can occur through siphoning, excessive filling of containers during refueling, and obtaining slips for more fuel than actually filled. Our solutions effectively eliminate these issues, ensuring enhanced security and profitability for your business.
        </p>
      </div>

      {/* Grid for cards */}
      <div
        ref={cardsRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4"
      >
        {[
          { title: "Fuel Sensor", description: "A fuel sensor gives updates of fuel levels every 4 minutes.", icon: <FaGasPump /> },
          { title: "Multi-Tank", description: "Sensor installed on multi-tank vehicles, providing a total fuel value.", icon: <FaTruck /> },
          { title: "Odd Shaped Tanks", description: "Sensors can be programmed for accurate readings in odd-shaped tanks.", icon: <FaTools /> },
          { title: "Accurate Delivery", description: "Ensure the fuel you're charged for is delivered.", icon: <FaBell /> },
          { title: "Theft Notification", description: "Get notified via SMS when fuel theft is detected.", icon: <FaEye /> },
          { title: "Live Monitoring", description: "View storage tanks and bowsers live from anywhere in the world.", icon: <FaCheckCircle /> },
        ].map((card, index) => (
          <div key={index} className="p-6 border border-black rounded-lg shadow-lg flex items-center transition-transform transform hover:scale-105">
            <div className="text-3xl mr-4">{card.icon}</div>
            <div>
              <h3 className="font-bold text-xl">{card.title}</h3>
              <p className="text-gray-700">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .grid {
            grid-template-columns: 1fr; /* One column on small screens */
          }
        }
      `}</style>
    </div>
  );
};

export default FuelManagementSolutions;
