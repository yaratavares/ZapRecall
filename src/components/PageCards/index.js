import { useState } from "react";

import HeaderPage from "../HeaderPage";
import FrontCard from "../FrontCard";
import BehindCard from "../BehindCard";
import PageFinished from "../PageFinished";

import "./style.css";

export default function PageCards() {
  const objectCards = [
    {
      question: "O que é JSX?",
      answer: "Uma extensão de linguagem do JavaScript",
    },
    {
      question: "O React é __",
      answer: "Uma biblioteca JavaScript para construção de interfaces",
    },
    {
      question: "Componentes devem iniciar com __",
      answer: "Letra maiúscula",
    },
    {
      question: "Podemos colocar __ dentro do JSX",
      answer: "expressões",
    },
    {
      question: "O ReactDOM nos ajuda __",
      answer: "interagindo com a DOM para colocar componentes React na mesmas",
    },
    {
      question: "Usamos o npm para __",
      answer: "gerenciar os pacotes necessários e suas dependências",
    },
    {
      question: "Usamos props para __",
      answer: "passar diferentes informações para componentes",
    },
    {
      question: "Usamos estado (state) para __",
      answer:
        "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    },
  ];

  const [conter, setConter] = useState(1);
  const [card, setCard] = useState("front");
  const [booleanAnswer, setBooleanAnswer] = useState([]);

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
        {conter === 8 ? (
          <PageFinished boolean={booleanAnswer} />
        ) : card === "front" ? (
          <FrontCard
            setCard={turnCardBehind}
            conter={conter}
            myCard={objectCards[conter - 1]}
          />
        ) : (
          <BehindCard
            setCard={turnCardFront}
            conter={conter}
            myCard={objectCards[conter - 1]}
            boolean={booleanAnswer}
            setBoolean={setBooleanAnswer}
          />
        )}
      </div>
    </div>
  );
}
