import { useState } from "react";

function Desafio() {
  const [valor, setValor] = useState(10);

  const aumentar = () => {
    setValor(valor + 5);
  };

  const diminuir = () => {
    if (valor - 5 >= 0) {
      setValor(valor - 5);
    }
  };

  return (
    <div>
      <div className="value-display challenge">
        {valor}
      </div>
      <div className="buttons-group">
        <button
          className="btn btn-success"
          onClick={aumentar}
          aria-label="Aumentar valor em 5"
        >
          +5
        </button>
        <button
          className="btn btn-danger"
          onClick={diminuir}
          disabled={valor <= 0}
          aria-label="Diminuir valor em 5"
        >
          -5
        </button>
      </div>
    </div>
  );
}

export default Desafio;