import React from 'react';
import './Menu.css';

function Menu({ card, onDelete, onRestoreAll, onRestorePrimi, onRestoreSecondi, onOrdina }) {
  const handleDelete = id => {
    onDelete(id);
  };

  const handleRestoreAll = () => {
    onRestoreAll();
  };

  const handleRestorePrimi = () => {
    onRestorePrimi();
  };

  const handleRestoreSecondi = () => {
    onRestoreSecondi();
  };

  const handleOrdina = (piatto) => {
    onOrdina(piatto);
  };

  return (
    <div className="container">
      <h2>Il nostro Menù: cosa desideri ordinare?</h2>
      <div className="row">
        {card.map((piatto) => (
          <div key={piatto.id} className="col-md-4 mb-4">
            <div className="card">
            <img src={piatto.image} className="card-img-top img-fluid" alt={piatto.name} />
              <div className="card-body">
                <h5 className="card-title">{piatto.name}</h5>
                <p className="card-text">Prezzo: €{piatto.prezzo.toFixed(2)}</p>
                <button className="btn btn-primary" onClick={() => handleOrdina(piatto)}>Ordina</button>
                <button className="btn btn-secondary">Modifica</button>
                <button className="btn btn-danger" onClick={() => handleDelete(piatto.id)}>Elimina</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3">
        <button className="btn btn-success me-2" onClick={handleRestoreAll}>Ripristina tutti i piatti</button>
        <button className="btn btn-success me-2" onClick={handleRestorePrimi}>Ripristina i primi</button>
        <button className="btn btn-success" onClick={handleRestoreSecondi}>Ripristina i secondi</button>
      </div>
    </div>
  );
}

export default Menu;
