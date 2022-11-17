import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./components/landingPage/LandingPage";
import { Signin } from "./components/Signin";
import { Signup } from "./components/Signup";
import { Dashboard } from "./components/dashboard/Dashboard";
import { Schools } from "./components/dashboard/schools/Schools";
import { Applications } from "./components/dashboard/applications/Applications";
import { Programs } from "./components/dashboard/programs/Programs";
import { Students } from "./components/dashboard/students/Students";
import { Visa } from "./components/dashboard/Visa";
import { AddStudent } from "./components/dashboard/students/AddStudent";
import { EditStudent } from "./components/dashboard/students/EditStudent";
import { ViewEditStudent } from "./components/dashboard/ViewEditStudent";
import { Countdown } from "./components/countdown/Countdown";
import { RecruitmentPartnerRegister } from "./components/pages/recruitmentPartnerJourney/RecruitmentPartnerRegister";
import { VerifyEmail } from "./components/pages/VerifyEmail";
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
          <Route path="/student/:id" element={<EditStudent />} />
          <Route path="/schools" element={<Schools />} />
          <Route path="/visa" element={<Visa />} />
          <Route path="/addStudent" element={<AddStudent />} />
          <Route path="/viewStudent" element={<ViewEditStudent />} />
          <Route path="/countdown" element={<Countdown />} />

          <Route
            path="/recruitmentPartner/register"
            element={<RecruitmentPartnerRegister />}
          />
          <Route
            path="/emailVerificationLink/:token"
            element={<VerifyEmail />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
