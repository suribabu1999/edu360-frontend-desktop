// import React from "react";
// import NavBar from "../../components/NavBar/NavBar";
// import VirtualCard from "../../components/VitualCard/VirtualCard";
// import CardStack from "../../components/Card/Card";
// import LeftPanel from "../../components/LeftPanel/LeftPanel";

// const HomeScreen = () => {
//   return (
//     <div>
//       <NavBar />
//       <div className="p-5 flex space-x-[100px]">
//         <LeftPanel />
//         <div>
//           <CardStack />
//         </div>
//         {/* left section */}
//       </div>
//     </div>
//   );
// };

// export default HomeScreen;

import React from 'react';
import NavBar from "../../components/NavBar/NavBar"; 
import VirtualID from '../../components/VirtualID/VirtualID';
import CardContainer from '../../components/CardContainer/CardContainer';
import Planner from '../../components/Planner/Planner';
import CreatePost from '../../components/CreatePoat/CreatePost'; 
import Advertisements from '../../components/Advertisements/Advertisements';

const HomeScreen = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <main className="container mx-auto py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1 space-y-6">
            <VirtualID />
            <CreatePost />
          </div>
          <div className="md:col-span-2 space-y-6 bg-white shadow-lg shadow-gray-300 p-6 rounded-tl-[60px] rounded-bl-[60px]">
            <CardContainer />
          </div>
          <div className="md:col-span-1 space-y-6">
            <Planner />
            <Advertisements />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomeScreen;
