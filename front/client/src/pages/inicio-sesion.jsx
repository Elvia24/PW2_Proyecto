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
                sessionStorage.setItem('token', response.data.token);
                setMessage('Inicio de sesión exitoso');
                console.log(response.data.token);
                // Obtener datos del usuario
                fetchUserData(response.data.token);
            } else {
                // Manejar como error o falta de datos
                setMessage('Inicio de sesión exitoso, pero no se recibió token.');
            }
        } catch (error) {
            setMessage(error.response ? error.response.data.message : 'Ocurrió un error al procesar la solicitud.');
        }
    };

    const fetchUserData = async (token) => {
        try {
            const userResponse = await axios.get('http://localhost:3000/auth/usuario', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (userResponse.data.success) {
                sessionStorage.setItem('userData', JSON.stringify(userResponse.data.data));
                //console.log('session ='+sessionStorage.getItem('userData'));
                navigate('/'); 
            } else {
                setMessage('Error al obtener los datos del usuario.');
            }
        } catch (error) {
            setMessage('Ocurrió un error al obtener los datos del usuario.');
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