import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importa Link y useNavigate

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const isAuthenticated = sessionStorage.getItem('token') !== null; // Verifica si el usuario está autenticado
    const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.removeItem('token'); // Elimina el token
        navigate('/'); // Redirecciona a la página principal o de inicio
    };

    return (
        <div>
            <div className="top-nav">
                <div className="container d-flex">
                    {!isAuthenticated ? (
                        <ul className="d-flex">
                            <li><Link to="/ArtemiShop_IniciarSesion" className="nav-link">Inicio Sesión</Link></li>
                            <li><Link to="/ArtemiShop_Registro" className="nav-link">Registro</Link></li>
                        </ul>
                    ) : (
                        <ul className="d-flex">
                            <li><Link to="#" onClick={handleLogout} className="nav-link">Cerrar Sesión</Link></li>
                        </ul>
                    )}
                </div>
            </div>
            <div className="navigation">
                <div className="nav-center container d-flex">
                    <Link to="/" className="logo">
                        <div className="logo-container">
                            <img src="../../src/images/Simbolo.png" alt="Logo de ArtemiShop" />
                            <h1>Artemi<span className="shop">Shop</span></h1>
                        </div>
                    </Link>
                    {/* left sidebar */}
                    <ul className={`nav-list d-flex ${isOpen ? 'open' : ''}`}>
                        {isAuthenticated && (
                            <>
                                <li className="nav-item">
                                    <Link to="/ArtemiShop_Productos" className="nav-link">Productos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/ArtemiShop_Categorias" className="nav-link">Categorias</Link>
                                </li>
                            </>
                        )}
                    </ul>
                    {/* right sidebar */}
                    {isAuthenticated && (
                        <div className="icons d-flex">
                            <Link to="/ArtemiShop_Perfil" className="icon ">
                                <i className="bx bx-user"></i>
                                <label className="username-label">username</label>
                            </Link>
                            <Link to="/ArtemiShop_Carrito" className="icon">
                                <i className="bx bx-cart"></i>
                                <span className="d-flex">0</span>
                            </Link>
                        </div>
                    )}

                    <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                        <i className="bx bx-menu-alt-left"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;