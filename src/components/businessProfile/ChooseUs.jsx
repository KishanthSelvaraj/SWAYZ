import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "tailwindcss/tailwind.css"; 
const timelineData = [
  {
    description:
      "Cost-efficiency and access to a team of specialists without the need to hire and manage them directly.",
  },
  {
    description:
      "We have carefully selected and partnered with reputable managed security companies to ensure that we deliver only the highest standard of service.",
  },
  {
    description:
      "A team of experts who can provide advice on the best security equipment, alarms, safes, and other safety materials",
  },
  {
    description:
      "Our security agency also focuses on professional research, security analysis, and assessments.",
  },
];

const App = () => {
  return (
    <div className=" bg-yellow-50 p-4">
      {/* Header Section */}
      <div className="md:px-10 px-5 text-center text-customGolden md:text-3xl text-xl font-bold mb-4">
        WHY CHOOSE US
        <div className="mx-auto mt-2 w-[120px] h-[2.5px] bg-customGolden rounded-full"></div>
      </div>
      {/* Description */}
      <p className="text-customGrey font-bold text-md text-justify my-5 lg:mx-56 mx-5">
        Choosing our security company means choosing a team of highly skilled
        professionals who prioritize your safety and peace of mind above all
        else. Our company has a proven track record of providing exceptional
        security services to a wide range of clients, including businesses,
        residential properties, and special events.
      </p>
      {/* Vertical Timeline */}
      <VerticalTimeline>
        {timelineData.map((event, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{ background: "#C5975B", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #C5975B" }}
            iconStyle={{
              background: "#2B323A",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            // icon={event.icon}
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
