import React from "react";
import "./BusinessProfile.css"; // Import your CSS here

const NotFoundPage = () => {
  
  return (
    <section className="wrapper bg-gradient-to-r from-[#f8c9c9] to-[#FB8A8A] py-80">
      <div className="container">
        <div id="scene" className="scene" data-hover-only="false">
          <div className="circle" data-depth="1.2"></div>

          <div className="one" data-depth="0.9">
            <div className="content">
              <span className="piece"></span>
              <span className="piece"></span>
              <span className="piece"></span>
            </div>
          </div>

          <div className="two" data-depth="0.60">
            <div className="content">
              <span className="piece"></span>
              <span className="piece"></span>
              <span className="piece"></span>
            </div>
          </div>


          <p className="p404" data-depth="0.50">
            Business
          </p>
          <p className="p404" data-depth="0.10">
            Business
          </p>
        </div>

        {/* Text Section */}
        <div className="textt">
          <article>
            <p>
              Swayz Security Services is a security provider with extensive
              experience in the industry
            </p>
            <button
              onClick={() => (window.location.href = "/business-profile")}
            >
              View more
            </button>
          </article>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
