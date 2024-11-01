import React from 'react';

const EduProCard = ({shadow}) => {
  return (
    <div className={`${shadow} w-full h-full rounded-tl-[50px] shadow-card rounded-bl-[50px] flex items-center justify-center`}>
      <h2 className="text-white text-xl">EduPro Card</h2>
    </div>
  );
};

export default EduProCard;
