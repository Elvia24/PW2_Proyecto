import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "./components/Navbar";
import axios from 'axios';

function InicioSesion() {
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

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
                // Almacenar el token en sessionStorage
                sessionStorage.setItem('token', response.data.token);
                setMessage(response.data.message);

                // Redirigir al usuario después de mostrar mensaje de éxito
                setTimeout(() => {
                    setMessage('');
                    navigate('/'); 
                }, 2000);
            } else {
                // Si no hay token, manejar como error o falta de datos
                setMessage('Inicio de sesión exitoso, pero no se recibió token.');
            }
        } catch (error) {
            if (error.response) {
                // Login fallido
                setMessage(error.response.data.message);
            } else {
                setMessage('Ocurrió un error al procesar la solicitud.');
            }
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
        </div>
    );
}

export default InicioSesion;