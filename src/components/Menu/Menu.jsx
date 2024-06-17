// Menu.jsx
import React, { useState } from "react";
import CardPiatto from "../CardPiatto/CardPiatto";
import CardCategoria from "../CardCategoria/CardCategoria";

const Menu = ({ card, onDelete, onOrdina, onRestore }) => {
  const [selectedCategoria, setSelectedCategoria] = useState(null);

  const handleCategoriaClick = (categoria) => {
    setSelectedCategoria(categoria);
  };

  // Filtra i piatti in base alla categoria selezionata
  const piattiCategoria = selectedCategoria
    ? card.filter((piatto) => piatto.categoria === selectedCategoria)
    : [];

  return (
    <div className="menu">
      <h2>Il nostro Menu: che cosa vuoi ordinare?</h2>
      <div className="row">
        {["primi", "secondi"].map((categoria) => (
          <div key={categoria} className="col-md-4 mb-4">
            <CardCategoria
              categoria={categoria}
              onClick={() => handleCategoriaClick(categoria)}
            />
            <button
              className="btn btn-secondary mt-2"
              onClick={() => onRestore(categoria)}
            >
              Ripristina {categoria}
            </button>
          </div>
        ))}
      </div>

      <div className="row">
        {piattiCategoria.map((piatto) => (
          <CardPiatto
            key={piatto.id}
            piatto={piatto}
            onDelete={onDelete}
            onOrdina={onOrdina}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
