import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./components/landingPage/LandingPage";
import { Signin } from "./components/Signin";
import { Signup } from "./components/Signup";
import { Dashboard } from "./components/dashboard/Dashboard";
import { AdminDashboard } from "./components/dashboard/AdminDashboard";
import { StudentDashboard } from "./components/dashboard/StudentDashboard";
import { Schools } from "./components/dashboard/schools/Schools";
import School from "./components/dashboard/schools/School";
import { ApplyStudents } from "./components/dashboard/programs/ApplyStudents";
import { Applications } from "./components/dashboard/applications/Applications";
import { AdminApplications } from "./components/dashboard/adminApplications/AdminApplications";
import { Programs } from "./components/dashboard/programs/Programs";
import { Students } from "./components/dashboard/students/Students";
import { Partners } from "./components/dashboard/recruitmentPartners/Partners";
import { Visa } from "./components/dashboard/Visa";
import { AddStudent } from "./components/dashboard/students/AddStudent";
import { AddSchool } from "./components/dashboard/schools/AddSchool";
import { AddProgram } from "./components/dashboard/programs/AddProgram";
import { EditStudent } from "./components/dashboard/students/EditStudent";
import { ViewEditStudent } from "./components/dashboard/ViewEditStudent";
import { Countdown } from "./components/countdown/Countdown";
import { RecruitmentPartnerRegister } from "./components/pages/recruitmentPartnerJourney/RecruitmentPartnerRegister";
import { VerifyEmail } from "./components/pages/VerifyEmail";
function App() {
  return (
    <div className=" bg-[#E6E9EF] text-black">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />{" "}
        
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/adminDashboard" element={<AdminDashboard />} />
          <Route path="/studentDashboard" element={<StudentDashboard />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/adminApplications" element={<AdminApplications />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/:id" element={<ApplyStudents />} />
          <Route path="/students" element={<Students />} />
          <Route path="/student/edit/:id" element={<EditStudent />} />
          <Route path="/schools" element={<Schools />} />
          <Route exact path="/schools/addSchool" element={<AddSchool />} />
          <Route exact path="/schools/:id" element={<School />} />
          <Route exact path="/schools/:schoolId/addProgram" element={<AddProgram />} />
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
