import React, { useState, useMemo, useCallback } from "react";
import MyFutureCard from "../MyFutureCard/MyFutureCard";
import EduProCard from "../EduProCard/EduProCard";
import SocioCard from "../SocioCard/SocioCard";

const CARDS = [
  {
    id: "card-1",
    component: MyFutureCard,
    baseTranslate: "translate-x-0",
    zIndex: "z-30",
  },
  {
    id: "card-2",
    component: SocioCard,
    baseTranslate: "-translate-x-10",
    zIndex: "z-20",
  },
  {
    id: "card-3",
    component: EduProCard,
    baseTranslate: "-translate-x-20",
    zIndex: "z-10",
  },
];

export default function CardStack() {
  const [activeCard, setActiveCard] = useState(CARDS[0].id);

  const [futureCardButton,setFutureCardButton]= useState(true)
  const [showContent,setShowContent] = useState(true)

  const shadowStates = useMemo(
    () =>
      CARDS.reduce((acc, { id }) => {
        acc[id] = activeCard === id ? "shadow-card-active" : "shadow-card";
        return acc;
      }, {}),
    [activeCard]
  );

  const getCardClass = useCallback(
    (cardId) => {
      const baseClass =
        "absolute w-full h-full bg-white transition-all duration-500 ease-in-out cursor-pointer origin-right rounded-[50px] origin-right";

      const { baseTranslate } = CARDS.find(({ id }) => id === cardId) || {};

      if (activeCard === "card-3") {
        if (cardId === "card-1")
          return `${baseClass} !w-[70px] translate-x-[850px]`;
        if (cardId === "card-2")
          return `${baseClass} !w-[70px] translate-x-[820px] overflow-hidden`;
      }

      if (activeCard === "card-2" && cardId === "card-1") {
        return `${baseClass} !w-[70px] translate-x-[880px]`;
      }

      return `${baseClass} ${baseTranslate}`;
    },
    [activeCard]
  );

  return (
    <div className="flex items-center justify-center">
      <div className="relative w-[950px] h-[850px] perspective-[1000px]">
        {CARDS.map(({ id, component: Card, zIndex }) => (
          <div
            key={id}
            id={id}
            className={`${getCardClass(id)} ${zIndex}`}
            onClick={() => setActiveCard(id)}
          >
            <Card shadow={shadowStates[id]} setFutureCardButton={setFutureCardButton} futureCardButton={futureCardButton} showContent={showContent} setShowContent={setShowContent} />
          </div>
        ))}
      </div>
    </div>
  );
}