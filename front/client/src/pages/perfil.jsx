import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "./components/Navbar";
import { useAuth } from '../context/AuthContext'; 
import axios from 'axios';
import SalesReport from './components/SalesReport';
import PurchaseReport from './components/PurchaseReport';
import { useUserData } from '../js/data/userData';  
import { Link } from 'react-router-dom';

function Perfil() {
    const { isAuthenticated, userDetails, updateUserDetails,setUserDetails } = useAuth();
 
    const [seccionVisible, setSeccionVisible] = useState('editar-informacion');
    const navigate = useNavigate();
    const {
        nombreUser,
        handleNombreChange,
        mail,
        handleEmailChange,
        address,
        handleAddressChange,
        rol
    } = useUserData();
    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/');  
        }
    }, [isAuthenticated, navigate]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const updatedUser = {
            userId: userDetails.userID,
            username: nombreUser,
            email: mail,
            direccion: address,
            role: userDetails.role
        };
    
        try {
            const response = await axios.put('http://localhost:3000/auth/usuario', updatedUser, {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem('token')}`
                }
            });
            if (response.data) {
                updateUserDetails(updatedUser);  
                alert('Información actualizada correctamente');
            }
        } catch (error) {
            console.error('Error al actualizar la información del usuario:', error);
            alert('Error al actualizar la información');
        }
    };

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
                                <Link to="/ArtemiShop_misProductos"className="button-group-perfil"><button>Mis Productos</button></Link>
                        <Link to="/ArtemiShop_misCategorias"className="button-group-perfil"><button>Mis Categorias</button></Link>
                            </li>
                        </ul>
                    </div>
                    {seccionVisible === 'editar-informacion' && (
                        <div className="edit-section">
                            <h2>Editar Información</h2>
                            <form onSubmit={handleSubmit}>
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