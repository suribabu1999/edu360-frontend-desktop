import React from 'react';

const Planner = () => {
  return (
    <div className="bg-white p-3 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-sm font-bold text-gray-800">Your Planner</h2>
        <a href="#" className="text-primary text-xs font-semibold">View All</a>
      </div>
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xs text-gray-500 font-semibold">Sep 29, 2024</h3>
        <span className="h-4 w-4 text-gray-400">•••</span> {/* Replaced with simple text */}
      </div>
      <div className="bg-white rounded-lg shadow-sm p-2">
        <div className="flex items-start mb-2">
          <div className="text-xs font-bold text-gray-800 mr-2">10:00 AM</div>
          <div className="text-xs text-gray-600">
            Apply For<br />Scholarship
          </div>
        </div>
        <div className="flex items-start">
          <div className="text-xs font-bold text-gray-800 mr-2">12:00 PM</div>
          <div className="text-xs text-gray-600">
            Time For<br />Assessment
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planner;
