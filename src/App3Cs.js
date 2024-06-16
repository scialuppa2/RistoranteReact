import React, { Component } from "react";
import "./App.css";
import MyNavbar from "./components/MyNavbar/MyNavbar";
import Carrello from "./components/Carrello/Carrello";
import MyFooter from "./components/MyFooter/MyFooter";
import Menu from "./components/Menu/Menu";

class App3Cs extends Component {
  state = {
    Piatti: [
      {
        id: 1,
        name: "Spaghetti alla Carbonara",
        image: "/assets/carbonara.jpg",
        categoria: "primo",
        prezzo: 10.0,
        deleted: false,
      },
      {
        id: 2,
        name: "Fusilli con pesto di Zucchine",
        image: "/assets/zucchine.jpg",
        categoria: "primo",
        prezzo: 9.0,
        deleted: false,
      },
      {
        id: 3,
        name: "Spaghetti Cremosi",
        image: "/assets/cremosa.jpg",
        categoria: "primo",
        prezzo: 11.0,
        deleted: false,
      },
      {
        id: 4,
        name: "Tonnarelli Piselli e Pancetta",
        image: "/assets/piselli&pancetta.jpg",
        categoria: "primo",
        prezzo: 12.0,
        deleted: false,
      },
      {
        id: 5,
        name: "Rigatoni alla gricia",
        image: "/assets/gricia.jpg",
        categoria: "primo",
        prezzo: 10.5,
        deleted: false,
      },
      {
        id: 6,
        name: "Gnocchi di Armando",
        image: "/assets/gnocchi.jpg",
        categoria: "primo",
        prezzo: 9.5,
        deleted: false,
      },
      {
        id: 7,
        name: "Pollo alla cacciatora",
        image: "/assets/pollo.jpg",
        categoria: "secondo",
        prezzo: 15.0,
        deleted: false,
      },
      {
        id: 8,
        name: "Arrosto di vitello",
        image: "/assets/arrosto.jpg",
        categoria: "secondo",
        prezzo: 16.5,
        deleted: false,
      },
      {
        id: 9,
        name: "Maialino al forno",
        image: "/assets/maialino.jpg",
        categoria: "secondo",
        prezzo: 15.5,
        deleted: false,
      },
    ],
    carrello: [],
  };

  delete_dish = (id_to_del) => {
    const updatedPiatti = this.state.Piatti.map((piatto) =>
      piatto.id === id_to_del ? { ...piatto, deleted: true } : piatto
    );
    this.setState({ Piatti: updatedPiatti });
  };

  ripristina_dish = (categoria = null) => {
    const updatedPiatti = this.state.Piatti.map(piatto =>
      !categoria || piatto.categoria === categoria ? { ...piatto, deleted: false } : piatto
    );
    this.setState({ Piatti: updatedPiatti });
  }

  ordina_piatto = (piatto) => {
    const { carrello } = this.state;
    const indicePiatto = carrello.findIndex((item) => item.id === piatto.id);
    if (indicePiatto !== -1) {
      // Se il piatto è già nel carrello, incrementa la quantità
      const nuovoCarrello = [...carrello];
      nuovoCarrello[indicePiatto].quantita++;
      this.setState({ carrello: nuovoCarrello });
    } else {
      // Altrimenti, aggiungi il piatto al carrello con quantità 1
      this.setState((prevState) => ({
        carrello: [...prevState.carrello, { ...piatto, quantita: 1 }],
      }));
    }
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
      // Se la quantità è maggiore di 1, decrementa la quantità
      const nuovoCarrello = [...carrello];
      nuovoCarrello[indicePiatto].quantita--;
      this.setState({ carrello: nuovoCarrello });
    }
  };

  incrementa_quantita = (piatto) => {
    const { carrello } = this.state;
    const indicePiatto = carrello.findIndex((item) => item.id === piatto.id);
    if (indicePiatto !== -1) {
      // Incrementa la quantità
      const nuovoCarrello = [...carrello];
      nuovoCarrello[indicePiatto].quantita++;
      this.setState({ carrello: nuovoCarrello });
    }
  };

  svuotaCarrello = () => {
    this.setState({ carrello: [] });
  }

  render() {
    const { Piatti, carrello } = this.state;
    const displayedPiatti = Piatti.filter((piatto) => !piatto.deleted);

    return (
      <div className="App">
        <MyNavbar />
        <div className="container-fluid">
          <h1>Benvenuti nel mio Ristorante</h1>
          <img
            src="https://ristorantezu.it/wp-content/uploads/2024/01/ristorantezu-panorama-tavolo-desc.webp"
            alt="scuola"
          />
          <div className="row">
            <div className="col-md-9">
              <Menu
                card={displayedPiatti}
                onDelete={this.delete_dish}
                onRestore={this.ripristina_dish}
                onOrdina={this.ordina_piatto}
              />
            </div>
            <div className="col-md-3">
              <Carrello
                carrello={carrello}
                onIncrement={this.incrementa_quantita}
                onDecrement={this.decrementa_quantita}
                onRemove={this.rimuovi_piatto}
                onSvuota={this.svuotaCarrello}
              />
            </div>
          </div>
        </div>
        <MyFooter />
      </div>
    );
  }
}

export default App3Cs;
