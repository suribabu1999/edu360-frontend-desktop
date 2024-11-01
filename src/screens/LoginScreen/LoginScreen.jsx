import React from "react";
import AuthLayout from "../../layout/AuthLayout";
import Login from "../../components/Login/Login";
import OTP from "../../components/OTP/OTP";
import SignUp from "../../components/SignUp/SignUp";

const LoginScreen = () => {
  return (
    <AuthLayout>
      {/* <Login/> */}
      {/* <OTP /> */}
      <SignUp/>
    </AuthLayout>
  );
};

export default LoginScreen;
