import React, { useEffect, useRef } from "react";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { HiAcademicCap } from "react-icons/hi";
import { IoMdSchool } from "react-icons/io"; // Icon for training
import { MdUpdate } from "react-icons/md"; // Icon for ongoing development
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TrainingAffiliations = () => {
  const leftSectionRef = useRef(null); // Reference for the left section
  const rightSectionRef = useRef(null); // Reference for the right section

  useEffect(() => {
    const leftSection = leftSectionRef.current;
    const rightSection = rightSectionRef.current;

    // Animation for left section
    gsap.fromTo(
      leftSection,
      { opacity: 0, x: -50 }, // Initial state
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: leftSection,
          start: "top 80%", // Start animation when the top of the section is at 80% of the viewport height
          toggleActions: "play none none reverse", // Play on enter, reverse on leave
          once: false, // Animation triggers only once
        },
      }
    );

    // Animation for right section
    gsap.fromTo(
      rightSection,
      { opacity: 0, x: 20 }, // Initial state
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: rightSection,
          start: "top 80%", // Start animation when the top of the section is at 80% of the viewport height
          toggleActions: "play none none reverse", // Play on enter, reverse on leave
          once: false, // Animation triggers only once
        },
      }
    );

    return () => {
      // Cleanup to kill all ScrollTriggers
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-yellow-100 bg-opacity-30 md:py-20 md:px-10 p-5">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section */}
        <div
          ref={leftSectionRef}
          className="lg:w-1/3 bg-gradient-to-b rounded-2xl relative from-yellow-600 via-yellow-700 to-yellow-800 text-white p-6"
        >
          {/* Text Content */}
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <HiAcademicCap className="text-yellow-800 text-3xl" />
              <h2 className="md:text-2xl text-xl font-bold text-yellow-800">
                TRAINING & AFFILIATIONS
              </h2>
            </div>
            <p className="md:text-base text-sm font-semibold text-white mb-6">
              Swayz Cleaning Services is proud to be fully accredited by the
              Services SETA (Sector Education and Training Authority). This
              accreditation is a testament to our commitment to maintaining the
              highest standards of training and professionalism within the
              cleaning and landscaping industries.
            </p>
            <div className="mb-4">
              <h3 className="font-bold text-lg text-yellow-500">
                Services SETA Accreditation:
              </h3>
              <p className="md:text-base text-sm font-semibold text-white">
                Accreditation by Services SETA demonstrates our compliance with
                industry standards and regulatory requirements, ensuring that
                our training programs meet the rigorous criteria set forth by
                the authority.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-yellow-500">
                Recognition of Excellence:
              </h3>
              <p className="text-sm font-semibold text-white">
                Our accreditation by Services SETA underscores our dedication to
                excellence in training and development. It also provides
                assurance to our clients that our staff members are well-trained
                and equipped to deliver outstanding service.
              </p>
            </div>
          </div>

          {/* Image Background */}
          <div
            className="absolute bottom-0 -right-0  rounded-e-full w-32 h-32 bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url('/cleaningImages/vector1.png')" }}
          ></div>
        </div>

        {/* Right Section */}
        <div
          ref={rightSectionRef}
          className="lg:w-2/3 bg-white p-6 shadow-md rounded-md"
        >
          <div className="flex items-center gap-4 mb-6">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNc2MD9F09yf8JqubsMVHDlNozO-sE6yFnyw&s"
              alt="Services SETA"
              className="h-12"
            />
            <img
              src="https://vsi.co.za/wp-content/uploads/2018/11/NCCA-New-Logo.jpg"
              alt="NCCA"
              className="h-12"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWUR4-3vD_zPY32MV9pH1uhsX7YMXEb79LPw&s"
              alt="SABS Approved"
              className="h-12"
            />
          </div>
          <h3 className="md:text-2xl text-xl font-bold mb-4">
            At{" "}
            <span className="text-customGolden">Swayz Cleaning Services</span>,
            we believe in the importance of continuous learning and professional
            development.
          </h3>
          <p className="md:text-base text-sm font-semibold text-customGrey mb-6">
            Our internal training department is dedicated to providing
            comprehensive training programs for our staff, ensuring they have
            the knowledge and skills necessary to deliver exceptional service.
          </p>
          <div className="space-y-8">
            <div className="flex gap-4">
              <IoMdSchool className="text-customGolden text-3xl shrink-0" />
              <div>
                <h4 className="text-lg font-bold">Employee Training Programs:</h4>
                <p className="md:text-base text-sm font-semibold text-justify text-customGrey">
                  We offer a range of training programs tailored to the needs of
                  our cleaning and landscaping teams. These programs cover
                  various aspects of cleaning techniques, equipment operation,
                  safety procedures, customer service, and landscaping and
                  gardening practices.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <MdUpdate className="text-customGolden text-3xl shrink-0" />
              <div>
                <h4 className="text-lg font-bold">Ongoing Development:</h4>
                <p className="md:text-base text-sm font-semibold text-justify text-customGrey">
                  Our commitment to ongoing development means that our staff
                  members receive regular training updates to stay abreast of
                  industry best practices, technological advancements, and
                  safety regulations.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <AiFillSafetyCertificate className="text-customGolden text-3xl shrink-0" />
              <div>
                <h4 className="text-lg font-bold">Certification:</h4>
                <p className="md:text-base text-sm font-semibold text-justify text-customGrey">
                  Upon successful completion of our training programs, employees
                  receive certifications that validate their expertise and
                  competence in their respective roles. These certifications
                  reflect our dedication to professionalism and quality service
                  delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingAffiliations;
