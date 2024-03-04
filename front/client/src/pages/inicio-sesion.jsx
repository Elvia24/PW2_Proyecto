import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import axios from 'axios';

function InicioSesion() {
    const [message, setMessage] = useState(''); 

    const handleSubmit = async (event) => {
        event.preventDefault();
        const username = event.target.name.value;
        const contrasena = event.target.psw.value;

        try {
            const response = await axios.post('http://localhost:3000/auth/login', {
                username,
                contrasena
            });

            // Login exitoso
            setMessage(response.data.message); 
            setTimeout(() => {
                setMessage(''); 
                window.location.href = '/'; // Redireccionamos al inicio o donde prefieras
            }, 2000);
        } catch (error) {
            if (error.response) {
                // Login fallido
                setMessage(error.response.data.message); // 
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
