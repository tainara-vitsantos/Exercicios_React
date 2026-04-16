import { useState } from "react";

function AlterarNome() {
  const [nome, setNome] = useState("Maria");

  return (
    <div>
      <div className="value-display name">
        {nome}
      </div>
      <div className="buttons-group">
        <button
          className="btn btn-secondary"
          onClick={() => setNome("João")}
          aria-label="Alterar nome para João"
        >
          Alterar Nome
        </button>
      </div>
    </div>
  );
}

export default AlterarNome;
