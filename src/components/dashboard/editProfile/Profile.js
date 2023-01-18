import React, { useState, useEffect } from "react";
import { userStore } from "../../../stores";
import { editUser } from "../../../data/api/authenticatedRequests";
import Spinner from "../../utils/Spinner";
import { Navbar } from "../../landingPage/Navbar";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Profile = () => {
  const navigate = useNavigate();
  const user = userStore((state) => state.user);
  const storeUser = userStore((state) => state.storeUser);
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [email, setEmail] = useState(user?.email);
  const [emailError, setEmailError] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setEmail(user?.email);
    setPhone(user?.phone);
    setFirstName(user?.firstName);
    setLastName(user?.lastName);
  }, [user]);
  const onChangeHandler = (e) => {
    if (e.target.name == "firstName") {
      setFirstName(e.target.value);
      setFirstNameError("");
    }
    if (e.target.name == "lastName") {
      setLastName(e.target.value);
      setLastNameError("");
    }

    if (e.target.name == "phone") {
      setPhone(e.target.value);
      setPhoneError("");
    }
  };
  const onSubmitHandler = async () => {
    if (firstName == "" || lastName == "" || phone == "") {
      if (firstName == "") {
        setFirstNameError("First name cannot be empty");
      }
      if (lastName == "") {
        setLastNameError("Last name cannot be empty");
      }
      if (phone == "") {
        setPhoneError("Phone cannot be empty");
      }
      if (phone.length > 1 && phone.length < 12) {
        setPhoneError("Please use the appropriate phone format");
      }
      return;
    }
    setLoading(true);
    if (user?.email == email && user?.phone == phone) {
      const res = await editUser({ firstName: firstName, lastName: lastName });
      setLoading(false);
      console.log(res);
      if (res.status == 200) {
        const updatedDetails = res.data.user;
        toast("Detailed updated successfully!");
        storeUser({ ...user, updatedDetails });
        if (user.role == "student") {
          return navigate("/studentDashboard");
        }
        if (user.role == "admin") {
          return navigate("/adminDashboard");
        }
      } else {
        const message = res.data.message;
        return toast(message);
      }
    }
    if (user?.email == email && user?.phone != phone) {
      const res = await editUser({
        firstName: firstName,
        lastName: lastName,
        phone: phone,
      });
      setLoading(false);
      console.log(res);
      if (res.status == 200) {
        const updatedDetails = res.data.user;
        storeUser({ ...user, updatedDetails });
        if (user.role == "student") {
          return navigate("/studentDashboard");
        }
        if (user.role == "admin") {
          return navigate("/adminDashboard");
        }
      } else {
        const message = res.data.message;
        return toast(message);
      }
    }
    if (user?.email != email && user?.phone == phone) {
      const res = await editUser({
        firstName: firstName,
        lastName: lastName,
        email: email,
      });
      setLoading(false);
      console.log(res);
      if (res.status == 200) {
        const updatedDetails = res.data.user;
        storeUser({ ...user, updatedDetails });
        if (user.role == "student") {
          return navigate("/studentDashboard");
        }
        if (user.role == "admin") {
          return navigate("/adminDashboard");
        }
      } else {
        const message = res.data.message;
        return toast(message);
      }
    }
  };
  return (
    <div className="">
      <Navbar />
      <div className="flex  text-center justify-center  h-screen p-8">
        <div className="space-y-8 divide-y divide-gray-200 lg:w-1/2 w-10/12">
          <div className="space-y-8 divide-y divide-gray-200">
            <div>
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Contact Information
                </h3>
              </div>
              <div className="pt-4">
                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="firstName"
                        id="first-name"
                        value={firstName}
                        onChange={(e) => onChangeHandler(e)}
                        autoComplete="given-name"
                        placeholder="First name"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                      {firstNameError && (
                        <div className=" text-red-500 text-sm">
                          {firstNameError}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="lastName"
                        id="last-name"
                        value={lastName}
                        onChange={(e) => onChangeHandler(e)}
                        autoComplete="family-name"
                        placeholder="Last name"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                      {lastNameError && (
                        <div className=" text-red-500 text-sm">
                          {lastNameError}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        value={email}
                        type="email"
                        autoComplete="email"
                        placeholder="example@gmail.com"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <div className="mt-1">
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={phone}
                        onChange={(e) => onChangeHandler(e)}
                        autoComplete="given-phone"
                        placeholder="+254 0111000000"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                      {phoneError && (
                        <div className=" text-red-500 text-sm">
                          {phoneError}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex justify-end">
              {(!loading && (
                <button
                  onClick={onSubmitHandler}
                  className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Save
                </button>
              )) || (
                <button className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  <Spinner />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
