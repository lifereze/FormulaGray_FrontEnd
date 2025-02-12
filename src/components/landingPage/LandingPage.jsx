import React from "react";
import  Navbar  from "./MobileNavbar";
import { Hero } from "./Hero";
import { Hero1 } from "./Hero1";
import { Hero2 } from "./Hero2";
import { Hero3 } from "./Hero3";
import { Hero4 } from "./Hero4";
import { Footer } from "./Footer";
import Testimonials from "./Testimonials";
import Chatbot from 'react-chatbot-kit'
import { useState } from "react";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import OnboardingModal from "../modals/OnboardingModal";
export const LandingPage = () => {
  const [showOnboardingModal,setShowOnboardingModal]=useState(true);

  return (<div className="bg-white">
    <div className=" fixed w-full  z-50 ">
    <Navbar />
    </div>

    <div className=" bg-white h-screen  ">
 
      <Hero />
      <Hero1 />
      <Hero3 />
      <Hero2 />
      <Testimonials />
      {/* <Hero4 /> */}

      <Footer />
      <FloatingWhatsApp 
      phoneNumber="+2349117572427"
      accountName="Formula Gray"

      />
    </div>
    {showOnboardingModal&&<OnboardingModal
    setShowOnboardingModal={setShowOnboardingModal}
    />}
    </div>
  );
};
