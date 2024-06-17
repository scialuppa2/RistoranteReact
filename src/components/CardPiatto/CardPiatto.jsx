import React from 'react';
import "./CardPiatto.css";

const CardPiatto = ({ piatto, onDelete, onOrdina }) => {
  return (
    <div key={piatto.id} className="col-md-4 mb-4">
            <div className="card">
            <img src={piatto.image} className="card-img-top img-fluid" alt={piatto.name} />
              <div className="card-body">
                <h5 className="card-title">{piatto.name}</h5>
                <p className="card-text">Prezzo: €{piatto.prezzo.toFixed(2)}</p>
                <button className="btn btn-primary" onClick={() => onOrdina(piatto)}>Ordina</button>
                <button className="btn btn-secondary">Modifica</button>
                <button className="btn btn-danger" onClick={() => onDelete(piatto.id)}>Elimina</button>
              </div>
            </div>
          </div>
  );
};

export default CardPiatto;
