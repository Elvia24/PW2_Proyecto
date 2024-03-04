// Navbar.jsx
import React from 'react';

function Navbar() {
  return (
    <div>
          <div className="top-nav">
                <div className="container d-flex ">
                
                <ul className="d-flex">
                <li><a href="/front/pages/inicio_sesion.html">Inicio Sesión</a></li>
                <li><a href="/front/pages/registro.html">Registro</a></li>
                
                </ul>
            </div>
          </div>
          <div className="navigation">
            <div className="nav-center container d-flex">
                <a href="../index.html" className="logo">
                <div className="logo-container">
                    <img src="../../src/images/Simbolo.png" alt="Logo de ArtemiShop" />
                    <h1>Artemi<span className="shop">Shop</span></h1>
                </div>
                </a>
    
                <ul className="nav-list d-flex">
                <li className="nav-item">
                    <a href="#" className="nav-link">Productos</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Categorias</a>
                </li>
                <li className="icons d-flex">
                    <a href="../inicio_sesion.html" className="icon">
                    <i className="bx bx-user"></i>
                    </a>
    
                    <a href="../carrito.html" className="icon">
                    <i className="bx bx-cart"></i>
                    <span className="d-flex">0</span>
                    </a>
                </li>
                </ul>
    
                <div className="icons d-flex">
                <a href="../inicio_sesion.html" className="icon">
                    <i className="bx bx-user"></i>
                </a>
                
                <a href="../carrito.html" className="icon">
                    <i className="bx bx-cart"></i>
                    <span className="d-flex">0</span>
                </a>
                </div>
    
                <div className="hamburger">
                <i className="bx bx-menu-alt-left"></i>
                </div>
            </div>
            </div>

    </div>


    
  );
}

export default Navbar;