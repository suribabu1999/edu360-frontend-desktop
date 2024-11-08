import React from "react";
import Logo from "../assets/images/logo.png";
import backgroundImage from "../assets/images/background.png"

const AuthLayout = ({ children }) => {
  return (
    // <div className="relative bg-auth-bg bg-center min-h-screen w-full bg-cover bg-no-repeat justify-center items-center flex"></div>
    <div className=" min-h-screen bg-cover bg-center p-28 "
      style={{ backgroundImage: `url(${backgroundImage})` }} >
      <div className="absolute top-10 left-10 flex-row justify-center items-center">
        <img src={Logo} alt="" className="w-[50px] h-[50px]" />
        <p className="text-center font-medium text-lg">Edu 360</p>
      </div>
      <div className="flex justify-center items-center  ">{children}</div>
    </div>
  );
};

export default AuthLayout;
