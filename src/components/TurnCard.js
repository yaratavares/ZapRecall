export default function TurnCard({ setCard }) {
  return (
    <div className="turnCard" onClick={setCard}>
      <img src="assets/turn.png" alt="turn" />
    </div>
  );
}
