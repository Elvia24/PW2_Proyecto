import React from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext'; 
import { useNavigate } from 'react-router-dom';

function EliminarProducto({ productoSeleccionado, onProductDeleted, onResetView }) {
    const { userDetails } = useAuth();
    const token = sessionStorage.getItem('token'); 
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.delete('http://localhost:3000/productos', {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                data: {
                    userID: userDetails.userID,
                    productID: productoSeleccionado.productID
                }
            });
            if (response.status === 200) {
                onProductDeleted(); 
                onResetView();
            }
        } catch (error) {
            console.error('Error al eliminar producto:', error);
        }
    };

    return (
        <div>
            <h2>Eliminar Producto</h2>
            <form id="delete-product-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>ID:</label>
                    <input
                        type="text"
                        name="id"
                        value={productoSeleccionado.productID}
                        disabled
                    />
                </div>
                <div className="form-group">
                    <label>Nombre:</label>
                    <input
                        type="text"
                        name="nombre"
                        value={productoSeleccionado.nombre || ''}
                        disabled
                    />
                </div>
                <div className="form-group" style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={productoSeleccionado.productImage} alt={productoSeleccionado.nombre} style={{ maxWidth: '200px' }} />
                </div>
                <div className="form-group">
                    <label>Descripción:</label>
                    <textarea
                        name="descripcion"
                        value={productoSeleccionado.descripcion || ''}
                        disabled
                    />
                </div>
                <div className="form-group">
                    <label>Precio:</label>
                    <input
                        type="text"
                        name="precio"
                        value={productoSeleccionado.precio || ''}
                        disabled
                    />
                </div>
                <div className="form-group">
                    <label>Cantidad:</label>
                    <input
                        type="text"
                        name="cantidad"
                        value={productoSeleccionado.cantidad || ''}
                        disabled
                    />
                </div>
                <div className="form-group">
                    <label>Categoría:</label>
                    <input
                        type="text"
                        name="categoria"
                        value={productoSeleccionado.nombreCategoria || ''}
                        disabled
                    />
                </div>
                <div className="right-align buttons">
                    <button type="submit" className="btn-eliminar">Eliminar Producto</button>
                </div>
            </form>
        </div>
    );
}

export default EliminarProducto;