import ConterCards from "./ConterCards";
import TurnCard from "./TurnCard";

export default function FrontCard({ setCard, conter }) {
  return (
    <div className="card">
      <ConterCards conter={conter} />
      <div className="question">
        <p>O que é JSX?</p>
      </div>
      <TurnCard setCard={setCard}></TurnCard>
    </div>
  );
}
