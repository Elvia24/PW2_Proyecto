import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx'; 
import Navbar from "./components/Navbar";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function InicioSesion() {
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();  // Extrae login de useAuth

    const handleSubmit = async (event) => {
        event.preventDefault();
        const username = event.target.name.value;
        const contrasena = event.target.psw.value;

        try {
            const response = await axios.post('http://localhost:3000/auth/login', {
                username,
                contrasena
            });

            
            if (response.data.token) {
                await login(response.data.token); // Asegúrate de que login ahora maneja la carga de datos del usuario
                toast.success('Inicio de sesión exitoso');
                setTimeout(() => {
                    navigate('/');
                }, 3000);
            } else {
                toast.warning('Inicio de sesión exitoso, pero no se recibió token.');
            }
        } catch (error) {
            toast.error(error.response ? error.response.data.message : 'Ocurrió un error al procesar la solicitud.');
        }
    };

    return (
        <div>
            <div><Navbar /></div>
            <div className="container">
                <div className="login-form">
                    <form onSubmit={handleSubmit}>
                        <h1>Inicio Sesión</h1>
                        <label htmlFor="name">Nombre Usuario</label>
                        <input type="text" placeholder="Ingrese Nombre De Usuario" name="name" required />
                        <label htmlFor="psw">Contraseña</label>
                        <input type="password" placeholder="Introducir la contraseña" name="psw" required />
                        
                        <div className="buttons">
                            <button type="button" className="cancelbtn">Cancelar</button>
                            <button type="submit" className="registrobtn">Iniciar</button>
                        </div>
                        {message && <div className="login-message">{message}</div>}
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default InicioSesion;