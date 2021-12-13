import { useState } from "react";

import ConterCards from "../ConterCards";
import TurnCard from "../TurnCard";

import "./style.css";

export default function BehindCard({
  setCard,
  conter,
  myCard,
  boolean,
  setBoolean,
  textButton,
  setTextButton,
}) {
  const buttonsClass = [
    { class: "black", text: "Aprendi agora", boolean: false },
    { class: "red", text: "Não lembrei", boolean: false },
    { class: "green", text: "Lembrei com esforço", boolean: true },
    { class: "yellow", text: "Zap!", boolean: true },
  ];

  const [classButton, setClassButton] = useState("");
  const [cardState, setCardState] = useState(1);

  function borderColor(classButton, booleanButton, stringButton) {
    setBoolean([...boolean, booleanButton]);
    setClassButton(classButton);
    setCardState("result");
    setTextButton([...textButton, stringButton]);
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
              onClick={() =>
                borderColor(button.class, button.boolean, button.text)
              }
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
