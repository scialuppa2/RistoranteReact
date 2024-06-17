import React from "react";
import "./CardCategoria.css";

const CardCategoria = ({ categoria, onClick }) => {
  // Funzione per ottenere il nome dell'immagine basato sulla categoria
  const getImageName = (categoria) => {
    switch (categoria) {
      case "primi":
        return "gricia.jpg";
      case "secondi":
        return "maialino.jpg";
      case "contorni":
        return "contorni.jpg";
      case "dolci":
        return "dolci.jpg";
      default:
        return "default.jpg";
    }
  };

  const imageName = getImageName(categoria);

  return (
      <div className="card" onClick={onClick}>
        <img
          src={`/assets/${imageName}`}
          className="card-img-top"
          alt={categoria}
        />
        <div className="card-body">
        <h5 className="card-title">{categoria.charAt(0).toUpperCase() + categoria.slice(1)}</h5>
        </div>
      </div>
  );
};

export default CardCategoria;
