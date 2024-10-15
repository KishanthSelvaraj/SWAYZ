import React, { useState, useEffect, useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // For carousel navigation

const Services = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0); // To handle carousel scrolling

  const tabs = [
    { id: 1, title: "Commercial Cleaning" },
    { id: 2, title: "Residential Cleaning" },
    { id: 3, title: "Specialized Services" },
  ];

  const content = {
    1: [
      {
        title: "Office Buildings",
        description:
          "Comprehensive cleaning services tailored to office spaces, including common areas, cubicles, conference rooms, and restrooms.",
        image: "/cleaningImages/SCard1.jpg",
      },
      {
        title: "Retail Spaces",
        description:
          "Thorough cleaning for retail environments, ensuring a welcoming and hygienic atmosphere for customers and staff.",
        image: "/cleaningImages/SCard1.jpg",
      },
      {
        title: "Restaurants and Cafes",
        description:
          "Specialized cleaning solutions for food establishments, including kitchen cleaning, dining areas, and front-of-house spaces.",
        image: "/cleaningImages/SCard1.jpg",
      },
      {
        title: "Educational Facilities",
        description:
          "Cleaning services designed for schools, colleges, and universities, promoting a healthy learning environment for students and faculty.",
        image: "/cleaningImages/SCard1.jpg",
      },
      {
        title: "Healthcare Centers",
        description:
          "Strict adherence to healthcare cleaning standards, focusing on disinfection and sanitization to maintain a sterile environment in clinics, hospitals, and medical offices.",
        image: "/cleaningImages/SCard1.jpg",
      },
      {
        title: "Industrial Complexes",
        description:
          "Tailored cleaning solutions for warehouses, manufacturing facilities, and industrial sites, addressing unique cleaning challenges with efficiency and expertise.",
        image: "/cleaningImages/SCard1.jpg",
      },
    ],
    2: [
      {
        title: "Houses",
        description:
          "Complete cleaning services for houses of all sizes, covering living spaces, bedrooms, kitchens, bathrooms, and more.",
        image: "/cleaningImages/SCard1.jpg",
      },
      {
        title: "Apartments",
        description:
          "Customized cleaning plans for apartments, ensuring every corner is spotless and inviting.",
        image: "/cleaningImages/SCard1.jpg",
      },
      {
        title: "Condominiums",
        description:
          "Regular maintenance cleaning for condominiums, helping residents maintain a pristine living environment.",
        image: "/cleaningImages/SCard1.jpg",
      },
      {
        title: "Vacation Rentals",
        description:
          "Thorough cleaning between guest stays, including changing linens, restocking supplies, and ensuring a fresh and inviting space for incoming guests.",
        image: "/cleaningImages/SCard1.jpg",
      },
    ],
    3: [
      {
        title: "Deep Cleaning",
        description:
          "Intensive cleaning for areas that require extra attention, such as neglected spaces, high-traffic areas, or post-renovation cleanups.",
        image: "/cleaningImages/SCard1.jpg",
      },
      {
        title: "Carpet and Upholstery Cleaning",
        description:
          "Professional cleaning methods to remove dirt, stains, and allergens from carpets, rugs, and upholstery, extending their lifespan and enhancing their appearance.",
        image: "/cleaningImages/SCard1.jpg",
      },
      {
        title: "Window Cleaning",
        description:
          "Exterior and interior window cleaning services, leaving windows sparkling clean and streak-free.",
        image: "/cleaningImages/SCard1.jpg",
      },
      {
        title: "Floor Care and Maintenance",
        description:
          "Routine floor cleaning, polishing, and maintenance to preserve the beauty and integrity of various flooring surfaces, including hardwood, tile, laminate, and vinyl.",
        image: "/cleaningImages/SCard1.jpg",
      },
      {
        title: "Post-Construction Cleaning",
        description:
          "Thorough cleaning services after construction or renovation projects, eliminating dust, debris, and residues to reveal the full potential of the newly completed space.",
        image: "/cleaningImages/SCard1.jpg",
      },
      {
        title: "Move-In/Move-Out Cleaning",
        description:
          "Comprehensive cleaning for tenants moving in or out of residential or commercial properties, ensuring a smooth transition and leaving the space immaculate for the next occupants.",
        image: "/cleaningImages/SCard1.jpg",
      },
    ],
  };

  const itemsPerView = () => {
    if (window.innerWidth >= 1024) return 4;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const [visibleItems, setVisibleItems] = useState(itemsPerView());

  // Update visible items on resize
  useEffect(() => {
    const handleResize = () => setVisibleItems(itemsPerView());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + 1, content[activeTab].length - visibleItems)
    );
  };

  // Determine if the buttons should be disabled
  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled =
    currentIndex >= content[activeTab].length - visibleItems;

  return (
    <div className="md:my-10 my-5">
      {/* Section Heading */}
      <div className="md:px-10 px-5 text-center text-customGolden md:text-3xl text-xl font-bold">
        OUR SERVICES
        <div className="mx-auto mt-2 w-[120px] h-[2.5px] bg-customGolden rounded-full"></div>
      </div>

      {/* Description */}
      <p className="text-customGrey font-bold text-sm text-center my-5 lg:mx-96 mx-5">
        Our specialized services are tailored to address specific cleaning
        needs, providing comprehensive solutions for both commercial and
        residential clients.
      </p>

      <div
        className="flex flex-col lg:flex-row justify-between -z-0 relative bg-cover bg-black bg-opacity-10 bg-center md:px-10 px-5 py-20 mt-10" // Adjusted opacity here
        style={{
          backgroundImage: "url('/cleaningImages/Banner.jpg')", // Replace with your image path
          backgroundSize: "cover", // Ensure the background image covers the entire div
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Adjust opacity here */}

        <div className="flex justify-center lg:justify-start z-50 items-center mb-4 md:mb-0">
          <p className="lg:text-xl md:text-xl text-lg font-semibold text-white text-center md:text-left">
            Tailored{" "}
            <span className="text-customGolden">Cleaning Schedules</span> to
            suit client-specific requirements.
          </p>
        </div>

        {/* Buttons Container */}
        <div className="flex flex-wrap  gap-3 z-50 lg:py-0 py-5 justify-center lg:justify-end ">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setCurrentIndex(0); // Reset carousel index on tab change
                // window.location.reload();
              }}
              className={`py-2 px-4 font-semibold text-sm transition duration-300 rounded-lg ${
                activeTab === tab.id
                  ? "bg-customGolden text-white"
                  : "text-white border border-customGolden hover:bg-yellow-50 hover:text-black"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>

      {/* Carousel navigation buttons */}
      {content[activeTab].length > visibleItems && (
        <div className="md:mx-16 flex justify-end pt-10 mx-5">
          <button
            onClick={handlePrev}
            disabled={isPrevDisabled}
            className={`bg-customGolden p-2 text-white me-2 rounded-full shadow-lg ${
              isPrevDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            disabled={isNextDisabled}
            className={`bg-customGolden p-2 text-white rounded-full shadow-lg ${
              isNextDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <FiChevronRight size={24} />
          </button>
        </div>
      )}

      {/* Cards Carousel */}
      <div className="relative mt-10 md:mx-10 mx-5">
        <div
          className="grid gap-5 md:px-5 transition-transform duration-500 ease-in-out"
          style={{
            gridTemplateColumns: `repeat(${visibleItems}, minmax(0, 1fr))`,
          }}
        >
          {content[activeTab]
            .slice(currentIndex, currentIndex + visibleItems)
            .map((item, index) => (
              <div
                key={index}
                className={`relative shadow-md rounded-2xl hover:cursor-pointer overflow-hidden group transform transition-opacity duration-500 ease-in-out ${
                  currentIndex === index ? "opacity-100" : ""
                }`}
              >
                {/* Card Image */}
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover h-96 w-full transform group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* Title at Bottom */}
                <h3 className="absolute bottom-0 uppercase w-full text-center bg-opacity-30 bg-black text-white py-2 font-bold text-lg">
                  {item.title}
                </h3>

                {/* Hover effect to display description */}
                <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition duration-500 flex justify-center items-center">
                  <p className="text-white p-4">{item.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
