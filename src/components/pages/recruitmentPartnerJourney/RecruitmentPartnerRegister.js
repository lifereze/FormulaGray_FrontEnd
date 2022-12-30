import React, { useState, useEffect } from "react";
import { Navbar } from "../../landingPage/Navbar";
import { Steps } from "../../Steps";
import { ContactInformation } from "./ContactInformationForm";
import BusinessInformationForm from "./BusinessInformationForm";
import RecruitmentDetails from "./RecruitmentDetails";
import { useRecruiter, userStore } from "../../../stores";
import { refreshSession } from "../../../data/api/authenticatedRequests";
import { useNavigate } from "react-router-dom";
import Spinner from "../../utils/Spinner";
export const RecruitmentPartnerRegister = () => {
  const recruiter = useRecruiter((state) => state.recruiter);
  const storeUser = userStore((state) => state.storeUser);

  const navigate = useNavigate();
  const [loading, setLoading] = useState();
  useEffect(() => {
    const getUser = async () => {
      try {
        setLoading(true);
        const res = await refreshSession();
        console.log(res);
        if (res && res.status !== 200) {
          setLoading(false);
          return navigate("/signin");
        } else if (res.data.user) {
          storeUser(res.data.user);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);
  return (
    <div>
      <Navbar />
      <Steps />
      {loading && <Spinner />}
      {!loading && (
        <div className=" min-h-screen">
          {recruiter.step == "contact" && <ContactInformation />}
          {recruiter.step == "business" && <BusinessInformationForm />}
          {recruiter.step == "recruitment-details" && <RecruitmentDetails />}
        </div>
      )}
    </div>
  );
};
