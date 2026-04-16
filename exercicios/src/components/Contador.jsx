import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <div className="value-display counter">
        {contador}
      </div>
      <div className="buttons-group">
        <button
          className="btn btn-primary"
          onClick={() => setContador(contador + 1)}
          aria-label="Incrementar contador"
        >
          +1
        </button>
      </div>
    </div>
  );
}

export default Contador;



