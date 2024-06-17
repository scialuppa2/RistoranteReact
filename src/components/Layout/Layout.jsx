import React from 'react';
import { Outlet } from 'react-router-dom';
import MyNavbar from '../MyNavbar/MyNavbar';
import MyFooter from '../MyFooter/MyFooter';
import Carrello from '../Carrello/Carrello';

const Layout = ({ carrello, onIncrement, onDecrement, onRemove, onSvuota }) => {
  return (
    <div className="App">
      <MyNavbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-9">
            <Outlet /> {/* Renderizza il componente figlio delle rotte */}
          </div>
          <div className="col-md-3">
            <div className="sidebar">
              <Carrello
                carrello={carrello}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                onRemove={onRemove}
                onSvuota={onSvuota}
              />
            </div>
          </div>
        </div>
      </div>
      <MyFooter />
    </div>
  );
};

export default Layout;
