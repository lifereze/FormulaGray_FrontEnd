import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./components/landingPage/LandingPage";
import { Signin } from "./components/Signin";
import { Signup } from "./components/Signup";

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />{" "}
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
        </Routes>{" "}
      </Router>
    </div>
  );
}

export default App;
