import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Notification } from "../ui";
import { validateSignupData } from "../../validator";
import { signup, send_email_verification_link } from "../../data/controller";
import { userStore } from "../../stores";
import Logo from "../../constants/images/formulargray_03.png";
import regPic from '../../assets/nobg-register.png'
import Spinner from "../utils/Spinner";
const signUpOptions = [
  { id: "student", title: "Student" },
  { id: "recruitmentPartner", title: "Recruitment partner" },
];

export const Signup = () => {
  const navigate = useNavigate();
  const storeUser = userStore((state) => state.storeUser);

  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState({ message: "", type: "" });

  const handleSubmit = async () => {
    const validationResult = await validateSignupData(userDetails);

    if (!validationResult.status) {
      setInfo({ message: validationResult.message, type: "error" });
      return;
    }
    setInfo({ message: "", type: "" });
    setLoading(true);
    signup(userDetails).then((response) => {
  
      setLoading(false);
      setInfo({ message: response.message, type: response.status });
    
      if (response.status === "success") {
        storeUser(response.data.user);
        send_email_verification_link({ email: userDetails.email }).then(
          (response) => {
            if (response.status === "success") {
              setInfo({
                message:
                  "Please check your email to complete registration then Login.",
                type: "success",
              });
              
              setTimeout(() => {
                navigate("/signin");
              }, 5000);
            } else {
              setInfo({
                message: "Something went wrong.",
                type: "error",
              });
            }
          }
        );
      }
    });
  };
  return (
    <>
      {}
      <div className="flex overflow-y-hidden bg-white h-screen text-white min-h-full">
        <div>
          <Notification type={info.type} message={info.message} />
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={regPic}
            alt="image"
          />
        </div>
        <div className="flex h-full flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
            <div className=" flex justify-between items-center">
              <a href="/">
                <img className="h-12 w-auto" src={Logo} alt="Formular Gray" />
              </a>
              <a href="/" className=" text-blue-600  cursor-pointer">
Home
              </a>
              </div>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-500">
                Create an account
              </h2>
            </div>

            <div className="mt-2">
              <div className="mt-3">
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-500"
                    >
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        onChange={(e) => {
                          setUserDetails((prevState) => ({
                            ...prevState,
                            [e.target.name]: e.target.value,
                          }));
                        }}
                        className="block text-black w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-base font-medium text-gray-500">
                      Sign up as :
                    </label>
                    <fieldset className="mt-3">
                      <legend className="sr-only">Sign up as</legend>
                      <div className="space-y-4">
                        {signUpOptions.map((option) => (
                          <div key={option.id} className="flex items-center">
                            <input
                              id={option.id}
                              name="role"
                              value={option.id}
                              type="radio"
                              onChange={(e) => {
                                setUserDetails((prevState) => ({
                                  ...prevState,
                                  [e.target.name]: e.target.value,
                                }));
                              }}
                              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor={option.id}
                              className="ml-3 block text-sm font-medium text-gray-500"
                            >
                              {option.title}
                            </label>
                          </div>
                        ))}
                      </div>
                    </fieldset>
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="password"
                      className="block  text-sm font-medium text-gray-500"
                    >
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        onChange={(e) => {
                          setUserDetails((prevState) => ({
                            ...prevState,
                            [e.target.name]: e.target.value,
                          }));
                        }}
                        className="block w-full text-black appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-500"
                    >
                      Confirm password
                    </label>
                    <div className="mt-1">
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        autoComplete="current-password"
                        required
                        onChange={(e) => {
                          setUserDetails((prevState) => ({
                            ...prevState,
                            [e.target.name]: e.target.value,
                          }));
                        }}
                        className="block text-black w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="flex">
                    <div>Already have an account? </div>
                    <div className="text-blue-500 ml-1">
                      <a href="/signin">Sign in</a>
                    </div>
                  </div>
                  <div>
                    {loading&&<button
                    
                      className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      <Spinner />
                    </button>||<button
                      type="submit"
                      onClick={handleSubmit}
                      className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Sign up
                    </button>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
