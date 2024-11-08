import React from "react";
import Calendar from "../Calendar/Calendar";
import Planner from "../Planner/Planner";
import Tribes from "../Tribes/Tribes";
import Cardboard from "../Cardboard/Cardboard";

const EduProCard = ({ shadow }) => {
  return (
    <div
      className={`${shadow} w-full h-full rounded-tl-[50px] shadow-card rounded-bl-[50px] pl-10 pt-10`}
    >
      <h2 className="font-bold mb-2">EDU Pro</h2>
      <div className="draggable-area grid grid-cols-2 gap-4 grid-rows-2">
        <Calendar />
        <Planner/>
        <Tribes/>
        <Cardboard/>
      </div>
    </div>
  );
};

export default EduProCard;
