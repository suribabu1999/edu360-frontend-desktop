import React from "react";
import profilepic from "../../assets/images/profile-pic.png";

const InfoRow = ({ label, value }) => (
  <div className="flex space-x-2">
    <dt className="text-black text-md font-bold mt-5">{label}: </dt>
    <dd className="text-[#00111A] font-medium mt-5">
      {value || "Not provided"}
    </dd>
  </div>
);

const VirtualCard = ({
  profileImage,
  fullName,
  email,
  university,
  course,
  year,
  id,
  className = "",
}) => {
  const userInfo = [
    { label: "Full Name", value: fullName },
    { label: "University", value: university },
    { label: "Course", value: course },
    { label: "Year", value: year },
    { label: "ID No", value: id },
  ];

  return (
    <div
      className={`
      rounded-lg 
      bg-gradient-to-b from-[#4EA3C908] to-[#3E586412] 
      shadow-lg 
      overflow-hidden
      max-w-md 
      w-full
      ${className}
    `}
    >
      <div
        className="
        relative
        h-[200px] 
        w-full 
        border 
        border-[#50A9D499] 
        rounded-t-lg 
        bg-white
        overflow-hidden
      "
      >
        {profilepic ? (
          <img
            src={profilepic}
            alt={`${fullName}'s profile`}
            className="
              w-full 
              h-full 
              object-contain 
              transition-transform 
              duration-300 
              hover:scale-105
            "
          />
        ) : (
          <div
            className="
            w-full 
            h-full 
            flex 
            items-center 
            justify-center 
            bg-gray-100
            text-gray-400
          "
          >
            No Image
          </div>
        )}
      </div>

      <dl className="p-4 space-y-2">
        {userInfo.map(({ label, value }) => (
          <InfoRow key={label} label={label} value={value} />
        ))}
      </dl>
    </div>
  );
};

VirtualCard.defaultProps = {
  profileImage: "",
  fullName: "",
  email: "",
  university: "",
  course: "",
  year: "",
  id: "",
};

export default VirtualCard;
