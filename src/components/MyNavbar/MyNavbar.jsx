import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Carrello from '../Carrello/Carrello';
import { Basket3 } from 'bootstrap-icons-react';
import "./MyNavbar.css";

function MyNavbar({ carrello = [], onIncrement, onDecrement, onRemove, onSvuota }) {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to="/home" className="navbar-brand">
            <img src="/logo.jpg" alt="Logo del Brand" className="logo-img" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/menu" className="nav-link">
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="w">
                  Chi siamo
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="w">
                  Prenota
                </a>
              </li>
            </ul>
          </div>
            <Button variant="danger" onClick={handleShow} className="carrello-button">
              <Basket3 /> ({carrello.length || 0})
            </Button>
        </div>
      </nav>

      <Carrello
        show={show}
        handleClose={handleClose}
        carrello={carrello}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onRemove={onRemove}
        onSvuota={onSvuota}
      />
    </>
  );
}

export default MyNavbar;
