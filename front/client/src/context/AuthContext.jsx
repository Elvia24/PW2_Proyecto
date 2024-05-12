import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!sessionStorage.getItem('token'));
    const [userDetails, setUserDetails] = useState({
        username: 'Invitado'  // Valor predeterminado que puedes cambiar según tu caso de uso
    });

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        const userData = sessionStorage.getItem('userData');
        if (token && userData) {
            setIsAuthenticated(true);
            console.log(userData)
            try {
                const parsedData = JSON.parse(userData);
                setUserDetails(parsedData);
                
            } catch (e) {
                console.error("Error parsing userData:", e);
            }
        }
    }, []);

    const login = async (token) => {
        sessionStorage.setItem('token', token);
        setIsAuthenticated(true);

        // Ahora, obtén los datos del usuario con el token
        try {
            const userResponse = await axios.get('http://localhost:3000/auth/usuario', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (userResponse.data && userResponse.data.data) {
                sessionStorage.setItem('userData', JSON.stringify(userResponse.data.data));
                setUserDetails(userResponse.data.data);
            } else {
                console.error('No se pudo obtener los datos del usuario');
            }
        } catch (error) {
            console.error('Error al obtener los datos del usuario:', error);
        }
    };

    const logout = () => {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('userData');
        setIsAuthenticated(false);
        setUserDetails({ username: 'Invitado' });  // Reset al valor predeterminado
    };
    const updateUserDetails = (newDetails) => {
        // Actualizar el contexto y el sessionStorage
        setUserDetails(newDetails);
        sessionStorage.setItem('userData', JSON.stringify(newDetails));
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, userDetails, login, logout, updateUserDetails }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);