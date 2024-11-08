import React from 'react';
import Imgvideo from "../../assets/img_video.png"

const MyFuture = () => {
  return (
    <div className="bg-white p-3 rounded-lg ">
      <h2 className="text-lg font-bold mb-2">My Future</h2>
      <nav className="bg-gray-200 rounded-lg shadow-lg p-2">
        <ul className="flex space-x-4">
          <li>
            <a
              href="#"
              className="bg-gradient-to-b from-blue-400 to-blue-500 text-white px-4 py-2 rounded-md shadow-md border border-blue-300 text-sm focus:outline-none focus:ring focus:ring-blue-200"
            >
              Assessment
            </a>
          </li>
          <li>
            <a
              href="#"
              className=" text-gray-600 px-4 py-2   hover:bg-gray-200 text-sm"
            >
              My Checklist
            </a>
          </li>
          <li>
            <a
              href="#"
              className=" text-gray-600 px-4 py-2   hover:bg-gray-200 text-sm"
            >
              My Career
            </a>
          </li>
          <li>
            <a
              href="#"
              className=" text-gray-600 px-4 py-2   hover:bg-gray-200 text-sm"
            >
              My Scholarship
            </a>
          </li>
        </ul>
      </nav>

      <div className="mb-3 bg-gray-100 p-4 text-center rounded-lg h-64 flex items-center justify-center">
        <img src={Imgvideo} alt="img" className="h-full w-full object-contain" />
      </div>

    
        <div className="ml-3 flex space-x-56 bg-secondary p-3 rounded-lg">
        <a className="text-sm underline text-blue-500 hover:text-blue-700" href="#">Take your sample test now</a>
          <button className="h-8 bg-blue-400 text-white px-4 py-1 rounded mt-1 text-xs">Start Now &gt;</button>
      </div>
      <p className="mt-3 ml-6 font-bold text-sm">Why?</p>
    </div>
  );
};

export default MyFuture;
