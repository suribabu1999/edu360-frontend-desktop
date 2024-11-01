import React from "react";

const SocioCard = ({ shadow }) => {

  return (
    <div
      className={`w-full h-full rounded-tl-[50px] rounded-bl-[50px] flex items-center justify-center ${shadow}`}
    >
      <h2 className="text-white text-xl">Socio Card</h2>
    </div>
  );
};

export default SocioCard;
