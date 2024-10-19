import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "tailwindcss/tailwind.css";
import { FiShield, FiCheckCircle, FiUserCheck, FiSearch } from 'react-icons/fi'; // Import icons

const timelineData = [
  {
    description:
      "Cost-efficiency and access to a team of specialists without the need to hire and manage them directly.",
    icon: <FiShield className="h-5 w-5" />,
  },
  {
    description:
      "We have carefully selected and partnered with reputable managed security companies to ensure that we deliver only the highest standard of service.",
    icon: <FiCheckCircle className="h-5 w-5" />,
  },
  {
    description:
      "A team of experts who can provide advice on the best security equipment, alarms, safes, and other safety materials",
    icon: <FiUserCheck className="h-5 w-5" />,
  },
  {
    description:
      "Our security agency also focuses on professional research, security analysis, and assessments.",
    icon: <FiSearch className="h-5 w-5" />,
  },
];

const App = () => {
  return (
    <div className="bg-yellow-100 p-4 lg:py-20 py-10">
      {/* Header Section */}
      <div className="md:px-10 px-5 text-center text-customGolden md:text-3xl text-xl font-bold my-4">
        WHY CHOOSE US
        <div className="mx-auto mt-2 w-[120px] h-[2.5px] bg-customGolden rounded-full"></div>
      </div>
      {/* Description */}
      <p className="text-customGrey font-semibold pb-10 text-sm md:text-lg text-center my-5 lg:mx-56 mx-5">
        Choosing our security company means choosing a team of highly skilled
        professionals who prioritize your safety and peace of mind above all
        else. Our company has a proven track record of providing exceptional
        security services to a wide range of clients.
      </p>
      {/* Vertical Timeline */}
      <VerticalTimeline>
        {timelineData.map((event, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{ background: "#C5975B", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #C5975B" }}
            iconStyle={{
              background: "#C5975B",
              color: "#fff",
              display: "flex",
            }}
            icon={event.icon} // Set the icon for each event
          >
            {/* Event Description */}
            <p className="mt-1">{event.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default App;
