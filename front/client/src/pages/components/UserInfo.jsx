import React from 'react';

function UserInfo({ userData }) {
    return (
        <div className="info-section">
            <h2>Datos del Usuario <i className="bx bx-user"></i></h2>
            <ul>
                <li><strong>Nombre De Usuario:</strong> {userData.nombreUser}</li>
                <li><strong>Correo:</strong> {userData.mail}</li>
                <li><strong>Dirección:</strong> {userData.address}</li>
                <li><strong>Rol:</strong> {userData.rol}</li>
            </ul>
        </div>
    );
}

export default UserInfo;