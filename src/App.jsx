import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./components/landingPage/LandingPage";
import { Signin } from "./components/auth/Signin";
import { Signup } from "./components/auth/Signup";
import { ForgotPassword } from "./components/auth/ForgotPassword";
import { ResetPassword } from "./components/auth/ResetPassword";
import { Dashboard } from "./components/dashboard/Dashboard";
import { Profile } from "./components/dashboard/editProfile/Profile";
import { AdminDashboard } from "./components/dashboard/AdminDashboard";
import { StudentDashboard } from "./components/dashboard/StudentDashboard";
import { Schools } from "./components/dashboard/schools/Schools";
import School from "./components/dashboard/schools/School";
import { ApplyStudents } from "./components/dashboard/programs/ApplyStudents";
import { Applications } from "./components/dashboard/applications/Applications";
import { AdminApplications } from "./components/dashboard/adminApplications/AdminApplications";
import { EditSchool } from "./components/dashboard/schools/EditSchool";
import { AdminStudents } from "./components/dashboard/adminStudents/Students";
import { Programs } from "./components/dashboard/programs/Programs";
import { SchoolPrograms } from "./components/dashboard/programs/SchoolPrograms";
import { Students } from "./components/dashboard/students/Students";
import { EditAdminStudent } from "./components/dashboard/adminStudents/EditStudent";
import { Partners } from "./components/dashboard/recruitmentPartners/Partners";
import { Visa } from "./components/dashboard/Visa";
import { AddStudent } from "./components/dashboard/students/AddStudent";
import { AddSchool } from "./components/dashboard/schools/AddSchool";
import { AddProgram } from "./components/dashboard/programs/AddProgram";
import { EditProgram } from "./components/dashboard/programs/EditProgram";
import { EditStudent } from "./components/dashboard/students/EditStudent";
import { ViewEditStudent } from "./components/dashboard/ViewEditStudent";
import { Countdown } from "./components/countdown/Countdown";
import { RecruitmentPartnerRegister } from "./components/pages/recruitmentPartnerJourney/RecruitmentPartnerRegister";
import { VerifyEmail } from "./components/pages/VerifyEmail";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className=" bg-[#E6E9EF] text-black">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />{" "}
        
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/resetPassword/:resetLink" element={<ResetPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/adminDashboard" element={<AdminDashboard />} />
          <Route path="/studentDashboard" element={<StudentDashboard />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/applications/:currentStage" element={<Applications />} />
          <Route path="/adminApplications" element={<AdminApplications />} />
          <Route path="/adminApplications/:currentStage" element={<AdminApplications />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/school/programs/:schoolId" element={<SchoolPrograms />} />
          <Route path="/programs/:id" element={<ApplyStudents />} />
          <Route path="/programs/edit/:id" element={<EditProgram />} />
          <Route path="/students" element={<Students />} />
          <Route path="/adminStudents" element={<AdminStudents />} />
          <Route path="/student/edit/:id" element={<EditStudent />} />
          <Route path="/adminStudent/edit/:id" element={<EditAdminStudent />} />
          <Route path="/schools" element={<Schools />} />
          <Route exact path="/schools/addSchool" element={<AddSchool />} />
          <Route exact path="/schools/editSchool/:id" element={<EditSchool />} />
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
      <ToastContainer/>
    </div>
  );
}

export default App;
