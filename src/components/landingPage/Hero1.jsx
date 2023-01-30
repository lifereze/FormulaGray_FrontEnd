import React,{useState} from "react";
import SchoolDetails from "../modals/SchoolDetails";
export const Hero1 = () => {
  const [students,setStudents]=useState(false)
  const [schoolUpload,setSchoolUpload]=useState(false)
  const [agents,setAgents]=useState(false)
  const [institutions,setInstitutions]=useState(false)
  return (
    <div className="flex mt-20 justify-center">
      <div className="flex flex-col md:flex-row md:w-10/12 text-lg">
        <div className="flex  px-2  md:w-1/3">
          <div className="flex flex-col space-y-2 items-center shadow p-4 m-3 border">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                />
              </svg>
            </div>
            <div className="font-bold">Students</div>
            <div className={!students?"line-clamp-5":''}>
              <p>The journey of selecting, applying and transitioning to an institution abroad can be overwhelming. We have created an intuitive, user-friendly platform to make this process very simple for our students.</p>
              <p>We are committed to supporting you through this journey from start to finish. We provide over 100,000 programmes from a network of universities across over 6 countries. Our team of experts are available to walk you through each process; course selection, application, visa processing, etc</p>
              <p>We connect you to quality education, globally.
</p>
<a href="/signin" className="text-blue-500 hover:underline">Start your journey today</a>
            </div>
            <div>
           {  !students&& <button
                type="button" onClick={()=>setStudents(true)}
                className="inline-flex bg-indigo-500 items-center m-4 px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Show more
              </button>||<button
                type="button" onClick={()=>setStudents(false)}
                className="inline-flex bg-indigo-500 items-center m-4 px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
               Show less
              </button>}
            </div>
          </div>
        </div>
        <div className="flex px-2 md:w-1/3">
          <div className="flex flex-col space-y-2  items-center shadow p-4 m-3 border">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-10 h-10"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                />
              </svg>
            </div>
            <div className="font-bold">Agents</div>
            <div className={!agents?" line-clamp-5":''}>
            <p>We have partnered with thousands of agents over the last decade, providing a platform to expand their reach and grow their businesses. We offer a fully-functional search feature, an easy-to-use interface and streamlined processes to allow you meet your business needs with easy to follow steps.</p>
            <p>Our objective is to collaborate with you as you support your students through the process of making the right choices in order to fulfill their education goals and life aspirations. We aim to convert applications within 72 hours – the best within the industry.</p>
            <p>We want you to consider us not just as a platform for submitting applications but a committed partner for growth.</p>
            <a href="/signin" className="text-blue-500 hover:underline">Become a part of our community today.</a>
            </div>
            <div>
            {  !agents&& <button
                type="button" onClick={()=>setAgents(true)}
                className="inline-flex bg-indigo-500 items-center m-4 px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Show more
              </button>||<button
                type="button" onClick={()=>setAgents(false)}
                className="inline-flex bg-indigo-500 items-center m-4 px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
               Show less
              </button>}
            </div>
          </div>
        </div>
        <div className="flex px-2 md:w-1/3">
          <div className="flex flex-col space-y-2 items-center shadow p-4 m-3 border">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-10 h-10"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
                />
              </svg>
            </div>
            <div className="font-bold">Institutions</div>
            <div className={!institutions?"line-clamp-5":""}>
            <p>Attracting quality students is a challenge many institutions face. With over 15,000 student applications processed through our system annually, we carefully screen each case. Our dedicated team of experts verify each application for correctness and completeness.</p>
            <p>We work with verified agents who maintain a steady stream of recruitment channels.</p>
            <p>Our platform will provide your institution access to thousands of potential students and you have the assurance that each application has been thoroughly scrutinized.</p>
            <div className="text-blue-500 hover:underline hover:cursor-pointer"
            onClick={()=>setSchoolUpload(true)}
            >Partner with us today</div>
            </div>
            <div>
            {  !institutions&& <button
                type="button" onClick={()=>setInstitutions(true)}
                className="inline-flex bg-indigo-500 items-center m-4 px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Show more
              </button>||<button
                type="button" onClick={()=>setInstitutions(false)}
                className="inline-flex bg-indigo-500 items-center m-4 px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
               Show less
              </button>}
            </div>
          </div>
        </div>
      </div>
      {schoolUpload&&<SchoolDetails setSchoolUpload={setSchoolUpload}/>}
    </div>
  );
};
