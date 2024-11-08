import React from 'react';

const CreatePost = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-base font-bold mb-3">Create</h2>
      <textarea
        className="w-full p-3 border rounded-lg mb-3 text-xs" // Reduced font size
        placeholder="Write your post here.."
        rows={4}
      ></textarea>
      <div className="flex justify-between items-center mb-3">
        <div className="flex space-x-3">
          <button className="flex items-center space-x-1 text-gray-600 text-[10px]"> {/* Reduced font size */}
            <span role="img" aria-label="Media" className="h-3 w-3">🖼️</span> {/* Replace with emoji */}
            <span>Media</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-600 text-[10px]"> {/* Reduced font size */}
            <span role="img" aria-label="Attach Files" className="h-3 w-3">📎</span> {/* Replace with emoji */}
            <span>Attach Files</span>
          </button>
        </div>
        <button className="bg-primary text-white px-3 py-1 rounded text-[10px]">Post</button> {/* Reduced font size and button size */}
      </div>
      <div className="mt-3 flex items-center justify-between text-[10px]"> {/* Reduced font size */}
        <span>Add Clusters</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-8 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      </div>
    </div>
  );
};

export default CreatePost;
