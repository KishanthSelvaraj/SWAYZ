import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faDollarSign,
  faHandshake,
  faCogs,
  faLeaf,
  faWarehouse,
} from "@fortawesome/free-solid-svg-icons";
import objectives_1 from '/leanoEnergyProfile/objectives_1.jpeg'
import objectives_2 from '/leanoEnergyProfile/objectives_2.webp'
const Objectives = () => {
  return (
    <div className="relative bg-cover bg-center bg-no-repeat"
      style={{
        // backgroundImage: `url(https://images.pexels.com/photos/4173096/pexels-photo-4173096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
        backgroundImage: `url(${objectives_1})`, // Corrected this line
      }}
    >
      <div className="absolute inset-0  bg-black opacity-80"></div> 
      
      <div className="relative z-10">
        <h2 className="text-center text-2xl md:text-4xl font-bold text-white md:pt-20 pt-10">
          OBJECTIVES
        </h2>
        <HorizontalScrollObjectives />
      </div>
    </div>
  );
};

const HorizontalScrollObjectives = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[200vh] -mt-10">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-10 px-10">
          {objectives.map((objective, index) => (
            <ObjectiveCard key={index} objective={objective} icon={icons[index]} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ObjectiveCard = ({ objective, icon }) => {
  const standardizedObjective = objective.split(" ").slice(0, 15).join(" ") + (objective.split(" ").length > 15 ? '...' : '');

  return (
    <div className="group relative h-72 sm:w-96 w-72 p-6 overflow-hidden rounded-lg bg-cover bg-center transition-transform duration-300 transform hover:scale-105"
         style={{ backgroundImage: `url(${objectives_2})` }}>
      <div className="absolute inset-0 bg-[#272727] opacity-95 rounded-lg" /> 

      <div className="absolute top-12 left-1/2 transform -translate-x-1/2"> 
        <FontAwesomeIcon icon={icon} size="4x" className="text-customGolden" />
      </div>

      <div className="absolute flex w-9/12 bottom-10 left-1/2 transform -translate-x-1/2 text-center"> 
        <p className="text-base sm:text-lg font-bold text-white">
          {standardizedObjective}
        </p>
      </div>
    </div>
  );
};

const objectives = [
  "Have quick, efficient, on-time delivery to all their customers.",
  "Provide their customers with stable, non-fluctuating prices of fuel.",
  "Develop sustainable customer relationships, ensuring a level of trust and respect.",
  "Combine technology and efficiency into their daily operations.",
  "Promote sustainable energy and eco-friendliness.",
  "Safely supply customers with storage tanks and monitor their monthly usage.",
];

const icons = [
  faTruck,
  faDollarSign,
  faHandshake,
  faCogs,
  faLeaf,
  faWarehouse,
];

export default Objectives;
