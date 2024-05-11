import { useState, useEffect } from 'react';

export const useUserData = () => {
    // State initialization
    const [nombreUser, setNombreUser] = useState('');
    const [mail, setMail] = useState('');
    const [address, setAddress] = useState('');
    const [rol, setRol] = useState('');

    useEffect(() => {
        // Fetching user data from session storage
        const userDataJson = sessionStorage.getItem('userData');
        if (userDataJson) {
            const userData = JSON.parse(userDataJson);
            setNombreUser(userData.username || '');
            setMail(userData.email || '');
            setAddress(userData.direccion || '');
            // Convert the numeric role to a string description
            setRol(userData.role === 1 ? 'Cliente' : 'Administrador'); // Assuming '1' indicates a Cliente
        }
    }, []);

    // Handlers for input changes
    const handleNombreChange = (event) => setNombreUser(event.target.value);
    const handleEmailChange = (event) => setMail(event.target.value);
    const handleAddressChange = (event) => setAddress(event.target.value);

    return {
        nombreUser,
        handleNombreChange,
        mail,
        handleEmailChange,
        address,
        handleAddressChange,
        rol
    };
};