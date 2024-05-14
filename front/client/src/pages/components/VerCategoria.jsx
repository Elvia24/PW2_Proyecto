import React, { useState } from 'react';

function VerCategoria({ categoriaSeleccionado, setCategoriaSeleccionado }) {
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
            <h2>Ver Categoria</h2>
            <form>
                <div>
                    <label>ID:</label>
                    <input
                        type="text"
                        name="id"
                        value={categoriaSeleccionado.categoryID}
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
                <div  style={{ display: 'flex', justifyContent: 'center' }}>
                    {/* <label>Imagen:</label> */}
                    <img src={categoriaSeleccionado.categoryImage} alt={categoriaSeleccionado.nombre} style={{ maxWidth: '200px', }} />
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



            </form>
        </div>
    );
}

export default VerCategoria;
