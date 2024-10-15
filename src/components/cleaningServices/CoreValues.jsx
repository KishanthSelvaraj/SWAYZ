import React, { useEffect, useRef } from "react";
import {
  FaCheckCircle,
  FaLeaf,
  FaHandshake,
  FaShieldAlt,
  FaPeopleCarry,
  FaLightbulb,
  FaRecycle,
  FaAward,
  FaUserShield,
} from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const CoreValues = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    // GSAP animation for the core values cards
    const ctx = gsap.context(() => {
      // Create a ScrollTrigger for each card
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 }, // Start state
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            scrollTrigger: {
              trigger: card, // Trigger animation on the current card
              start: "top 75%", // Start animation when the top of the card is 60% down the viewport
              toggleActions: "play none none reverse", // Play on enter, reverse on leave
              once: false, // Animation happens every time it enters
            },
          }
        );
      });
    });

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <div className="relative md:my-20 py-2 my-10 md:pb-20 pb-10 bg-yellow-50 bg-opacity-50">
      {/* Background Image */}
      <div
        className="absolute inset-0 -left-[1300px] border rounded-e-full w-full h-48 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/cleaningImages/vector4.png')" }} // Corrected the path syntax for background image
      ></div>

      <div className="relative z-10">
        <div className="md:px-10 px-5 text-center text-customGolden md:text-3xl text-xl font-bold md:my-10 my-5">
          OUR CORE VALUES
          <div className="mx-auto mt-2 w-[120px] h-[2px] bg-customGolden rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:px-10 px-5">
          {/* First Grid Item */}
          <div className="text-customGrey flex justify-center items-center rounded-md p-6">
            <p className="font-bold text-md">
              These core values guide our decisions, actions, and relationships,
              shaping the culture and identity of Swayz Cleaning Services.
            </p>
          </div>

          {/* Other Grid Items with Icons and Descriptions */}
          {[
            { icon: <FaAward />, title: "Excellence", description: "We are dedicated to delivering exceptional service and exceeding expectations in everything we do. We strive for excellence in quality, reliability, and customer satisfaction." },
            { icon: <FaShieldAlt />, title: "Integrity", description: "We conduct our business with honesty, transparency, and ethical behavior. Integrity is at the heart of our interactions with clients, employees, and partners." },
            { icon: <FaPeopleCarry />, title: "Teamwork", description: "We foster a collaborative and supportive work environment where every team member is valued, empowered, and respected." },
            { icon: <FaCheckCircle />, title: "Customer Focus", description: "We prioritize the needs and satisfaction of our clients above all else. By listening attentively, understanding their requirements, and delivering personalized solutions." },
            { icon: <FaHandshake />, title: "Professionalism", description: "We maintain the highest standards of professionalism in our conduct, appearance, and communication. Our team members are knowledgeable, courteous, and respectful at all times." },
            { icon: <FaLightbulb />, title: "Innovation", description: "We embrace innovation and continuous improvement in our processes, technologies, and services." },
            { icon: <FaRecycle />, title: "Sustainability", description: "We are committed to environmental sustainability and responsible stewardship of natural resources." },
            { icon: <FaUserShield />, title: "Safety", description: "We prioritize the safety and well-being of our employees, clients, and communities." },
          ].map((value, index) => (
            <div
              key={index}
              className="border border-customGrey rounded-md p-6 text-customGrey"
              ref={(el) => (cardsRef.current[index] = el)} // Assign each card to the ref array
            >
              <div className="text-4xl mb-2 text-customGolden">{value.icon}</div>
              <h3 className="font-bold text-customBlack mb-2 text-lg">{value.title}</h3>
              <p className="text-sm font-semibold">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
