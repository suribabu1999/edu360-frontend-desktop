import React from "react";
import Logo from "../../assets/images/logo.png";
import bell from "../../assets/icons/bell_ic.svg";
import profilepic from "../../assets/images/profile-pic.png";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  const menuList = [
    {
      title: "Home",
      to: "/home",
    },
    {
      title: "3d AR-Virtual Tour",
      to: "/ar",
    },
    {
      title: "STEM Learning (Engineering Simulations)",
      to: "/simulations",
    },
    {
      title: "Gamified Learning",
      to: "gamified-learning",
    },
    {
      title: "Kiosk",
      to: "/kiosk",
    },
  ];
  return (
    <div className="bg-auth-bg z-10 overflow-hidden bg-cover before:content-[''] before:absolute relative before:inset-0 before:block before:bg-gradient-to-l before:from-[#50A8D5] before:to-[#3C88AE] before:opacity-50 before:z-[-5]">
      <div className="flex justify-between items-center pl-4 pr-4">
        <div className="logo pl-4 p-2">
          <div className="justify-center items-center w-[43px] h-[43px]">
            <img src={Logo} alt="" className="" />
          </div>
          <p className="font-normal text-[12px]">Edu 360</p>
        </div>
        <div className="menu-items flex text-white font-[300]">
          {menuList.map((menu, index) => (
            <Link
              key={index}
              to={menu.to}
              className={` transition-colors duration-200 pl-3 pr-3 p-[27px] ${
                location.pathname === menu.to
                  ? "bg-[#256F94]"
                  : "hover:bg-[#256F94]/50"
              }`}
            >
              {menu.title}
            </Link>
          ))}
        </div>
        <div></div>
        <div className="relative left-panel flex items-center space-x-3">
          <div className="flex flex-row-reverse notification after:absolute after:w-[1px] after:bg-white after:h-6">
            <img src={bell} alt="" className="mr-3" />
          </div>
          <div className="profile-info flex items-center space-x-4">
            <div className="profile-pic">
              <img
                src={profilepic}
                alt=""
                className="h-[40px] w-[40px] rounded-full object-cover"
              />
            </div>
            <div className="name">
              <p className="font-bold">Greeshma</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
