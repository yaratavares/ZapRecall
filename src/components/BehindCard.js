import { useState } from "react";
import ConterCards from "./ConterCards";
import TurnCard from "./TurnCard";

export default function BehindCard({
  setCard,
  conter,
  myCard,
  boolean,
  setBoolean,
}) {
  const buttonsClass = [
    { class: "black", text: "Aprendi agora", boolean: false },
    { class: "red", text: "Não lembrei", boolean: false },
    { class: "green", text: "Lembrei com esforço", boolean: true },
    { class: "yellow", text: "Zap!", boolean: true },
  ];

  const [classButton, setClassButton] = useState("");

  const [cardState, setCardState] = useState(1);

  function borderColor(classButton, booleanButton) {
    setBoolean(boolean, booleanButton);
    boolean.push(booleanButton);
    setClassButton(classButton);
    setCardState("result");
  }

  return (
    <div className={`card ${classButton}`} data-identifier="flashcard">
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
              onClick={() => borderColor(button.class, button.boolean)}
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
