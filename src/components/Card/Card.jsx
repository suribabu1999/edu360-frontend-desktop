import React, { useState } from "react";
import MyFutureCard from "../MyFutureCard/MyFutureCard";
import EduProCard from "../EduProCard/EduProCard";
import SocioCard from "../SocioCard/SocioCard";

export default function CardStack() {
  const [activeCard, setActiveCard] = useState("card-1");
  const [eduproShadow, setEduproShadow] = useState("shadow-card");
  const [socioshadow, setSocioshadow] = useState("shadow-card");
  const [myFutureShadow, setMyFutureShadow] = useState("shadow-card");

  const handleCardClick = (cardId) => {
    setActiveCard(cardId);
    if (cardId === "card-1") {
      setEduproShadow("shadow-card-active");
      setSocioshadow("shadow-card");
      setMyFutureShadow("shadow-card");
    } else if (cardId === "card-2") {
      setEduproShadow("shadow-card");
      setSocioshadow("shadow-card-active");
      setMyFutureShadow("shadow-card");
    } else {
      setEduproShadow("shadow-card");
      setSocioshadow("shadow-card");
      setMyFutureShadow("shadow-card-active");
    }
  };

  const getCardClass = (cardId) => {
    let className =
      "absolute w-full h-full bg-white transition-all duration-500 ease-in-out cursor-pointer origin-right";
    if (activeCard === "card-3" && cardId === "card-1") {
      className += " w-[70px] translate-x-[1000px]";
    } else if (activeCard === "card-3" && cardId === "card-2") {
      className += " w-[70px] translate-x-[940px] overflow-hidden";
    } else if (activeCard === "card-2" && cardId === "card-1") {
      className += " w-[70px] translate-x-[1020px]";
    }
    return className;
  };

  return (
    <div className="flex items-center justify-center">
      <div className="relative w-[1100px] h-[700px] perspective-[1000px]">
        <div
          id="card-1"
          className={`${getCardClass("card-1")} z-30 translate-x-0`}
          onClick={() => handleCardClick("card-1")}
        >
          <EduProCard shadow={eduproShadow} />
        </div>
        <div
          id="card-2"
          className={`${getCardClass("card-2")} z-20 -translate-x-10`}
          onClick={() => handleCardClick("card-2")}
        >
          <SocioCard shadow={socioshadow} />
        </div>
        <div
          id="card-3"
          className={`${getCardClass(
            "card-3"
          )} bg-green-500 z-10 -translate-x-[70px]`}
          onClick={() => handleCardClick("card-3")}
        >
          <MyFutureCard shadow={myFutureShadow} />
        </div>
      </div>
    </div>
  );
}
