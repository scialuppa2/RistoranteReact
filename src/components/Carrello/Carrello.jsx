import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import "./Carrello.css"

function Carrello({ show, handleClose, carrello, onIncrement, onDecrement, onRemove, onSvuota }) {

  const calcolaTotale = () => {
    return carrello.reduce((totale, piatto) => totale + (piatto.prezzo * piatto.quantita), 0).toFixed(2);
  };

  const confermaOrdine = () => {
    if (carrello.length === 0) {
      alert('Non è stato effettuato nessun ordine. Aggiungi almeno un piatto prima di confermare!');
    } else {
      alert('Ordine confermato! In preparazione...');
      onSvuota();
      handleClose();
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Il tuo ordine</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {carrello.length === 0 ? (
          <p>Nessun ordine effettuato.</p>
        ) : (
          <>
            {carrello.map(piatto => (
              <div key={piatto.id} className="carrello-item mb-3">
              <img src={piatto.image} className="carrello-img" alt={piatto.name} />
              <div className="carrello-details">
                <h5>{piatto.name}</h5>
                <p>Prezzo: €{(piatto.prezzo * piatto.quantita).toFixed(2)}</p>
                <button className="btn btn-secondary me-2" onClick={() => onDecrement(piatto)}>-</button>
                <span>{piatto.quantita}</span>
                <button className="btn btn-primary mx-2" onClick={() => onIncrement(piatto)}>+</button>
                <button className="btn btn-danger mx-5" onClick={() => onRemove(piatto)}>Rimuovi</button>
              </div>
            </div>
            ))}
            <h5>Totale: €{calcolaTotale()}</h5>
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={onSvuota}>
          Svuota Carrello
        </Button>
        <Button variant="success" onClick={confermaOrdine}>
          Conferma Ordine
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Carrello;
