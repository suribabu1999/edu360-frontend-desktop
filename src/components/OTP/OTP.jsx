import React from "react";
import LoginFrame from "../../assets/images/login-frame.png";

const OTP = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative">

      <div className="absolute inset-0 opacity-75"></div>

      <div className="bg-white shadow-lg rounded-lg p-8 w-[1003px] h-[500px]  z-10 flex">

        <div className="w-1/2 pr-8 mt-20 ml-10">
          <h2 className="text-3xl font-bold mb-4">OTP Verification</h2>
          <p className="text-gray-600 mb-4 text-sm">
            Please enter the 4-digit verification code that was sent.
          </p>

          {/* OTP Input Fields */}
          <div className="flex space-x-4 mb-4">
            <input
              type="text"
              maxLength="1"
              className="w-12 h-12 border border-gray-300 rounded-lg text-center text-2xl bg-[#F2F5F6]"
            />
            <input
              type="text"
              maxLength="1"
              className="w-12 h-12 border border-gray-300 rounded-lg text-center text-2xl bg-[#F2F5F6]"
            />
            <input
              type="text"
              maxLength="1"
              className="w-12 h-12 border border-gray-300 rounded-lg text-center text-2xl bg-[#F2F5F6]"
            />
            <input
              type="text"
              maxLength="1"
              className="w-12 h-12 border border-gray-300 rounded-lg text-center text-2xl bg-[#F2F5F6]"
            />
          </div>

          {/* Resend Code Link */}
          <a href="#" className="text-blue-500 mb-4 inline-block text-sm">
            Resend Code
          </a>

          {/* Verify Button */}
          <button className="bg-gradient-to-b from-[#50A8D5] to-[#3C88AE] text-white py-2 px-4 rounded w-full">
            Verify Code
          </button>
        </div>

        {/* Right Section - Illustration */}
        <div className="w-1/2 flex justify-center items-center">
          <img
            src={LoginFrame}
            alt="Login Illustration"
            className="w-w-[423px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default OTP;
