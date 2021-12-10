import HeaderPage from "./HeaderPage";

export default function PageInit({ setPagina }) {
  return (
    <div className="pageInit">
      <div className="logoInit">
        <img src="assets/logo.png" alt="logo" />
      </div>
      <div className="practice">
        <button onClick={() => displayPractice(setPagina)}>
          <p>Praticar React</p>
          <img src="assets/next.png" />
        </button>
      </div>
    </div>
  );
}

function displayPractice(setPagina) {
  setPagina("practice");
}
