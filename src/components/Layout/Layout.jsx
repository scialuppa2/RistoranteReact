import React from "react";
import { Outlet } from "react-router-dom";
import MyNavbar from "../MyNavbar/MyNavbar";
import MyFooter from "../MyFooter/MyFooter";

const Layout = ({ carrello, onIncrement, onDecrement, onRemove, onSvuota }) => {
  return (
    <div className="App">
      <MyNavbar
        carrello={carrello}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onRemove={onRemove}
        onSvuota={onSvuota}
      />
      <div className="container-fluid">
        <div className="row m-5">
          <Outlet />
        </div>
      </div>
      <MyFooter />
    </div>
  );
};

export default Layout;
