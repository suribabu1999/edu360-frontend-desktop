import React from 'react';

const Socio = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-full">
      <h2 className="text-2xl font-bold mb-4">Socio</h2>
      <p className="text-sm mb-6">
        Lorem ipsum dolor sit amet consectetur. Mi mi scelerisque tortor
        viverra. Arcu augue quis cursus ullamcorper phasellus dignissim
        tortor. Aliquam et vivamus non viverra mattis cursus vitae aliquam
        commodo.
      </p>
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <img
          src="https://your-image-url-here.com/socio-illustration.png"
          alt="Socio Illustration"
          className="w-full h-auto"
        />
      </div>
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm font-semibold">Create your Tribe</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-sm font-semibold mr-2">Ready to unleash your journey?</span>
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="w-2 h-2 bg-gray-300 rounded-full mx-0.5"></div>
            ))}
          </div>
        </div>
        <button className="bg-primary text-white px-4 py-2 rounded-md text-sm font-semibold flex items-center">
          <span>Start Now</span>
          <span className="ml-2">▶️</span> {/* You can use any emoji or text here */}
        </button>
      </div>
    </div>
  );
};

export default Socio;
