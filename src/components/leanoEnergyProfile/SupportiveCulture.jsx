import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SupportiveCulture = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState('');

  const contents = [
    {
      title: "Empowering the Youth",
      content: `With South Africa being a developing country, there is a lot of room for improvement, 
      and with that said giving back to the youth and empowering the African child is one of Leano’s 
      deepest desires. Leano aims to provide mentorship programs and workshops.`,
    },
    {
      title: "Education Fund",
      content: `The root of empowerment lies in education as it is the one tool that can never be taken away 
      from an individual. Therefore, Leano plans to develop an education fund that affords 
      children to study fields of chemical engineering, mining, and construction.`,
    },
    {
      title: "Sustainable Growth",
      content: `Through these industries, we have the ability to promote sustainable growth through renewable 
      energies, ensuring future generations a clean and healthy environment. This is a philosophy of ours.`,
    },
  ];

  const handleLearnMore = (remainingContent) => {
    setSelectedContent(remainingContent);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedContent('');
  };

  return (
<div className="bg-customGrey2">
<div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center text-customBlack">SUPPORTIVE CULTURE</h2>

      {contents.map((item, index) => {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true });

        return (
          <motion.div
            ref={ref}
            key={index}
            className="relative mt-6 flex flex-col rounded-xl bg-customGrey1 text-black shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }} 
          >
            <div className="p-6">
              <h5 className="mb-2 block font-sans md:text-2xl text-xl font-semibold leading-snug tracking-normal text-customGolden">
                {item.title}
              </h5>
              <p className="block font-sans font-semibold text-base leading-relaxed text-customGrey">
                {item.content}
              </p>
            </div>
            <div className="p-6 pt-0">
              <button
                className="flex select-none items-center gap-2 rounded-lg py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white bg-customGolden transition-all hover:bg-[#ca9145] "
                type="button"
                onClick={() => handleLearnMore(item.content)} 
              >
                Read More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  ></path>
                </svg>
              </button>
            </div>
          </motion.div>
        );
      })}

      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-white rounded-lg p-8 max-w-lg mx-auto"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-4 text-customBlack">More Information</h3>
            <p>{selectedContent}</p>
            <button
              className="mt-4 rounded-lg bg-red-500 text-white px-4 py-2"
              onClick={handleClose}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
</div>
  );
};

export default SupportiveCulture;
