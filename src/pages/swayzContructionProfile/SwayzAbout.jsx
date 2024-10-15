import React from "react";
import { FaCheck } from "react-icons/fa6";
import { motion } from "framer-motion";

// Animation for fading in from below
const fadeInUp = {
  hidden: { opacity: 0, y: 50 }, // Start with opacity 0 and shifted down
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }, // Fade in and move up
};

const SwayzAbout = () => {
  return (
    <div>
      {/* pre construction section */}
      <motion.div
        className="flex flex-col lg:flex-row md:justify-center items-center"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        transition={{ duration: 0.7 }}
      >
        {/* Text Content */}
        <div>
          <div className="flex justify-center md:text-3xl my-10 font-bold text-xl">
            Pre Construction
          </div>
          <div className="lg:max-w-xl px-10 text-justify text-sm">
            When it comes to pre-construction, our focus is on developing
            sustainable site plans and construction plans. These plans aim to
            minimize the environmental impact of the project and prioritize
            sustainability throughout the construction process. During the
            pre-construction phase, our team collaborates with designers and
            engineers to integrate sustainable design elements into the project.
          </div>
          {/* Pre-construction services list */}
          <motion.div
            className="px-10 lg:px-0"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            transition={{ duration: 0.7 }}
          >
            <div className="md:px-20">
              <div className="md:text-lg text-sm text-start font-semibold lg:max-w-lg my-5">
                OUR PRECISE PRE-CONSTRUCTION SERVICES INCLUDE:
              </div>
              <ul className="text-sm">
                <li className="flex items-center gap-x-5">
                  <FaCheck className="text-customGolden" /> Site Assessments
                </li>
                <li className="flex items-center gap-x-5">
                  <FaCheck className="text-customGolden" /> Project Control
                  Budgets
                </li>
                <li className="flex items-center gap-x-5">
                  <FaCheck className="text-customGolden" /> Obtaining
                  Procurement Permits
                </li>
                <li className="flex items-center gap-x-5">
                  <FaCheck className="text-customGolden" /> Developing Critical
                  Path Schedules
                </li>
                <li className="flex items-center gap-x-5">
                  <FaCheck className="text-customGolden" /> Building Mock-Ups
                  for Review
                </li>
                <li className="flex items-center gap-x-5">
                  <FaCheck className="text-customGolden" /> Pre-Ordering
                  Identified Long-Lead Items
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 w-full p-5 mt-10">
          <img
            src="https://swayzgroup.co.za/wp-content/uploads/2024/05/Downloader.la-65dde47e75f88.jpg" // Replace with actual image URL
            alt="Pre Construction"
            className="rounded-lg shadow-lg"
          />
        </div>
      </motion.div>

      {/* People section */}
      <motion.div
        className="flex flex-col lg:flex-row-reverse md:justify-around items-center mt-10"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        transition={{ duration: 0.7 }}
      >
        {/* Text Content */}
        <div>
          <div className="flex justify-center md:text-3xl my-10 font-bold text-xl">
            Our People
          </div>
          <div className="lg:max-w-xl px-10 text-justify text-sm">
            We are a company that prides itself on its ‘family’ culture and we
            seek out high-calibre people. we are a company that has, at its
            core, a team philosophy that is clearly apparent each and every day
            – there is a real sense of being there for one another. We believe
            in nurturing the skills of our team members and providing growing
            levels of responsibility. Of all the things that we do and all the
            exciting projects that Swayz Group undertakes on a daily basis, it’s
            our people who are the foundation of our success. Our people bring
            unique skills, energy, expertise, experience and perspectives to our
            workforce.
          </div>

          {/* People services list */}
          <motion.div
            className="px-10 lg:px-0"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            transition={{ duration: 0.7 }}
          >
            <div className="md:px-20">
              <div className="md:text-lg text-sm text-start font-semibold lg:max-w-lg my-5">
                OUR VALUE PROPOSITION SERVICES INCLUDE:
              </div>
              <ul className="text-sm">
                <li className="flex items-center gap-x-5">
                  <FaCheck className="text-customGolden" /> Give Respect, Earn
                  Respect.
                </li>
                <li className="flex items-center gap-x-5">
                  <FaCheck className="text-customGolden" /> Active Listening to
                  Clients’ Needs.
                </li>
                <li className="flex items-center gap-x-5">
                  <FaCheck className="text-customGolden" /> Clients, Swayz
                  Group, and Contractors = One Team
                </li>
                <li className="flex items-center gap-x-5">
                  <FaCheck className="text-customGolden" /> Transparency Is the
                  Currency of Trust
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 w-full p-5 mt-10">
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2024/4/411292131/KK/TS/KZ/13324674/building-construction-services.jpg" // Replace with actual image URL
            alt="Pre Construction"
            className="rounded-lg shadow-lg"
          />
        </div>
      </motion.div>

      {/* Divider */}
      <motion.div
        className="border-b mx-10 lg:mx-20 my-10"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        transition={{ duration: 0.7 }}
      />
    </div>
  );
};

export default SwayzAbout;
