import { useState } from "react";

import HeaderPage from "./HeaderPage";
import FrontCard from "./FrontCard";
import BehindCard from "./BehindCard";
import TurnCard from "./TurnCard";

export default function PageCards() {
  const [conter, setConter] = useState(1);
  const [card, setCard] = useState("front");

  function turnCardFront() {
    setConter(conter + 1);
    setCard("front");
  }

  function turnCardBehind() {
    setCard("behind");
  }

  return (
    <div className="pageCards">
      <HeaderPage />
      <div className="box-cards">
        {card === "front" ? (
          <FrontCard setCard={turnCardBehind} conter={conter} />
        ) : (
          <BehindCard setCard={turnCardFront} conter={conter} />
        )}
      </div>
    </div>
  );
}
