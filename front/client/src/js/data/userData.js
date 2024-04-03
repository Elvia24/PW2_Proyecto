// userData.js
import { useState } from 'react';

export const useUserData = () => {
    const [nombreUser, setNombreUser] = useState('Juan Pérez 5');
    const handleNombreChange = (event) => {
        setNombreUser(event.target.value);
    };

    const [mail, setMail] = useState('ejemplo@example.com');
    const handlEmailChange = (event) => {
        setMail(event.target.value);
    };

    const [address, setAddress] = useState('Calle 123, Ciudad, País');
    const handlAddressChange = (event) => {
        setAddress(event.target.value);
    };

    const rol = 'Cliente';

    return {
        nombreUser,
        handleNombreChange,
        mail,
        handlEmailChange,
        address,
        handlAddressChange,
        rol
    };
};