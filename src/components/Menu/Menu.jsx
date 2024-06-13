import React from 'react';
import './Menu.css';

function Menu() {
  return (
    <div className="container">
        <h2>Il nostro Menù</h2>
        <div id="carouselExample" className="carousel slide small-carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/assets/carbonara.jpg" className="d-block w-100 fixed-size" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="/assets/zucchine.jpg" className="d-block w-100 fixed-size" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="/assets/cremosa.jpg" className="d-block w-100 fixed-size" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="/assets/piselli&pancetta.jpg" className="d-block w-100 fixed-size" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
    </div>
  );
}

export default Menu;
