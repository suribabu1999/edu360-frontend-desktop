import React from "react";
import LoginFrame from "../../assets/images/login-frame.png";

const OTP = () => {
  return (
    <div className="bg-white shadow-login rounded-lg flex p-8 w-[1003px]">
      <div className="w-1/2 pr-8">
        <h2 className="text-3xl font-bold mb-4">OTP Verification</h2>
        <p className="text-gray-600 mb-4">
          Please enter the 4-digit verification code that was sent.
        </p>

        <div className="flex space-x-4 mb-4">
          <input
            type="text"
            maxLength="1"
            className="w-12 h-12 border border-gray-300 rounded-lg text-center text-2xl"
          />
          <input
            type="text"
            maxLength="1"
            className="w-12 h-12 border border-gray-300 rounded-lg text-center text-2xl"
          />
          <input
            type="text"
            maxLength="1"
            className="w-12 h-12 border border-gray-300 rounded-lg text-center text-2xl"
          />
          <input
            type="text"
            maxLength="1"
            className="w-12 h-12 border border-gray-300 rounded-lg text-center text-2xl"
          />
        </div>

        <a href="#" className="text-blue-500 mb-4 inline-block">
          Resend Code
        </a>

        <button className="bg-gradient-to-b from-[#50A8D5] to-[#3C88AE] text-white py-2 px-4 rounded w-full">
          Verify Code
        </button>
      </div>

      <div className="w-1/2 flex justify-center items-center">
        <img
          src={LoginFrame}
          alt="Login Illustration"
          className="w-60 h-auto"
        />
      </div>
    </div>
  );
};

export default OTP;
