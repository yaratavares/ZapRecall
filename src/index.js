import ReactDOM from "react-dom";

function App() {
  return (
    <div className="box-content">
      <div className="pageInit hidden">
        <div className="logoInit">
          <img src="assets/logo.png" alt="logo" />
        </div>
        <div className="practice">
          <button>
            <p> Praticar React</p>
            <img src="assets/next.png" />
          </button>
        </div>
      </div>

      <div className="pageCards">
        <div class="logoPage">
          <img src="assets/logo-mini.png" alt="logo" />
        </div>
        <div className="box-cards">
          <div className="card front hidden">
            <div className="conterCards">
              <span>1/8</span>
            </div>
            <div className="question">
              <p>O que é JSX?</p>
            </div>
            <div className="turnCard">
              <img src="assets/turn.png" alt="turn" />
            </div>
          </div>

          <div className="card behind  hidden">
            <div className="questionMini">
              <p>O que é JSX?</p>
            </div>
            <div className="conterCards">
              <span>1/8</span>
            </div>
            <div className="answer">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                ullamcorper at quis eu. Malesuada iaculis viverra a tincidunt
                arcu nullam. Orci tortor arcu placerat id sit et. Elementum in
                erat cras tortor at auctor diam.
              </p>
            </div>
            <div className="buttonAnswer">
              <button className="black">Aprendi agora</button>
              <button className="red">Não lembrei</button>
              <button className="green">Lembrei com esforço</button>
              <button className="yellow">
                <strong>Zap!</strong>
              </button>
            </div>
          </div>

          <div className="finished">
            <div className="title">
              <h2>PARABÉNS!</h2>
              <img src="assets/party.png"></img>
            </div>
            <div className="text">
              <p>Você não esqueceu de nenhum flashcard!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
