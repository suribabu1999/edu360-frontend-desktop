import React from "react";

const SocioCard = ({ shadow }) => {
  return (
    <div
      className={`w-full h-full border-2 rounded-tl-[50px] rounded-bl-[50px] flex items-center justify-center ${shadow}`}
    >
      <h2 className="text-black text-xl">Socio Card</h2>
    </div>
  );
};

export default SocioCard;
