
/*  Importando um componente jsx  */
import Contador from "./components/Contador";
import AlterarNome from "./components/AlterarNome";
import Desafio from "./components/Desafio";
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Exercícios useState</h1>
        <p className="app-subtitle">
          Aprenda a gerenciar estado no React com interações intuitivas e design moderno
        </p>
      </header>

      <div className="exercises-grid">
        <div className="exercise-card">
          <div className="exercise-header">
            <h2 className="exercise-title">Contador Simples</h2>
            <p className="exercise-description">
              Clique no botão para incrementar o contador
            </p>
          </div>
          <Contador />
        </div>

        <div className="exercise-card">
          <div className="exercise-header">
            <h2 className="exercise-title">Alterar Nome</h2>
            <p className="exercise-description">
              Mude o nome exibido com um clique
            </p>
          </div>
          <AlterarNome />
        </div>

        <div className="exercise-card">
          <div className="exercise-header">
            <h2 className="exercise-title">Desafio Extra</h2>
            <p className="exercise-description">
              Aumente ou diminua o valor (mínimo: 0)
            </p>
          </div>
          <Desafio />
        </div>
      </div>
    </div>
  );
}

export default App;