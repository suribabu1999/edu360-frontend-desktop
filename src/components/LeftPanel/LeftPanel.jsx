import React from "react";
import VirtualCard from "../VitualCard/VirtualCard";
import Create from "../Create/Create";

const LeftPanel = () => {
  return (
    <div className="w-[20%] space-y-2">
      <VirtualCard />
      <Create />
    </div>
  );
};

export default LeftPanel;
