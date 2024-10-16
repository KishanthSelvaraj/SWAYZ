import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./BusinessProfile.css";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".list__item");

    items.forEach((item) => {
      const itemTitle = item.querySelector(".list__item__title");
      const itemTitleOutline = item.querySelector(".list__item__titleOutline");
      const itemImg = item.querySelector("img");

      const itemTL = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "0% 75%",
          end: "25% 50%",
          scrub: 3,
        },
      });

      itemTL.fromTo(
        itemTitle,
        { scale: 2, y: "100%" },
        { scale: 1, y: "0%", ease: "power2.inOut" },
        0
      );
      itemTL.fromTo(
        itemTitleOutline,
        { scale: 2, y: "100%" },
        { scale: 1, y: "0%", ease: "power2.inOut" },
        0
      );

      gsap.fromTo(
        itemImg,
        { x: "60vw", y: "60vh", rotate: -30 },
        {
          x: "-60vw",
          y: "-60vh",
          rotate: 30,
          ease: "none",
          scrollTrigger: {
            trigger: item,
            start: "50% 100%",
            end: "100% 50%",
            scrub: 3,
          },
        }
      );
    });
  }, []);

  return (
    <main className="flex__col overflow-x-hidden">

      <section className="intro flexx relative w-[calc(100%-80px)] md:min-h-screen py-[100px] md:py-[0px] gap-20">
        <h1 className="font-playfair">
        SWAYz SEcurity service
          <br />
        on Business
PROFILE
        </h1>
        <img
                      src="/business.jpg"

          alt="Intro"
        />
        <p className="font-poppins">
        Swayz Security Services is a security provider with extensive experience in the 
        industry.
          <br />
          <br />
          We have established a reputation for delivering high-quality security 
          solutions.
          <br />
          <br />
          Our team of highly trained professionals is dedicated to ensuring the 
          safety and protection of our clients' assets, personnel, and property.
        </p>
      </section>

      <section className="list flexx flex__col">
        {[1].map((_, index) => (
          <div key={index} className="list__item hidden md:block">
            <img
              src="/business.jpg"
              alt="List item"
            />
            <div className="list__item__title">Business Profile</div>
            <div className="list__item__titleOutline">Business Profile</div>
            <ul className="list__item__infos flex">
              <li>
                <span>ABOUT</span> SWAYZ SECURITY
              </li>
              <li>
                <span>OUR</span> MISSION
              </li>
              <li>
                <span>OUR</span> SERVICE PROVIDE
              </li>
              <li>
                <span>OUR</span> CLIENTS
              </li>
            </ul>
            <div className="list__item__type">BUSINESS</div>
            <div className="list__item__project">PROFILE</div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default App;
