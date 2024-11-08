import React from "react";

const EduProChildrenCard = ({ children, title }) => {
  return (
    <div className="w-96 min-h-fit bg-eduprocard rounded-xl">
      <div className="mb-4">
        <h2 className="text-lg relative pt-2 font-semibold text-center after:content-[''] after:absolute after:bg-[#00111A1C] after:w-full after:h-[0.74px] after:mb-2 after:-bottom-4 after:left-0 ">
          {title}
        </h2>
      </div>
      {children}
    </div>
  );
};

export default EduProChildrenCard;
