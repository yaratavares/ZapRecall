import "./style.css";

export default function PageFinished({ boolean }) {
  if (boolean.includes(false)) {
    return <PageFailure />;
  } else {
    return <PageSucess />;
  }
}

function PageSucess() {
  return (
    <div className="finished">
      <div className="title">
        <h2>PARABÉNS!</h2>
        <img src="assets/party.png"></img>
      </div>
      <div className="text">
        <p>Você não esqueceu de nenhum flashcard!</p>
      </div>
      <div className="practice">
        <button onClick={refreshPage} data-identifier="start-zap-recall">
          <p>Tentar novamente</p>
          <img src="assets/next.png" />
        </button>
      </div>
    </div>
  );
}

function PageFailure() {
  return (
    <div className="finished">
      <div className="title">
        <h2>Putz..</h2>
        <img src="assets/sad.png"></img>
      </div>
      <div className="text">
        <p>
          Você esqueceu alguns flashcards..
          <br />
          Não desanime! Na próxima você consegue!
        </p>
      </div>
      <div className="practice">
        <button onClick={refreshPage} data-identifier="start-zap-recall">
          <p>Tentar novamente</p>
          <img src="assets/next.png" />
        </button>
      </div>
    </div>
  );
}

function refreshPage() {
  window.location.reload(false);
}
