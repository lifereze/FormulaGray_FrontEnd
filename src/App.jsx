import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./components/landingPage/LandingPage";
import { Signin } from "./components/Signin";
import { Signup } from "./components/Signup";
import { Dashboard } from "./components/dashboard/Dashboard";
import { Schools } from "./components/dashboard/Schools";
import { Applications } from "./components/dashboard/Applications";
import { Programs } from "./components/dashboard/Programs";
import { Students } from "./components/dashboard/Students";
import { Visa } from "./components/dashboard/Visa";
import { AddStudent } from "./components/dashboard/AddStudent";
import { ViewEditStudent } from "./components/dashboard/ViewEditStudent";

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />{" "}
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/students" element={<Students />} />
          <Route path="/schools" element={<Schools />} />
          <Route path="/visa" element={<Visa />} />
          <Route path="/addStudent" element={<AddStudent />} />
          <Route path="/viewStudent" element={<ViewEditStudent />} />
        </Routes>{" "}
      </Router>
    </div>
  );
}

export default App;
