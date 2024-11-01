import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import VirtualCard from "../../components/VitualCard/VirtualCard";
import CardStack from "../../components/Card/Card";

const HomeScreen = () => {
  return (
    <div>
      <NavBar />
      <div className="p-5 flex space-x-[100px]">
        <VirtualCard />
        <CardStack/>
        {/* left section */}
      </div>
    </div>
  );
};

export default HomeScreen;
