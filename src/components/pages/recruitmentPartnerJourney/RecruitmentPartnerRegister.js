import React from "react";
import { Navbar } from "../../landingPage/Navbar";
import { Steps } from "../../Steps";
import { ContactInformation } from "./ContactInformationForm";
import BusinessInformationForm from "./BusinessInformationForm";
import RecruitmentDetails from "./RecruitmentDetails";
import { useRecruiter } from "../../../stores";
export const RecruitmentPartnerRegister = () => {
  const recruiter = useRecruiter((state) => state.recruiter);
  return (
    <div>
      <Navbar />
      <Steps />
      {recruiter.step == "contact" && <ContactInformation />}
      {recruiter.step == "business" && <BusinessInformationForm />}
      {recruiter.step == "recruitment-details" && <RecruitmentDetails />}
    </div>
  );
};
