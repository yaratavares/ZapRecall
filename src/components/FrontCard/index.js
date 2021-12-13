import ConterCards from "../ConterCards";
import TurnCard from "../TurnCard";

import "./style.css";

export default function FrontCard({ setCard, conter, myCard }) {
  return (
    <div className="card" data-identifier="flashcard">
      <ConterCards conter={conter} />
      <div className="question">
        <p>{myCard.question}</p>
      </div>
      <TurnCard setCard={setCard}></TurnCard>
    </div>
  );
}
