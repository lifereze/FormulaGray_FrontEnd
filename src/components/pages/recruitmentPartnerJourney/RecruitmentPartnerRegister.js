import React from 'react'
import { Navbar } from "../../landingPage/Navbar";
import { Steps } from '../../Steps';
import {ContactInformation} from './ContactInformationForm'

export const RecruitmentPartnerRegister = () => {
  return (
    <div>
      <Navbar />
      <Steps />
      <ContactInformation />
    </div>
  );
};
