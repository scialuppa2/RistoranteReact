import React from 'react';

function Carrello({ carrello, onIncrement, onDecrement, onRemove }) {
  const calcolaTotale = () => {
    return carrello.reduce((totale, piatto) => totale + (piatto.prezzo * piatto.quantita), 0).toFixed(2);
  };


  return (
    <div className="card">
      <div className="card-header">Il tuo Ordine</div>
      <ul className="list-group list-group-flush">
        {carrello.map(piatto => (
          <li key={piatto.id} className="list-group-item">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h6>{piatto.name}</h6>
                <p>Prezzo: €{piatto.prezzo.toFixed(2)}</p>
              </div>
              <div className="d-flex align-items-center">
                <button className="btn btn-outline-secondary btn-sm me-1" onClick={() => onDecrement(piatto)}>-</button>
                <span>{piatto.quantita}</span>
                <button className="btn btn-outline-secondary btn-sm ms-1" onClick={() => onIncrement(piatto)}>+</button>
                <button className="btn btn-danger btn-sm ms-2" onClick={() => onRemove(piatto)}>Rimuovi</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="card-footer text-end">
        <h5>Totale: €{calcolaTotale()}</h5>
        <button className="btn btn-success mt-2" onClick={alert('Ordine riuscito!')}>Conferma</button>
      </div>
    </div>
  );
}

export default Carrello;
