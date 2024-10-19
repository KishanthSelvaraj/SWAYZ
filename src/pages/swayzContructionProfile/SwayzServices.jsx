import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "../../assets/logo.jpeg";
import image1 from "../../assets/image1.jpg"
import { FaCheck } from "react-icons/fa6";

const SwayzServices = () => {
  const [selectedService, setSelectedService] = useState(null); // Track selected card

  // Variants for animation (for heading)
  const headingVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  // Card click handler
  const handleCardClick = (service) => {
    setSelectedService(service);
  };

  return (
    <div className="px-5 py-10">
      {/* Animated Heading */}
      <motion.div
        className="font-bold text-lg md:text-xl lg:text-3xl my-10 text-center"
        initial="hidden"
        animate="visible"
        viewport={{once:false}}
        variants={headingVariants}
      >
              <div className="md:px-10 px-5 text-center text-customGolden md:text-3xl text-xl font-bold">
            SERVICES OFFERED
            <div className="mx-auto mt-2 w-[120px] h-[2.5px] bg-customGolden rounded-full"></div>
          </div>
      </motion.div>

      {/* Paragraph Below Heading */}
      <div className="md:text-center text-base font-semibold text-justify md:text-lg mb-10 md:px-20 lg:px-0 max-w-7xl mx-auto">
        Swayz Group is a reputable construction company offering a wide range of
        services to meet the diverse needs of our clients. With a team of
        skilled professionals and years of industry experience, we are able to
        provide high-quality construction services in various areas.
      </div>

      {/* Cards (Manually created) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-10 md:px-10">
      <motion.div
          className="relative flex justify-center items-center py-8 rounded-lg cursor-pointer hover:scale-105 duration-300"
          style={{
            backgroundImage:
              "url('https://static.wixstatic.com/media/c48b23_d7be11826f7a4ba485f5722f85b721ac~mv2.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          whileHover={{ scale: 1.05 }}
          onClick={() =>
            handleCardClick({
              title: (
                <div className="lg:text-2xl md:text-xl text-base">
                  General Buildings
                </div>
              ),
              content: (
                <div className="lg:flex justify-around">
                  <div className="text-justify md:text-start text-sm md:text-base">
                    Using sustainable and locally sourced materials for
                    construction. Implementing waste reduction and recycling
                    practices to minimize the environmental impact of
                    construction activities.
                    <div className="mt-3 space-y-2">
                      <div className="font-bold">
                        OUR GENERAL BUILDING SERVICES INCLUDE, BUT ARE NOT
                        LIMITED TO:
                      </div>
                      <div className="flex items-center gap-x-5">
                        <FaCheck className="text-customGolden" /> Drainage
                      </div>
                      <div className="flex items-center gap-x-5">
                        <FaCheck className="text-customGolden" /> Foundations
                      </div>
                      <div className="flex items-center gap-x-5">
                        <FaCheck className="text-customGolden" /> Brickwork and
                        Blockwork
                      </div>
                      <div className="flex items-center gap-x-5">
                        <FaCheck className="text-customGolden" /> Roofing and
                        Interior Fit-outs
                      </div>
                      <div className="flex items-center gap-x-5">
                        <FaCheck className="text-customGolden" /> Plastering
                      </div>
                      <div className="flex items-center gap-x-5">
                        <FaCheck className="text-customGolden" /> Carpentry
                      </div>
                      <div className="flex items-center gap-x-5">
                        <FaCheck className="text-customGolden" /> Painting and
                        Decorating
                      </div>
                      <div className="flex items-center gap-x-5">
                        <FaCheck className="text-customGolden" /> Plumbing /
                        Heating and Electrics
                      </div>
                    </div>
                  </div>
                </div>
              ),
            })
          }
        >
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
          <div className="relative z-10 text-lg font-bold text-white">
            General Building
          </div>
        </motion.div>

        <motion.div
          className="relative flex justify-center items-center py-8 rounded-lg cursor-pointer hover:scale-105 duration-300"
          style={{
            backgroundImage:
              "url('https://as1.ftcdn.net/v2/jpg/06/06/67/76/1000_F_606677657_7fnDpdyr1CbzqxwXrO7xtuUGC6cK1T8x.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          whileHover={{ scale: 1.05 }}
          onClick={() =>
            handleCardClick({
              title: (
                <div className="lg:text-2xl md:text-xl text-base">
                  Electrical Engineering Works
                </div>
              ),
              content: (
                <div className="lg:flex justify-around">
                  <div className="text-justify md:text-start text-sm md:text-base">
                    Using sustainable and locally sourced materials for
                    construction. Implementing waste reduction and recycling
                    practices to minimize the environmental impact of
                    construction activities.
                    <div className="mt-3 space-y-2">
                      <div className="font-bold">
                      OUR GENERAL BUILDING SERVICES INCLUDE, BUT ARE NOT
                      LIMITED TO:
                      </div>
                      <div className='flex items-center gap-x-5'><FaCheck className='text-customGolden'/> Drainage</div>
                      <div className='flex items-center gap-x-5'><FaCheck className='text-customGolden'/> Foundations</div>
                      <div className='flex items-center gap-x-5'><FaCheck className='text-customGolden'/> Brickwork and Blockwork</div>
                      <div className='flex items-center gap-x-5'><FaCheck className='text-customGolden'/> Roofing and Interior Fit-outs</div>
                      <div className='flex items-center gap-x-5'><FaCheck className='text-customGolden'/> Plastering</div>
                      <div className='flex items-center gap-x-5'><FaCheck className='text-customGolden'/> Carpentry</div>
                      <div className='flex items-center gap-x-5'><FaCheck className='text-customGolden'/> Painting and Decorating</div>
                      <div className='flex items-center gap-x-5'><FaCheck className='text-customGolden'/> Plumbing / Heating and Electrics</div>
                    </div>
                  </div>
                </div>
              ),
            })
          }
        >
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
          <div className="relative z-10 text-lg font-bold text-white">
          Electrical Engineering Works
          </div>
        </motion.div>

        <motion.div
          className="relative flex justify-center items-center py-8 rounded-lg cursor-pointer hover:scale-105 duration-300"
          style={{
            backgroundImage:
              "url('https://caddcentre.com/blog/wp-content/uploads/2022/02/Women-Civil-1-1024x684.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          whileHover={{ scale: 1.05 }}
          onClick={() =>
            handleCardClick({
              title: (
                <div className="lg:text-2xl md:text-xl text-xl">
                  Civil Engineering
                </div>
              ),
              content: (
                <div className="lg:flex justify-around">
                  <div className="text-justify md:text-start text-sm md:text-base">
                  When it comes to civil construction services, Swayz
                    Constructions is committed to incorporating sustainable
                    practices. We prioritize the use of environmentally friendly
                    construction methods and materials, ensuring that our
                    projects have minimal negative impact on the natural
                    environment.
                    <div className="mt-3 space-y-2">
                      <div className="font-bold text-sm md:text-sm">WE ARE SPECIALISTS IN</div>
                      <div className='flex items-center gap-x-5'><FaCheck className='text-customGolden'/> Road Constructions</div>
                      <div className='flex items-center gap-x-5'><FaCheck className='text-customGolden'/> Water Reticulation</div>
                      <div className='flex items-center gap-x-5'><FaCheck className='text-customGolden'/> Bulk Water Supply</div>
                      <div className='flex items-center gap-x-5'><FaCheck className='text-customGolden'/> Valve And Metre Chambers</div>
                      <div className='flex items-center gap-x-5'><FaCheck className='text-customGolden'/> Water And Sewer Connection</div>
                      <div className='flex items-center gap-x-5'><FaCheck className='text-customGolden'/> Commissioning Of Projects.</div>
                      <div className='flex items-center gap-x-5' >
                        <FaCheck className='text-customGolden'/> Analysis And Design Construction Supervision,
                        Administration And Management.
                      </div>
                      <div className='flex items-center gap-x-5'><FaCheck className='text-customGolden'/> Feasibility Studies</div>
                    </div>
                  </div>
                </div>
              ),
            })
          }
        >
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
          <div className="relative z-10 text-lg font-bold text-white">
          Civil Engineering
          </div>
        </motion.div>

        <motion.div
          className="relative flex justify-center items-center py-8 rounded-lg cursor-pointer hover:scale-105 duration-300"
          style={{
            backgroundImage:
              "url('https://environmentalvision.in/images/about/maintenance.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          whileHover={{ scale: 1.05 }}
          onClick={() =>
            handleCardClick({
              title: (
                <div className="lg:text-2xl md:text-xl text-base">
                  Landscaping and Horticulture Works
                </div>
              ),
              content: (
                <div className="lg:flex justify-around">
                  <div className="text-justify md:text-start text-sm md:text-base">
                  Our Landscape and Horticultural Services services focus on
                    creating sustainable landscapes and horticultural designs.
                    We prioritize the use of native plants, water-efficient
                    irrigation systems, and organic practices to promote
                    biodiversity and minimize water usage.
                    <div className="mt-3 space-y-2">
                      <div className="font-bold">OUR SERVICES INCLUDE: BUT NOT LIMITED TO</div>
                      <div className='flex items-center gap-x-5'><FaCheck className='text-customGolden'/> Landscape Design And Architecture</div>
                      <div className='flex items-center gap-x-5'><FaCheck className='text-customGolden'/> Soil Preparation And Grading</div>
                      <div className='flex items-center gap-x-5'><FaCheck className='text-customGolden'/> Irrigation Systems</div>
                      <div className='flex items-center gap-x-5'><FaCheck className='text-customGolden'/> Tree, Shrub And Lawn Planting</div>
                      <div className='flex items-center gap-x-5'><FaCheck className='text-customGolden'/> Hardscape Construction</div>
                    </div>
                  </div>
                </div>
              ),
            })
          }
        >
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
          <div className="relative z-10 text-lg font-bold text-white text-center">
          Landscaping and Horticulture Works
          </div>
        </motion.div>
      </div>

      {/* Display content box (manually entered content) */}
      {selectedService && (
        <motion.div
          className="mt-10 border border-black p-10 lg:mx-10 rounded-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-2xl font-bold mb-5">{selectedService.title}</div>
          <div className="text-sm md:text-lg mb-5">
            {selectedService.content}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default SwayzServices;
