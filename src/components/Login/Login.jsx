import React from 'react';
import LoginFrame from "../../assets/images/login-frame.png";
import facebookIcon from "../../assets/icons/facebook_ic.svg";
import appleIcon from "../../assets/icons/apple_ic.svg";
import googleIcon from "../../assets/icons/google_ic.svg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 opacity-75"></div>
      <div className="bg-white shadow-lg rounded-lg p-8 w-[1003px] h-[500px] z-10 flex">
        <div className="w-1/2 pr-8">
          <h2 className="text-3xl font-bold mb-4">Sign Up</h2>
          <p className="text-gray-600 mb-4 text-sm">
            Hey, Enter your details to get registered
          </p>
          <input
            type="email"
            placeholder="Email Id"
            className="w-full border border-gray-300 rounded-lg p-3 mb-4 bg-[#F2F5F6]"
          />
          <button className="bg-gradient-to-b from-[#50A8D5] to-[#3C88AE] text-white py-2 px-4 rounded w-full">
            Sign Up
          </button>
          <p className="text-gray-600 text-sm mt-4">
            Don't have an account? <Link to="/signup" className="text-blue-600">Create an account</Link>
          </p>
          <p className="mt-4 text-center text-gray-600 text-sm relative">
            <span className="absolute inset-x-0 top-1/2 border-t-[0.5px] border-[#00111A26]"></span>
            <span className="relative bg-white px-2">Or Login with</span>
          </p>
          <div className="flex justify-between p-10 mt-4">
            <button className="bg-white border border-gray-300 p-2 rounded-lg w-[88px] flex justify-center">
              <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
            </button>
            <button className="bg-white border border-gray-300 p-2 rounded-lg w-[88px] flex justify-center">
              <img src={googleIcon} alt="Google" className="w-6 h-6" />
            </button>
            <button className="bg-white border border-gray-300 p-2 rounded-lg w-[88px] flex justify-center">
              <img src={appleIcon} alt="Apple" className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <img src={LoginFrame} alt="Login Illustration" className="w-[423px] h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Login;
