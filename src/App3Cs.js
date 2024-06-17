import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Menu from "./components/Menu/Menu";
import Home from "./components/Home/Home";
import Piatti from "./data/piatti.json";

class App3Cs extends Component {
  state = {
    Piatti: Piatti,
    carrello: [],
  };

  delete_dish = (id_to_del) => {
    const updatedPiatti = this.state.Piatti.map((piatto) =>
      piatto.id === id_to_del ? { ...piatto, deleted: true } : piatto
    );
    this.setState({ Piatti: updatedPiatti });
  };

  ripristina_dish = (categoria = null) => {
    const updatedPiatti = this.state.Piatti.map((piatto) =>
      !categoria || piatto.categoria === categoria
        ? { ...piatto, deleted: false }
        : piatto
    );
    this.setState({ Piatti: updatedPiatti });
  };

  ordina_piatto = (piatto) => {
    this.setState((prevState) => {
      const carrello = [...prevState.carrello];
      const indicePiatto = carrello.findIndex((item) => item.id === piatto.id);

      if (indicePiatto !== -1) {
        carrello[indicePiatto].quantita++;
      } else {
        carrello.push({ ...piatto, quantita: 1 });
      }

      return { carrello };
    });
  };

  rimuovi_piatto = (piatto) => {
    const nuovoCarrello = this.state.carrello.filter(
      (item) => item.id !== piatto.id
    );
    this.setState({ carrello: nuovoCarrello });
  };

  decrementa_quantita = (piatto) => {
    const { carrello } = this.state;
    const indicePiatto = carrello.findIndex((item) => item.id === piatto.id);
    if (indicePiatto !== -1 && carrello[indicePiatto].quantita > 1) {
      const nuovoCarrello = [...carrello];
      nuovoCarrello[indicePiatto].quantita--;
      this.setState({ carrello: nuovoCarrello });
    }
  };

  incrementa_quantita = (piatto) => {
    const { carrello } = this.state;
    const indicePiatto = carrello.findIndex((item) => item.id === piatto.id);
    if (indicePiatto !== -1) {
      const nuovoCarrello = [...carrello];
      nuovoCarrello[indicePiatto].quantita++;
      this.setState({ carrello: nuovoCarrello });
    }
  };

  svuotaCarrello = () => {
    this.setState({ carrello: [] });
  };

  render() {
    const { Piatti, carrello } = this.state;
    const displayedPiatti = Piatti.filter((piatto) => !piatto.deleted);

    return (
      <Router>
        <div className="App">
          <Routes>
            {/* Route principale con Layout, MyNavbar e MyFooter */}
            <Route
              path="/"
              element={
                <Layout
                  carrello={carrello}
                  onIncrement={this.incrementa_quantita}
                  onDecrement={this.decrementa_quantita}
                  onRemove={this.rimuovi_piatto}
                  onSvuota={this.svuotaCarrello}
                />
              }
            >
              {/* Route per Home */}
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              
              {/* Route per Menu */}
              <Route
                path="menu"
                element={
                  <Menu
                    card={displayedPiatti}
                    onDelete={this.delete_dish}
                    onRestore={this.ripristina_dish}
                    onOrdina={this.ordina_piatto}
                  />
                }
              />
            </Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App3Cs;
