import React from "react";
import Introduction from "../../components/businessProfile/Introduction";
import About from "../../components/businessProfile/About";
import OurServices from "../../components/businessProfile/OurServices";
import ChooseUs from "../../components/businessProfile/ChooseUs";
import OurMisson from "../../components/businessProfile/OurMisson";
import OurClients from "../../components/businessProfile/OurClients";
import WeProvide from "../../components/businessProfile/WeProvide";
import Contact from "../../components/businessProfile/Contact";

const BusinessProfile = () => {
  return (
    <div>
      <Introduction />
      <About />
      <OurMisson/>
      <OurServices />
      <ChooseUs />
      <OurClients/>
      <WeProvide/>
      {/* <Contact/> */}
    </div>
  );
};

export default BusinessProfile;
