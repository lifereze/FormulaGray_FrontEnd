import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../constants/images/formulargray_03.png";
import { userStore } from "../../stores";
import { Notification } from "../ui";
import Spinner from "../utils/Spinner";
import { forgotPassword } from "../../data/api/authenticatedRequests";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signin } from "../../data/controller";
import { Link } from "react-router-dom";

export const ForgotPassword = () => {
  const navigate = useNavigate();
  const storeUser = userStore((state) => state.storeUser);

  const [email, setEmail] = useState();
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState({ message: "", type: "" });

  const handleSubmit = async () => {
    setLoading(true);
    if (email) {
      const res = await forgotPassword({ email: email });
      if (res.status == 200) {
        toast("Please check your email to verify account.");
      } else {
        const message = res?.data?.error;
        toast(message);
      }
    }
    setInfo({ message: "", type: "" });
    setLoading(false);
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
            src="https://media.istockphoto.com/photos/multiethnic-group-of-latin-american-college-students-smiling-picture-id1349297974?b=1&k=20&m=1349297974&s=170667a&w=0&h=HXhZJOkouT4BWGa-or0-AriJlmXJHZdCZBQqGwu6yvs="
            alt=""
          />
        </div>
        <div className="flex h-full  flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <Link to="/">
                <img className="h-12 w-auto" src={Logo} alt="Formular Gray" />
              </Link>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-500">
                Forgot Password
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
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        className="block text-black w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    {(loading && (
                      <button className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <Spinner />
                      </button>
                    )) || (
                      <button
                        type="submit"
                        onClick={() => handleSubmit()}
                        className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Send Email
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
