import React from "react";
import profilepic from '../../assets/images/profile-pic.png'

const VirtualCard = () => {
  return (
    <div className="id-card rounded-lg bg-gradient-to-b from-[#4EA3C908] to-[#3E586412] shadow-lg">
      <div className="camera-icon h-[120px] w-[300px] border border-[#50A9D499] flex justify-center items-center rounded-lg bg-white">
        <img
          src={profilepic}
          alt="Uploaded"
          className="w-full h-full object-contain rounded-lg"
        />
      </div>
      <div className="p-4">
        <p className="text-[#00111A] font-medium mt-5">Full Name: {}</p>
        <p className="text-[#00111A] font-medium mt-5">Email: {}</p>
        <p className="text-[#00111A] font-medium mt-5">Gender: {}</p>
        <p className="text-[#00111A] font-medium mt-5">Contact Number: {}</p>
        <p className="text-[#00111A] font-medium mt-5">Address: {}</p>
      </div>
    </div>
  );
};

export default VirtualCard;
