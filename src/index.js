import ReactDOM from "react-dom";
import { useState } from "react";

import PageInit from "./components/PageInit";
import PageCards from "./components/PageCards";
import "./css/reset.css";
import "./css/style.css";

function App() {
  const [pagina, setPagina] = useState("init");

  return (
    <div className="box-content">
      {pagina === "init" ? (
        <PageInit setPagina={setPagina} />
      ) : (
        <PageCards></PageCards>
      )}
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
