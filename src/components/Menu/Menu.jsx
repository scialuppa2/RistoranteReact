import React, { useState } from 'react';
import CardPiatto from '../CardPiatto/CardPiatto';
import CardCategoria from '../CardCategoria/CardCategoria';

const Menu = ({ card, onDelete, onRestore, onOrdina }) => {
  const [categoriaSelezionata, setCategoriaSelezionata] = useState(null);

  const handleCategoriaClick = (categoria) => {
    setCategoriaSelezionata(categoria);
  };

  const piattiFiltrati = card.filter(piatto => piatto.categoria === categoriaSelezionata);

  return (
    <div className="menu">
      <h2>Il nostro Menu: che cosa vuoi ordinare?</h2>
      <div className="row">
        {['primi', 'secondi', 'contorni', 'dolci'].map((categoria) => (
          <div key={categoria} className="col-md-3 mb-4">
            <CardCategoria
              categoria={categoria}
              onClick={() => handleCategoriaClick(categoria)}
            />
            <button className="btn btn-success mt-2" onClick={() => onRestore(categoria)}>
              Ripristina {categoria}
            </button>
          </div>
        ))}
      </div>
      {categoriaSelezionata && (
        <div className="row">
          {piattiFiltrati.map((piatto) => (
            <CardPiatto
              key={piatto.id}
              piatto={piatto}
              onDelete={onDelete}
              onOrdina={onOrdina}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
