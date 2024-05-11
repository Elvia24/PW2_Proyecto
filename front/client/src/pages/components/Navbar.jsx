import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    // Estados para controlar la apertura del menú y el nombre de usuario
    const [isOpen, setIsOpen] = useState(false);
    const [username, setUsername] = useState('');

    // Estado de autenticación basado en la presencia de un token en el almacenamiento de sesión
    const isAuthenticated = sessionStorage.getItem('token') !== null;
    const navigate = useNavigate();

    // Efecto para manejar cambios en el estado de autenticación
    useEffect(() => {
        if (isAuthenticated) {
            // Extraer y configurar el nombre de usuario si el usuario está autenticado
            const userData = sessionStorage.getItem('userData');
            if (userData) {
                const user = JSON.parse(userData);
                setUsername(user.username);
            }
        } else {
            // Resetear el nombre de usuario si el usuario no está autenticado
            setUsername('');
        }
    }, [isAuthenticated]);

    // Función para manejar el cierre de sesión
    const handleLogout = () => {
        // Eliminar datos de sesión y resetear el estado relevante
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('userData');
        setUsername('');
        navigate('/', { replace: true }); // Redirigir a la página inicial y reemplazar en el historial
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
                    {isAuthenticated && (
                        <div className="icons d-flex">
                            <Link to="/ArtemiShop_Perfil" className="icon">
                                <i className="bx bx-user"></i>
                                <label className="username-label">{username || 'username'}</label>
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