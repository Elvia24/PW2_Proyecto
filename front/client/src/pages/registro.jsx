import Navbar from "./components/Navbar";
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validarContraseña, iniciarRegistro } from '../js/validarPassword';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Registro() {
    const [errorConfirmacion, setErrorConfirmacion] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const username = formData.get('username');
        const email = formData.get('email');
        const password = formData.get('psw');
        const confirmPassword = formData.get('confirmPsw');
        const direccion = formData.get('direccion');
        const role = parseInt(event.target.role.value, 10);

        if (password !== confirmPassword) {
            setErrorConfirmacion('Las contraseñas no coinciden.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/auth/registro', {
                username,
                email,
                password,
                direccion,
                role
            });

            toast.success('Registro exitoso!');
            setTimeout(() => {
                navigate('/'); // Redirigir a la página de inicio después de 3 segundos
            }, 3000);
        } catch (error) {
            console.error("Error al registrar el usuario", error);
            toast.error('Error al registrar el usuario');
        }
    };

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="login-form">
                    <form onSubmit={handleSubmit}>
                        <h1>Registro</h1>

                        <label htmlFor="username">Nombre de Usuario</label>
                        <input type="text" placeholder="Introduzca su nombre de usuario" name="username" required />

                        <label htmlFor="email">Correo</label>
                        <input type="email" placeholder="Ingrese correo electrónico" name="email" required />

                        <label htmlFor="psw">Contraseña</label>
                        <input id="psw" type="password" placeholder="Introducir la contraseña" name="psw" required />

                        <label htmlFor="confirmPsw">Confirmar Contraseña</label>
                        <input id="confirmPsw" type="password" placeholder="Confirme su contraseña" name="confirmPsw" required />
                        {errorConfirmacion && <p className="error">{errorConfirmacion}</p>}

                        <label htmlFor="direccion">Dirección</label>
                        <input type="text" placeholder="Introduzca su Dirección" name="direccion" required />

                        <label htmlFor="role">Rol</label>
                        <select name="role">
                            <option value="1">Vendedor</option>
                            <option value="2">Cliente</option>
                        </select>

                        <div className="buttons">
                            <a href="/"><button type="button" className="cancelbtn">Cancelar</button></a>
                            <button type="submit" className="registrobtn">Registrar</button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Registro;