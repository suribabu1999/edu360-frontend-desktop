import React from "react";
import { MoreHorizontal } from "lucide-react";
import EduProChildrenCard from "../EduProChildrenCard/EduProChildrenCard";

const Planner = () => {
  const events = [
    {
      time: "10:00 AM",
      title: "Apply For Scholarship",
    },
    {
      time: "12:00 PM",
      title: "Time For Assessment",
      description: "Assessment",
    },
  ];

  return (
    <EduProChildrenCard title={"Planner"}>
      <div className=" pt-2 pb-2 pr-10 pl-10">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-600 text-lg">Sep 29, 2024</span>
          <MoreHorizontal className="text-gray-400 w-5 h-5" />
        </div>

        <div className="bg-white rounded-lg shadow-sm p-5">
          {events.map((event, index) => (
            <div key={index} className="flex items-start mb-4 last:mb-0">
              <div className="w-24 text-sm font-bold">
                {event.time}
              </div>
              <div className="flex-1 flex items-start">
                <div className="w-1 rounded-lg h-16 bg-orange-300 mr-2"></div>
                <div>
                  <div className="text-xl text-[#2A303E] text-wrap font-[400]">{event.title}</div>
                
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </EduProChildrenCard>
  );
};

export default Planner;
