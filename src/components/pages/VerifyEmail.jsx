import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { verify_email } from "../../data/controller";
import { Notification } from "../../components/ui";
import { Navbar } from "../../components/landingPage/Navbar";
export const VerifyEmail = () => {
  const [info, setInfo] = useState({ message: "", type: "" });
  const [verified, setVerified] = useState(false);
  const { token } = useParams();

  const navigate = useNavigate();

  const emailVerify = async () => {
    try {
      const response = await verify_email({
        emailVerificationToken: token,
      });

      if (response.status === "success") {
        setInfo({
          message: "Email verified successfully",
          type: "success",
        });
        setVerified(true);
        return;
      }
      return setInfo({ message: response.message, type: response.status });
    } catch (error) {
      setInfo({
        message: "Something went wrong.",
        type: "error",
      });
    }
  };
  return (
    <div>
      <Navbar />
      <div className="flex mt-32 justify-center items-center">
        <div>
          <Notification type={info.type} message={info.message} />
        </div>
        {(!verified && (
          <div
            className="py-4 px-4 bg-indigo-500 hover:bg-indigo-700 rounded cursor-pointer text-white"
            onClick={emailVerify}
          >
            Verify Email
          </div>
        )) || (
          <div
            className="py-4 px-4 bg-indigo-500 hover:bg-indigo-700 rounded cursor-pointer text-white"
            onClick={() => {
              navigate("/signin");
            }}
          >
            Login
          </div>
        )}
      </div>
    </div>
  );
};
