import { useState } from "react";
import ConterCards from "./ConterCards";
import TurnCard from "./TurnCard";

export default function BehindCard({ setCard, conter }) {
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
        <p>O que é JSX?</p>
      </div>
      <ConterCards conter={conter} />
      <div className="answer">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
          ullamcorper at quis eu. Malesuada iaculis viverra a tincidunt arcu
          nullam. Orci tortor arcu placerat id sit et. Elementum in erat cras
          tortor at auctor diam.
        </p>
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
