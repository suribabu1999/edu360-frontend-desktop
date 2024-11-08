import React from "react";
import AuthLayout from "../../layout/AuthLayout";
import Login from "../../components/Login/Login";
import OTP from "../../components/OTP/OTP";
import SignUp from "../../components/SignUp/SignUp";
import "./loginscreen.css"

const LoginScreen = () => {
  return (
    <div className="h-screen w-screen overflow-y-scroll scrollbar-hide">
      <AuthLayout>
      {/* <Login/> */}
      <OTP />
      {/* <SignUp/> */}
    </AuthLayout>
    </div>
  );
};

export default LoginScreen;
