import React from "react";

const SocioCard = ({
  shadow,
  futureCardButton,
  setFutureCardButton,
  showContent,
  setShowContent,
}) => {
  function socioCardHandler() {
    setFutureCardButton(false);
    setShowContent(false);
  }
  return (
    <div
      className={`w-full h-full border-2 rounded-tl-[50px] rounded-bl-[50px] flex items-center justify-center ${shadow}`}
      onClick={socioCardHandler}
    >
      <h2 className="text-black text-xl">Socio Card</h2>
    </div>
  );
};

export default SocioCard;
