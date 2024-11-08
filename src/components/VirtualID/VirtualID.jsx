import React from 'react';
import Profile from '../../assets/images/Profile-dummy.png'

const VirtualID = ({
  fullName,
  university,
  course,
  year,
  idNumber,
  imageUrl,
}) => {
  return (
    <div className="w-[280px] bg-white rounded-xl overflow-hidden shadow-lg">
      {/* Card Header */}
      <div className="bg-blue-50 p-3 text-center">
        <h2 className="text-lg font-bold text-gray-800">Virtual ID</h2>
      </div>

      {/* Profile Image */}
      <div className="relative">
        <div className="w-full h-[160px] bg-gradient-to-r from-[#86C9E4] to-[#86C9E4] flex justify-center items-center">
          <img
            src={Profile}
            alt={fullName}
            className="w-[160px] h-full object-cover"
          />
        </div>
      </div>

      {/* Details Section */}
      <div className="p-4 space-y-2">
        <div className="grid grid-cols-3 text-sm pb-1">
          <span className="font-semibold text-gray-700">Full Name:</span>
          <span className="col-span-2 text-gray-800">{fullName}</span>
        </div>

        <div className="grid grid-cols-3 text-sm pb-1">
          <span className="font-semibold text-gray-700">University:</span>
          <span className="col-span-2 text-gray-800">{university}</span>
        </div>

        <div className="grid grid-cols-3 text-sm pb-1">
          <span className="font-semibold text-gray-700">Course:</span>
          <span className="col-span-2 text-gray-800">{course}</span>
        </div>

        <div className="grid grid-cols-3 text-sm pb-1">
          <span className="font-semibold text-gray-700">Year:</span>
          <span className="col-span-2 text-gray-800">{year}</span>
        </div>

        <div className="grid grid-cols-3 text-sm">
          <span className="font-semibold text-gray-700">ID Number:</span>
          <span className="col-span-2 text-gray-800">{idNumber}</span>
        </div>
      </div>
    </div>
  );
};

export default VirtualID;