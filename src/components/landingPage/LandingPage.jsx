import React from "react";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { Hero1 } from "./Hero1";
import { Hero2 } from "./Hero2";
import { Hero3 } from "./Hero3";
import { Hero4 } from "./Hero4";
import { Footer } from "./Footer";

export const LandingPage = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Hero1 />
      <Hero3 />
      <Hero2 />
      {/* <Hero4 /> */}
      <Footer />
    </div>
  );
};
