import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaClipboardCheck, FaTools, FaClock, FaSmile } from 'react-icons/fa';
import './Accordian.css';

const Accordion = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach((accordion) => {
      accordion.addEventListener('click', () => {
        const text = accordion.querySelector('.text');
        const isOpen = text.style.maxHeight;
        closeAllAccordions();
        if (!isOpen) {
          text.style.maxHeight = text.scrollHeight + 'px';
          text.style.opacity = '1';
        }
      });
    });

    function closeAllAccordions() {
      accordions.forEach((accordion) => {
        const text = accordion.querySelector('.text');
        text.style.maxHeight = null;
        text.style.opacity = '0';
      });
    }

    const getMarginBottom = () => {
        const width = window.innerWidth;
      
        // Adjust these values as needed for your design
        if (width <= 480) {
          return -420; // Small screens
        } else if (width <= 768) {
          return -270; // Medium screens
        }
         else {
          return -250; // Default for larger screens
        }

    }
    gsap.timeline({
      scrollTrigger: {
        trigger: '.accordions',
        pin: true,
        start: 'top 15%',
        end: 'bottom top',
        scrub: 0.5,
        ease: 'ease',
      }
    })
    .to('.accordion .text', {
      height: 0,
      paddingBottom: 0,
      opacity: 0,
      stagger: 0.5,
    })
    .to('.accordion', {
      marginBottom: getMarginBottom(),
      stagger: 0.5,
    }, '<');

    return () => {
      accordions.forEach((accordion) => {
        accordion.removeEventListener('click', () => {});
      });
      ScrollTrigger.killAll();
    };
  }, []);

  const steps = [
    {
      title: 'Initial Consultation',
      description: 'We start with understanding your cleaning needs through a detailed consultation.',
      icon: <FaClipboardCheck />,
      url: "/cleaningImages/gif1.gif"
    },
    {
      title: 'Customized Planning',
      description: 'A tailored cleaning plan is developed to meet your specific requirements.',
      icon: <FaTools />,
      url: "/cleaningImages/gif3.gif"
    },
    {
      title: 'Scheduled Service',
      description: 'We organize our cleaning appointments at a time convenient only for you.',
      icon: <FaClock />,
      url: "/cleaningImages/gif1.gif"
    },
    {
      title: 'Satisfaction Guaranteed',
      description: 'Enjoy a clean space with our satisfaction guarantee, ensuring top-notch results.',
      icon: <FaSmile />,
      url: "/cleaningImages/gif3.gif"
    },
  ];

  return (
<div id="" className="py-10 h-[480vh] sm:h[300vh] md:h-[370vh] lg:h-[290vh] xl:h-[350vh] px-5">
  <div id="" className="mx-auto max-w-3xl">
    <h2 className="md:text-4xl text-2xl font-bold text-center mb-6">How We Work</h2>
    <p className="text-customGrey md:text-lg text-base font-semibold text-center mb-10">
      Discover our step-by-step process to ensure your space is cleaned to perfection.
    </p>
    <div className="accordions py-10 ">
      {steps.map((step, index) => (
        <div key={index} className="accordion flex flex-col space-y-6 md:flex-row items-center border-b-2 py-6">
          {/* Left Section - Icon and Text */}
          <div className="content-left md:w-1/2 p-4">
            <div className="text-white text-4xl flex flex-col">
              {step.icon}
            </div>
            <div className='font-bold text-white md:text-4xl mt-8 text-xl'>
                {step.title}
            </div>
            <div className="description md:text-lg mt-8 text-sm text-white">
              {step.description}
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="content-right md:w-1/2 p-4 flex justify-center">
            <img
              src={`${step.url}`}
              alt={step.title}
              className="w-48 h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
  );
};

export default Accordion;
