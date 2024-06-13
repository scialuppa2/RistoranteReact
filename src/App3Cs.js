import "./App.css";
import MyNavbar from "./components/MyNavbar/MyNavbar";
import MyFooter from "./components/MyFooter/MyFooter";
import Menu from "./components/Menu/Menu";
import { Component } from "react";

class App3Cs extends Component {
  render(){
    return (
    <div className="App">
      <MyNavbar />
      <div className="container">
        <h1>Benvenuti nel mio Ristorante</h1>
        <img
          src="https://ristorantezu.it/wp-content/uploads/2024/01/ristorantezu-panorama-tavolo-desc.webp"
          alt="scuola"
        ></img>
        <Menu/>
      </div>
      <MyFooter/>
    </div>
    )
  } 
}

export default App3Cs;
