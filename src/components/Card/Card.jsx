import React, { useState, useMemo } from "react";
import MyFutureCard from "../MyFutureCard/MyFutureCard";
import EduProCard from "../EduProCard/EduProCard";
import SocioCard from "../SocioCard/SocioCard";

const CARDS = [
  {
    id: "card-1",
    component: EduProCard,
    baseTranslate: "translate-x-0",
    zIndex: "z-30"
  },
  {
    id: "card-2",
    component: SocioCard,
    baseTranslate: "-translate-x-10",
    zIndex: "z-20"
  },
  {
    id: "card-3",
    component: MyFutureCard,
    baseTranslate: "-translate-x-[70px]",
    zIndex: "z-10"
  }
];

export default function CardStack() {
  const [activeCard, setActiveCard] = useState(CARDS[0].id);

  // Memoize shadow states to prevent unnecessary recalculations
  const shadowStates = useMemo(() => {
    return CARDS.reduce((acc, card) => ({
      ...acc,
      [card.id]: activeCard === card.id ? "shadow-card-active" : "shadow-card"
    }), {});
  }, [activeCard]);

  const getCardClass = (cardId) => {
    const baseClass = "absolute w-full h-full bg-white transition-all duration-500 ease-in-out cursor-pointer origin-right";
    
    if (activeCard === "card-3") {
      if (cardId === "card-1") return `${baseClass} w-[70px] translate-x-[1000px]`;
      if (cardId === "card-2") return `${baseClass} w-[70px] translate-x-[940px] overflow-hidden`;
    }
    
    if (activeCard === "card-2" && cardId === "card-1") {
      return `${baseClass} w-[70px] translate-x-[1020px]`;
    }

    const card = CARDS.find(c => c.id === cardId);
    return `${baseClass} ${card.baseTranslate}`;
  };

  return (
    <div className="flex items-center justify-center">
      <div className="relative w-[1100px] h-[700px] perspective-[1000px]">
        {CARDS.map(({ id, component: Card, zIndex }) => (
          <div
            key={id}
            id={id}
            className={`${getCardClass(id)} ${zIndex}`}
            onClick={() => setActiveCard(id)}
          >
            <Card shadow={shadowStates[id]} />
          </div>
        ))}
      </div>
    </div>
  );
}