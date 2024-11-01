import React from "react";

const Create = () => {
  return (
    <div className="shadow-create bg-create w-full p-5 max-w-md rounded-md space-y-2">
      <p className="font-bold text-xl">Create</p>
      <textarea id="message" rows="3" class="block resize-none p-2.5 w-full text-sm text-gray-900 rounded-lg border-[0.5px] border-[#00111A] border-opacity-40 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your post here..."></textarea>
      <div className="icons flex justify-between text-[#00111A8C]">
        <div className="right flex">
          <img src="" alt="" />
          <p>Media</p>
        </div>
        <div className="left">
          <img src="" alt="" />
          <p>Attach Files</p>
        </div>
      </div>
      <div className="cluster flex justify-between">
        <p>Add Clusters</p>
        <>
          <label class="relative inline-flex cursor-pointer items-center">
            <input id="switch" type="checkbox" class="peer sr-only" />
            <label for="switch" class="hidden"></label>
            <div class="peer h-6 w-11 rounded-full border bg-slate-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-slate-800 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
          </label>
        </>
      </div>
      <div className="btn flex justify-end">
        <button>Post</button>
      </div>
    </div>
  );
};

export default Create;
