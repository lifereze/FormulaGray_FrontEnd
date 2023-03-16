import React from "react";
import team from '../../assets/no-bg-students.png'
import institution from '../../assets/institution.jpg'
import commission from '../../assets/commission.jpg'
export const Hero3 = () => {
  return (
    <div className="items-center mt-10">
      <div className="w-full flex flex-col px-4 sm:px-6 py-8 lg:px-8">
        <div className="w-full m-2 mb-10 font-bold tracking-tight text-indigo-600 text-center text-3xl lg:text-5xl">
          Why Formulagray?
        </div>
        <div className="md:flex w-full m-3  p-2 md:items-center rounded-xl  mb-8 md:mb-20">
        <div className="text-[#184061] md:hidden block pb-2 text-2xl font-semibold text-center">Accessible support team</div>
        <div className=" text-[#184061] md:hidden block  md:pl-4">
            <div className="text-[#184061] hidden md:block text-3xl  font-semibold text-center">Accessible support team</div>
          <div className="pt-2 md:px-10 md:text-lg">
          Our in-country team are always available to support you. We have made sure that all enquiries are responded to within 24hrs and all applications submitted within 72hrs.           </div>
          <div className="pt-1 md:px-10 md:text-lg pb-4 ">
          Our team will help with your training, application process, delivering offers and continually ensuring your business growth OR as a student, making sure all the steps pre and post admission is well supported.             </div>
          </div>
            <img
              className="w-full h-auto md:w-1/2 object-cover"
              src={team}
              alt="Image"
            />
         
          <div className=" text-[#184061] hidden md:block  md:pl-4">
            <div className="text-[#184061] hidden md:block text-3xl  font-semibold text-center">Accessible support team</div>
          <div className="pt-4 md:px-10 md:text-lg">
          Our in-country team are always available to support you. We have made sure that all enquiries are responded to within 24hrs and all applications submitted within 72hrs.           </div>
          <div className="pt-4 md:px-10 md:text-lg ">
          Our team will help with your training, application process, delivering offers and continually ensuring your business growth OR as a student, making sure all the steps pre and post admission is well supported.             </div>
          </div>
        </div>
      
          <div className="md:flex w-full m-3  md:items-center rounded-xl mb-8   md:mb-20">
          <div className=" text-[#184061]  text-base pr-4">
            <div className="text-[#184061] text-2xl  md:text-3xl  font-semibold text-center py-2 md:py-4">World Class Institution Partnerships</div>
          
          <div className="  pt-2 md:pt-4 md:px-10 md:text-lg">
          We have carefully chosen our partners to allow access to the best qualifications/programs in the diverse countries we have our coverage.
Our platform allows you access to over 100,000 programs from over 10 countries globally.
Our coverage includes: United Kingdom, Canada, United States, Australia, New Zealand, France, Germany, Netherlands, Spain, Poland, Italy, Ireland and many more.          </div>
          <div className=" pt-2 md:pt-4 md:px-10 md:text-lg pb-4"> 
          With this plethora of programs; you would definitely find any program you desire.          </div>
           </div>
              <img
              className="w-full h-auto  md:w-1/2 rounded-lg object-cover"
              src={institution}                alt="Image"
              />
           
        </div>
      





        <div className="md:flex w-full m-3   md:items-center rounded-xl  mb-8 md:mb-20">
        <div className="text-[#184061] md:hidden block pb-2 text-2xl font-semibold text-center">Commissions for Agents and Students</div>
        <div className=" text-[#184061] md:hidden block  md:pl-4">
            <div className="text-[#184061] hidden md:block text-3xl  font-semibold text-center">Commissions for Agents and Students</div>
          <div className="pt-2 md:px-10 md:text-lg">
          <p>Yes, you read right!</p>
            <p>We offer one of the best commissions in the industry. Agencies get exclusive discounts, commissions and incentives.</p>

</div>
          <div className="pt-1 md:px-10 md:text-lg pb-4 ">
          <p>As a student, you aren’t left out too – we give students who apply through the platform a commission JUST because they used the platform for their application.
We understand that it takes sometime and effort to walk this journey and we reward your effort.
So, what are you waiting for – lets get started!</p>
 </div>
          </div>
            <img
              className="w-full h-auto md:w-1/2 object-cover"
              src={commission}
              alt="Image"
            />
         
          <div className=" text-[#184061] hidden md:block  md:pl-4">
            <div className="text-[#184061] hidden md:block text-3xl  font-semibold text-center">Commissions for Agents and Students</div>
          <div className="pt-4 md:px-10 md:text-lg">
          <p>Yes, you read right!</p>
            <p>We offer one of the best commissions in the industry. Agencies get exclusive discounts, commissions and incentives.</p>

</div>
          <div className="pt-4 md:px-10 md:text-lg ">
          <p>As a student, you aren’t left out too – we give students who apply through the platform a commission JUST because they used the platform for their application.
We understand that it takes sometime and effort to walk this journey and we reward your effort.
So, what are you waiting for – lets get started!</p>
     </div>
          </div>
        </div>




     
      </div>
    </div>
  );
};
