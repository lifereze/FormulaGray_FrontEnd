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
export const LandingPage = () => {
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
      {/* <div className="" style={{maxWidth:"300px"}}>
<Chatbot/>
   </div> */}
      <Footer />
    </div>
    </div>
  );
};
