// EliminarProducto.jsx
import React, { useState } from 'react';

// previewImageCF 
function EliminarProducto({ productoSeleccionado, setProductoSeleccionado }) {
    // Actualiza el estado local cuando se edita el input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductoSeleccionado((prevProducto) => ({
            ...prevProducto,
            [name]: value,
        }));
    };
    return (
        <div>
            <h2>Eliminar Producto</h2>
            <form>
            <div>
                    <label>ID:</label>
                    <input
                        type="text"
                        name="id"
                        value={productoSeleccionado.id}
                        onChange={handleChange}
                        disabled
                    />
                </div>
                <div>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        name="nombre"
                        value={productoSeleccionado.nombre || ''}
                        onChange={handleChange}
                        disabled
                    />
                </div>
                <div  style={{ display: 'flex', justifyContent: 'center' }}>
                    
                    <img src={productoSeleccionado.imagen} alt={productoSeleccionado.nombre} style={{ maxWidth: '200px', }} />
                </div>
                <div>
                    <label>Descripción:</label>
                    <textarea
                        name="descripcion"
                        value={productoSeleccionado.descripcion || ''}
                        onChange={handleChange}
                        disabled
                    />
                </div>
                <div>
                    <label>Precio:</label>
                    <input
                        type="text"
                        name="precio"
                        value={productoSeleccionado.precio || ''}
                        onChange={handleChange}
                        disabled
                    />
                </div>
                <div>
                    <label>Cantidad:</label>
                    <input
                        type="text"
                        name="cantidad"
                        value={productoSeleccionado.cantidad || ''}
                        onChange={handleChange}
                        disabled
                    />
                </div>
                <div>
                    <label>Categoría:</label>
                    <input
                        type="text"
                        name="categoria"
                        value={productoSeleccionado.categoria || ''}
                        onChange={handleChange}
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