import { useState } from "react";

import PageInit from "../PageInit";
import PageCards from "../PageCards";

import "../../css/reset.css";

export default function ZapRecall() {
  const [pagina, setPagina] = useState("init");

  return (
    <div className="box-content">
      {pagina === "init" ? <PageInit setPagina={setPagina} /> : <PageCards />}
    </div>
  );
}
