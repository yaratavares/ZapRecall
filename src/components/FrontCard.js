import ConterCards from "./ConterCards";
import TurnCard from "./TurnCard";

export default function FrontCard({ setCard, conter, myCard }) {
  return (
    <div className="card">
      <ConterCards conter={conter} />
      <div className="question">
        <p>{myCard.question}</p>
      </div>
      <TurnCard setCard={setCard}></TurnCard>
    </div>
  );
}
