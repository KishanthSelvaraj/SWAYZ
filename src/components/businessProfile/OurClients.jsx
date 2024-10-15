import React, { useEffect } from "react";
import swaysicon1 from "/swaysicon1.jpg";
import swaysicon2 from "/swaysicon2.jpg";
import swaysicon3 from "/swaysicon3.jpg";
import swaysicon4 from "/swaysicon4.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const OurClients = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        // Animation for each div
        gsap.utils.toArray(".animated").forEach((element) => {
            gsap.fromTo(
                element,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: element,
                        start: "top 80%",
                        end: "top 50%",
                        scrub: 1,
                    },
                }
            );
        });
    }, []);
    
    return (
        <div className=" bg-white lg:py-20 py-10">
            <div className="md:px-10 px-5 text-center text-customGolden md:text-3xl text-xl font-bold mb-4">
                OUR CLIENTS
                <div className="mx-auto mt-2 w-[120px] h-[2.5px] bg-customGolden rounded-full"></div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 pb-16 pt-6 sm:gap-2 sm:justify-center">
                {[swaysicon1, swaysicon2, swaysicon4, swaysicon3].map((partnerImage, index) => (
                    <div
                        key={index}
                        className="partner-1 p-2 flex items-center justify-center"
                    >
                        <img
                            src={partnerImage}
                            alt={`Partner ${index + 1}`}
                            className="w-40"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OurClients;
