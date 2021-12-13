import "./style.css";

export default function PageInit({ setPagina, setMeta }) {
  return (
    <div className="pageInit">
      <div className="logoInit">
        <img src="assets/logo.png" alt="logo" />
      </div>
      <div className="practice">
        <input
          placeholder="Sua meta de zaps"
          onChange={(e) => setMeta(e.target.value)}
        />
        <button
          onClick={() => setPagina("practice")}
          data-identifier="start-zap-recall"
        >
          <p>Praticar React</p>
          <img src="assets/next.png" />
        </button>
      </div>
    </div>
  );
}
