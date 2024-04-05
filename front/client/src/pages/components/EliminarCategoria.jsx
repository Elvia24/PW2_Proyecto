// EliminarCategoria.jsx
import React, { useState } from 'react';

// previewImageCF 
function EliminarCategoria({ categoriaSeleccionado, setCategoriaSeleccionado }) {
    // Actualiza el estado local cuando se edita el input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCategoriaSeleccionado((prevCategoria) => ({
            ...prevCategoria,
            [name]: value,
        }));
    };
    return (
        <div>
            <h2>Eliminar Categoria</h2>
            <form>
                <div>
                    <label>ID:</label>
                    <input
                        type="text"
                        name="id"
                        value={categoriaSeleccionado.id}
                        onChange={handleChange}
                        disabled
                    />
                </div>
                <div>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        name="nombre"
                        value={categoriaSeleccionado.nombre || ''}
                        onChange={handleChange}
                        disabled
                    />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>

                    <img src={categoriaSeleccionado.imagen} alt={categoriaSeleccionado.nombre} style={{ maxWidth: '200px', }} />
                </div>
                <div>
                    <label>Descripción:</label>
                    <textarea
                        name="descripcion"
                        value={categoriaSeleccionado.descripcion || ''}
                        onChange={handleChange}
                        disabled
                    />
                </div>

                <div className="right-align buttons">
                    <button type="submit" className="btn-eliminar">Eliminar Categoria</button>
                </div>
            </form>
        </div>
    );
}

export default EliminarCategoria;