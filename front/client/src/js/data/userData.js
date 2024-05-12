import { useState, useContext, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext.jsx'; // Asegúrate de tener la ruta correcta al contexto

export const useUserData = () => {
    // Hook to access auth context
    const { userDetails } = useAuth();
    console.log(userDetails);

    // Local state for user details form
    const [nombreUser, setNombreUser] = useState('');
    const [mail, setMail] = useState('');
    const [address, setAddress] = useState('');
    const [rol, setRol] = useState('');

    useEffect(() => {
        // Initialize form state with user details from auth context
        if (userDetails) {
            setNombreUser(userDetails.username || '');
            setMail(userDetails.email || '');
            setAddress(userDetails.direccion || '');
            switch (userDetails.role) {
                case 0:
                    setRol('Administrador');
                    break;
                case 1:
                    setRol('Vendedor');
                    break;
                case 2:
                    setRol('Cliente');
                    break;
                default:
                    setRol('Desconocido'); // Maneja cualquier valor inesperado
            }
        }
    }, [userDetails]);  // Depend on userDetails to update state whenever it changes

    // Handlers for input changes
    const handleNombreChange = (event) => setNombreUser(event.target.value);
    const handleEmailChange = (event) => setMail(event.target.value);
    const handleAddressChange = (event) => setAddress(event.target.value);
    console.log(rol);
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