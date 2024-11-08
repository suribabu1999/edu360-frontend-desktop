import React from "react";
import EduProChildrenCard from "../EduProChildrenCard/EduProChildrenCard";
import searchIcon from "../../assets/icons/search_ico.svg";

const Tribes = () => {
  return (
    <EduProChildrenCard title={"Tribes"}>
      <div className="p-3">
      <div className="flex justify-between items-center">
        <p className="font-bold text-[14px]">Choose your clusters</p>
        <img src={searchIcon} className="w-4" />
      </div>

      <div className="space-y-4 p-8 pb-2">
        <div className="relative">
          <label className="font-bold text-sm">
            Clusters 1
          </label>
          <select className="w-full text-[#001C37] text-[12px] opacity-50 bg-transparent border-[0.5px] border-[#DBDADA] rounded-md p-2 focus:outline-none focus:ring">
            <option>Select</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="relative">
          <label className="font-bold text-sm">
            Clusters 2
          </label>
          <select className="w-full text-[#001C37] text-[12px] opacity-50 bg-transparent border border-[#DBDADA] rounded-md p-2 focus:outline-none focus:ring">
            <option>Select</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="relative">
          <label className="font-bold text-sm">
            Clusters 3
          </label>
          <select className="w-full text-[#001C37] text-[12px] opacity-50 bg-transparent border border-[#DBDADA] rounded-md p-2 focus:outline-none focus:ring">
            <option>Select</option>
            {/* Add more options here */}
          </select>
        </div>
      </div>
      </div>
    </EduProChildrenCard>
  );
};

export default Tribes;
