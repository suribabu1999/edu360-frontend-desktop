import React from 'react';
import ColorIcon from "../../assets/icons/color-icon.svg"
import PenIcon from "../../assets/icons/pen-icon.svg"
import TextIcon from "../../assets/icons/text-icon.svg"
import CropIcon from "../../assets/icons/crop-icon.svg"
import ImageIcon from "../../assets/icons/image-icon.svg"
import DeleteIcon from "../../assets/icons/delete-icon.svg"

const EduPro = () => {
  return (
    <div className="bg-white p-4 rounded-lg h-full">
      <h2 className="text-2xl font-bold mb-4">EDU Pro</h2>

      <div className="bg-gray-100 rounded-lg p-2 mb-4">
        <ul className="flex justify-between">
          <li className="text-gray-500 text-sm">Tribes</li>
          <li className="bg-primary text-white px-3 py-1 rounded text-sm">Cardboard</li>
          <li className="text-gray-500 text-sm">other</li>
        </ul>
      </div>

      <div className="bg-gray-100 rounded-lg p-4 mb-4 h-40">
        {/* Placeholder for the drawing area */}
      </div>

      <div className="px-4 py-2 flex justify-between mb-4 border border-gray-400 rounded-md">
        <button className="w-6 h-6 bg-orange-500 rounded"></button>
        <img src={ColorIcon} className="w-6 h-6" alt="color " />
        <img src={PenIcon} className="w-6 h-6" alt="color " />
        <img src={TextIcon} className="w-6 h-6" alt="color " />
        <img src={ImageIcon} className="w-6 h-6" alt="color " />
        <img src={CropIcon} className="w-6 h-6" alt="color " />
      </div>

      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Title"
          className="flex-grow mr-2 p-2 border rounded text-sm"
        />
        <button className="bg-primary text-white px-4 py-1 rounded text-sm">Save</button>
        <button className="ml-2 text-primary font-semibold text-sm">Invite</button>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-3">Your Notepads</h3>
        <div className="bg-gray-100 rounded-lg p-3 flex justify-between items-center">
          <div>
            <h4 className="font-semibold text-sm">To do List</h4>
            <p className="text-gray-500 text-xs">Date : 2024-09-30</p>
          </div>
          <button >
             <img src={DeleteIcon} className="w-6 h-6" alt="color " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EduPro;
