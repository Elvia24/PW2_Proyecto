// EditarProducto.jsx
import React, { useState } from 'react';

// previewImageCF 
function EditarProducto({ productoSeleccionado, setProductoSeleccionado }) {
    // Actualiza el estado local cuando se edita el input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductoSeleccionado((prevProducto) => ({
            ...prevProducto,
            [name]: value,
        }));
    };


    // Estado local para almacenar la nueva imagen seleccionada
    const [nuevaImagen, setNuevaImagen] = useState(null);

    // Función para manejar el cambio en la imagen seleccionada
    const handleImagenChange = (e) => {
        const file = e.target.files[0];
        setNuevaImagen(file);

        // Mostrar la imagen en tiempo real
        const reader = new FileReader();
        reader.onload = () => {
            setProductoSeleccionado((prevProducto) => ({
                ...prevProducto,
                imagen: reader.result,
            }));
        };
        reader.readAsDataURL(file);
    };

    // Función para mostrar la imagen actual o una imagen predeterminada si no hay ninguna
    const renderImagen = () => {
        if (productoSeleccionado.imagen) {
            return (
                <img
                    src={productoSeleccionado.imagen}
                    alt={productoSeleccionado.nombre}
                    style={{ maxWidth: '200px' }}
                />
            );
        } else {
            return <div>No hay imagen seleccionada</div>;
        }
    };
    return (
        <div>
            <h2>Editar Producto</h2>
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

                    />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    {renderImagen()}
                    <br />
                    <input type="file" onChange={handleImagenChange} accept="image/*" />
                </div>
                <div>
                    <label>Descripción:</label>
                    <textarea
                        name="descripcion"
                        value={productoSeleccionado.descripcion || ''}
                        onChange={handleChange}

                    />
                </div>
                <div>
                    <label>Precio:</label>
                    <input
                        type="text"
                        name="precio"
                        value={productoSeleccionado.precio || ''}
                        onChange={handleChange}

                    />
                </div>
                <div>
                    <label>Cantidad:</label>
                    <input
                        type="text"
                        name="cantidad"
                        value={productoSeleccionado.cantidad || ''}
                        onChange={handleChange}

                    />
                </div>
                <div>
                    <label>Categoría:</label>
                    <input
                        type="text"
                        name="categoria"
                        value={productoSeleccionado.categoria || ''}
                        onChange={handleChange}

                    />
                </div>
                <div className="right-align buttons">
                    <button type="submit" className="btn-editar">Guardar Cambios</button>
                </div>

            </form>
        </div>
    );
}

export default EditarProducto;