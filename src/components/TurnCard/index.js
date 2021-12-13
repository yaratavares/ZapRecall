import "./style.css";

export default function TurnCard({ setCard }) {
  return (
    <div className="turnCard" onClick={setCard} data-identifier="arrow">
      <img src="assets/turn.png" alt="turn" />
    </div>
  );
}
