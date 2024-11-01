import React from "react";
import Logo from "../assets/images/logo.png";

const AuthLayout = ({ children }) => {
  return (
    <div className="relative bg-auth-bg bg-center min-h-screen w-full bg-cover bg-no-repeat justify-center items-center flex">
      <div className="absolute top-10 left-10 flex-row justify-center items-center">
        <img src={Logo} alt="" className="w-[60px] h-[60px]" />
        <p className="text-center font-medium text-lg">Edu 360</p>
      </div>
      <div className="flex justify-center items-center ">{children}</div>
    </div>
  );
};

export default AuthLayout;
