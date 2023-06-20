import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../constants/images/formulargray_03.png";
import { userStore } from "../../stores";
import { Notification } from "../ui";
import Spinner from "../utils/Spinner";
import loginPic from '../../assets/nobg-register.png'
import { validateSigninData } from "../../validator";
import { signin } from "../../data/controller";

export const Signin = () => {
  const navigate = useNavigate();
  const storeUser = userStore((state) => state.storeUser);

  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState({ message: "", type: "" });

  const handleSubmit = async () => {
    const validationResult = await validateSigninData(userDetails);

    if (!validationResult.status) {
      setInfo({ message: validationResult.message, type: "error" });
      return;
    }
    setInfo({ message: "", type: "" });
    setLoading(true);
    signin(userDetails).then((response) => {
      setLoading(false);
      setInfo({ message: response.message, type: response.status });
      if (response.status === "success"&& response.data.user.role=='recruitmentPartner') {
        if(response.data.user.onboarding){
        storeUser(response.data.user);
        navigate("/dashboard");
        }
        else{
          navigate('/recruitmentPartner/register');
        }
      }
      if (response.status === "success"&& response.data.user.role=='admin'){
        storeUser(response.data.user);
        navigate("/adminDashboard");
      }
      if (response.status === "success"&& response.data.user.role=='counselor'){
        storeUser(response.data.user);
        navigate("/counsellorDashboard");
      }
      if (response.status === "success"&& response.data.user.role=='student'){
        storeUser(response.data.user);
        navigate("/studentDashboard");
      }
    });
  };

  return (
    <>
      {}
      <div className="flex overflow-y-hidden  bg-white h-screen min-h-full">
        <div>
          <Notification type={info.type} message={info.message} />
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={loginPic}
            alt=""
          />
        </div>
        <div className="flex h-full  flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
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
             
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-500">
                Sign in to your account
              </h2>
            </div>

            <div className="mt-10">
              <div className="mt-8">
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

                  <div className="space-y-1">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-500"
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
                        className="block text-black w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-2 block text-sm text-gray-900"
                      >
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm">
                      <a
                        href="/forgotPassword"
                        className="font-medium text-indigo-500 hover:text-indigo-700"
                      >
                        Forgot your password?
                      </a>
                    </div>
                  </div>
                  <div className="flex">
                    <div>Don't have an account? </div>
                    <div className=" ml-1 text-indigo-500">
                      <a href="/signup">Sign up</a>
                    </div>
                  </div>
                  <div>
                    {loading &&<button
                   
                      className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      <Spinner/>
                    </button>||<button
                      type="submit"
                      onClick={handleSubmit}
                   
                      className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Sign in
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
