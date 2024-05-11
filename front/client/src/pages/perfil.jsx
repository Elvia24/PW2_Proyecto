import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "./components/Navbar";
import { useUserData } from '../js/data/userData';
import SalesReport from './components/SalesReport';
import PurchaseReport from './components/PurchaseReport';
import { isAuthenticated } from '../js/services/authService';


function Perfil() {
    
    

    
    
    const {
        nombreUser,
        handleNombreChange,
        mail,
        handleEmailChange,
        address,
        handleAddressChange,
        rol
    } = useUserData();

    const [seccionVisible, setSeccionVisible] = useState('editar-informacion');
    const navigate = useNavigate();

    // Check authentication status and redirect if not authenticated
    useEffect(() => {
        if (!isAuthenticated()) {
            navigate('/');  // Redirect to login page if not authenticated
        }
    }, [navigate]); // Dependency on `navigate` to ensure it's only called when needed

    const handleClick = (seccion) => {
        setSeccionVisible(seccion);
    };
    

    return (
        <div>
            <Navbar />
            <div className="container">
                <section className="user-info">
                    <div className="info-section">
                        <h2>Datos del Usuario <i className="bx bx-user"></i></h2>
                        <ul>
                            <li><strong>Nombre De Usuario:</strong> {nombreUser}</li>
                            <li><strong>Correo:</strong> {mail}</li>
                            <li><strong>Dirección:</strong> {address}</li>
                            <li><strong>Rol:</strong> {rol}</li>
                            <li className="buttons button-group-perfil">
                                <br /><hr /><br />
                                <button onClick={() => handleClick("editar-informacion")} className={seccionVisible === 'editar-informacion' ? 'active' : ''}>Editar mi información</button>
                                <button onClick={() => handleClick("session-report-venta")} className={seccionVisible === 'session-report-venta' ? 'active' : ''}>Mis Ventas</button>
                                <button onClick={() => handleClick("session-report-compra")} className={seccionVisible === 'session-report-compra' ? 'active' : ''}>Mis Compras</button>
                                <br /><hr /><br />
                                <a href="/ArtemiShop_misProductos" className="button-group-perfil"><button>Mis Productos</button></a>
                                <a href="/ArtemiShop_misCategorias" className="button-group-perfil"><button>Mis Categorias</button></a>
                            </li>
                        </ul>
                    </div>
                    {seccionVisible === 'editar-informacion' && (
                        <div className="edit-section">
                            <h2>Editar Información</h2>
                            <form id="user-info-form">
                                <div className="form-group">
                                    <label htmlFor="nombreUser">Nombre De Usuario:</label>
                                    <input
                                        type="text"
                                        id="nombreUser"
                                        name="nombreUser"
                                        value={nombreUser}
                                        onChange={handleNombreChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="correo">Correo:</label>
                                    <input
                                        type="email"
                                        id="correo"
                                        name="correo"
                                        value={mail}
                                        onChange={handleEmailChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="direccion">Dirección:</label>
                                    <input
                                        type="text"
                                        id="direccion"
                                        name="direccion"
                                        value={address}
                                        onChange={handleAddressChange}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn-editar">Guardar Cambios</button>
                            </form>
                        </div>
                    )}
                    {seccionVisible === 'session-report-venta' && <SalesReport />}
                    {seccionVisible === 'session-report-compra' && <PurchaseReport />}
                </section>
            </div>
        </div>
    );
    
}

export default Perfil;