import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext'; 
import { useNavigate } from 'react-router-dom';

function EliminarCategoria({ categoriaSeleccionado, onCategoryDeleted, onResetView }) {
    const { userDetails } = useAuth();
    const token = sessionStorage.getItem('token'); 
    const navigate = useNavigate(); 
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.delete('http://localhost:3000/categorias', {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                data: {
                    userID: userDetails.userID,
                    categoryID: categoriaSeleccionado.categoryID
                }
            });
            if (response.status === 200) {
                onCategoryDeleted(); 
                onResetView();
            }
        } catch (error) {
            console.error('Error al eliminar categoría:', error);
        }
    };

    return (
        <div>
            <h2>Eliminar Categoría</h2>
            <form id="delete-categoria-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>ID:</label>
                    <input
                        type="text"
                        name="id"
                        value={categoriaSeleccionado.categoryID}
                        disabled
                    />
                </div>
                <div className="form-group">
                    <label>Nombre:</label>
                    <input
                        type="text"
                        name="nombre"
                        value={categoriaSeleccionado.nombre || ''}
                        disabled
                    />
                </div>
                <div className="form-group" style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={categoriaSeleccionado.categoryImage} alt={categoriaSeleccionado.nombre} style={{ maxWidth: '200px' }} />
                </div>
                <div className="form-group">
                    <label>Descripción:</label>
                    <textarea
                        name="descripcion"
                        value={categoriaSeleccionado.descripcion || ''}
                        disabled
                    />
                </div>
                <div className="right-align buttons">
                    <button type="submit" className="btn-eliminar">Eliminar Categoría</button>
                </div>
            </form>
        </div>
    );
}

export default EliminarCategoria;