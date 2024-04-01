// Navbar.jsx
import React, { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <div className="top-nav">
                <div className="container d-flex ">

                    <ul className="d-flex">
                        <li><a href="/ArtemiShop_IniciarSesion">Inicio Sesión</a></li>
                        <li><a href="/ArtemiShop_Registro">Registro</a></li>

                    </ul>
                </div>
            </div>
            <div className="navigation">
                <div className="nav-center container d-flex">
                    <a href="/" className="logo">
                        <div className="logo-container">
                            <img src="../../src/images/Simbolo.png" alt="Logo de ArtemiShop" />
                            <h1>Artemi<span className="shop">Shop</span></h1>
                        </div>
                    </a>
                    {/* left sidebar*/}
                    <ul className={`nav-list d-flex ${isOpen ? 'open' : ''}`}>
                        <li className="nav-item">
                            <a href="/ArtemiShop_Productos" className="nav-link">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a href="/ArtemiShop_Categorias" className="nav-link">Categorias</a>
                        </li>
                        <li className="icons d-flex">
                            <a href="#" className="icon">
                                <i className="bx bx-user"></i>
                            </a>

                            <a href="#" className="icon">
                                <i className="bx bx-cart"></i>
                                <span className="d-flex">0</span>
                            </a>
                        </li>
                    </ul>
                    {/* left sidebar*/}
                    <div className="icons d-flex">
                        <a href="#" className="icon ">
                            <i className="bx bx-user"></i>
                            <label className="username-label" htmlFor="">username</label>
                        </a>

                        <a href="#" className="icon">
                            <i className="bx bx-cart"></i>
                            <span className="d-flex">0</span>
                        </a>
                    </div>

                    <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                        <i className="bx bx-menu-alt-left"></i>
                    </div>
                </div>
            </div>

        </div>



    );
}

export default Navbar;