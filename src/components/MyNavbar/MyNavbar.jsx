import React from 'react';
import './MyNavbar.css';


function MyNavbar() {
  

  return (
    <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a className="navbar-brand" href="w"><img src="/logo.jpg" alt="Logo del Brand" className="logo-img" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a className="nav-link active" aria-current="page" href="w">Home</a>
        </li>
        <li class="nav-item">
          <a className="nav-link" href="w">Chi siamo</a>
        </li>
        <li class="nav-item">
          <a className="nav-link" href="w">Prenota</a>
        </li>
        <li class="nav-item">
          <a className="nav-link" href="w">Menù</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}

export default MyNavbar;