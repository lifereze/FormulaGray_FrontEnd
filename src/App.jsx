import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Counsellors } from "./components/dashboard/features/counsellors/Counsellors";
import { LandingPage } from "./components/landingPage/LandingPage";
import { Signin } from "./components/auth/Signin";
import { Signup } from "./components/dashboard/features/user/Signup";
import { ForgotPassword } from "./components/auth/ForgotPassword";
import { ResetPassword } from "./components/auth/ResetPassword";
import { Dashboard } from "./components/dashboard/Dashboard";
import  EditProfile  from "./components/dashboard/editProfile/EditProfile";
import { AdminDashboard } from "./components/dashboard/AdminDashboard";
import { CounsellorDashboard } from "./components/dashboard/CounsellorDashboard";
import { StudentDashboard } from "./components/dashboard/StudentDashboard";
import { Schools } from "./components/dashboard/features/schools/Schools";
import School from "./components/dashboard/features/schools/School";
import { ApplyStudents } from "./components/dashboard/features/programs/ApplyStudents";
import { Applications } from "./components/dashboard/features/applications/partnersApplications/Applications";
import { AdminApplications } from "./components/dashboard/features/applications/adminApplications/AdminApplications";
import { CounsellorApplications } from "./components/dashboard/features/applications/counsellorApplications/CounsellorApplications";
import { EditSchool } from "./components/dashboard/features/schools/EditSchool";
import { AdminStudents } from "./components/dashboard/adminStudents/Students";
import { Programs } from "./components/dashboard/features/programs/Programs";
import { SchoolPrograms } from "./components/dashboard/features/programs/SchoolPrograms";
import { Students } from "./components/dashboard/students/Students";
import { CounsellorStudents } from "./components/dashboard/features/students/counsellorStudents/CounsellorStudents";
import { EditAdminStudent } from "./components/dashboard/adminStudents/EditStudent";
import { Partners } from "./components/dashboard/features/partners/adminPartners/Partners";
import { AssignPartners } from "./components/dashboard/features/partners/assignPartners/AssignPartners";
import {AssignStudents} from "./components/dashboard/features/students/assignStudents/AssignStudents";
import { CounsellorPartners } from "./components/dashboard/features/partners/counsellorPartners/counsellorPartners";
import { Visa } from "./components/dashboard/Visa";
import { AddStudent } from "./components/dashboard/students/AddStudent";
import { AddSchool } from "./components/dashboard/features/schools/AddSchool";
import { AddProgram } from "./components/dashboard/features/programs/AddProgram";
import { EditProgram } from "./components/dashboard/features/programs/EditProgram";
import { EditStudent } from "./components/dashboard/students/EditStudent";
import { ViewEditStudent } from "./components/dashboard/ViewEditStudent";
import { Countdown } from "./components/countdown/Countdown";
import { RecruitmentPartnerRegister } from "./components/pages/recruitmentPartnerJourney/RecruitmentPartnerRegister";
import { VerifyEmail } from "./components/pages/VerifyEmail";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DuplicateProgram } from "./components/dashboard/features/programs/DuplicateProgram";
import { AdminCounsellorPartners } from "./components/dashboard/features/partners/adminCounsellorPartners/AdminCounsellorPartners";
import { AdminPartnerApplications } from "./components/dashboard/features/applications/adminPartnerApplications.js/AdminPartnerAppliations";
import { AdminCounsellorStudents } from "./components/dashboard/features/students/adminCounsellorStudents/AdminCounsellorStudents";
import { Reassign } from "./components/dashboard/features/counsellors/reassign/Reassign";
import { CreateStudent } from "./components/dashboard/features/students/counsellorStudents/CreateStudent";
import { EditStudent as CounsellorEditStudent } from "./components/dashboard/features/students/counsellorStudents/EditStudent";

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
          <Route path="/profile" element={<EditProfile/>} />
          <Route path="/adminDashboard" element={<AdminDashboard />} />
          <Route path="/counsellorDashboard" element={<CounsellorDashboard />} />
          <Route path="/studentDashboard" element={<StudentDashboard />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/applications/:currentStage" element={<Applications />} />
          <Route path="/adminApplications" element={<AdminApplications />} />
          <Route path="/adminApplications/:currentStage" element={<AdminApplications />} />
          <Route path="/adminApplications/:id/:partnerId" element={<AdminPartnerApplications />} />
          <Route exact path="/counsellorapplications" element={<CounsellorApplications />} />
          <Route exact  path="/counsellorapplications/:currentStage" element={<CounsellorApplications />} />

          <Route exact path="/counsellorapplications/:currentStage/:partnerId" element={<CounsellorApplications />} />

          <Route exact path="/partners" element={<Partners />} />
          <Route exact path="/counsellors/partners/:id" element={<AdminCounsellorPartners />} />
          <Route exact path="/counsellors/students/:id" element={<AdminCounsellorStudents />} />
          <Route exact path="/counsellors/reassignStudent/:oldCounsellorId/:studentId" element={<Reassign/>} />
          <Route exact path="/counsellors/reassignPartner/:oldCounsellorId/:partnerId" element={<Reassign/>} />
          <Route exact path="/assignPartners/:counsellorId" element={<AssignPartners />} />
          <Route exact path="/assignStudents/:counsellorId" element={<AssignStudents />} />
          <Route path="/counsellorPartners" element={<CounsellorPartners />} />
          <Route path="/counsellors" element={<Counsellors />} />
          <Route path="/counsellor/student/create" element={<CreateStudent />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/school/programs/:schoolId" element={<SchoolPrograms />} />
          <Route path="/programs/:id" element={<ApplyStudents />} />
          <Route path="/programs/edit/:id" element={<EditProgram />} />
          <Route path="/programs/duplicate/:id" element={<DuplicateProgram />} />
          <Route path="/students" element={<Students />} />
          <Route exact path="/counsellorStudents" element={<CounsellorStudents />} />
          <Route exact path="/counsellorStudents/:partnerId" element={<CounsellorStudents />} />
          <Route path="/adminStudents" element={<AdminStudents />} />
          <Route exact  path="/counsellor/student/edit/:id" element={<CounsellorEditStudent />} />
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
