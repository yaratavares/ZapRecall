import { useState } from "react";
import ConterCards from "./ConterCards";
import TurnCard from "./TurnCard";

export default function BehindCard({ setCard, conter, myCard }) {
  const buttonsClass = [
    { class: "black", text: "Aprendi agora" },
    { class: "red", text: "Não lembrei" },
    { class: "green", text: "Lembrei com esforço" },
    { class: "yellow", text: "Zap!" },
  ];

  const [classButton, setClassButton] = useState("");

  const [cardState, setCardState] = useState(1);

  function borderColor(classButton) {
    setClassButton(classButton);
    setCardState("result");
  }

  return (
    <div className={`card ${classButton}`}>
      <div className="questionMini">
        <p>{myCard.question}</p>
      </div>
      <ConterCards conter={conter} />
      <div className="answer">
        <p>{myCard.answer}</p>
      </div>
      {cardState !== "result" ? (
        <div className="buttonAnswer">
          {buttonsClass.map((button) => (
            <button
              onClick={() => borderColor(button.class)}
              className={button.class}
            >
              {button.text}
            </button>
          ))}
        </div>
      ) : (
        <TurnCard setCard={setCard} />
      )}
    </div>
  );
}
