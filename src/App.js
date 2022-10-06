import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Hero1 } from "./components/Hero1";
import { Hero2 } from "./components/Hero2";
import { Hero3 } from "./components/Hero3";
import {Hero4} from './components/Hero4'
import {Footer} from './components/Footer';
function App() {
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
}

export default App;
