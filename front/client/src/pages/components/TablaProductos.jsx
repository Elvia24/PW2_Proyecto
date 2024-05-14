import React, { useState } from 'react';

function TablaProductos({ productos, onProductoSeleccionado }) {
    const [hoveredRow, setHoveredRow] = useState(null);
    const [selectedRow, setSelectedRow] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredRow(index);
    };

    const handleMouseLeave = () => {
        setHoveredRow(null);
    };

    const handleRowClick = (producto, index) => {
        setSelectedRow(index);
        onProductoSeleccionado(producto);
    };

    return (
        <div className="custom-table-container">
            <table className="custom-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Imagen</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Categoría</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((producto, index) => (
                        <tr
                            key={producto.productID}
                            onClick={() => handleRowClick(producto, index)}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                            style={{
                                cursor: 'pointer', backgroundColor : hoveredRow === index ? '#f0f0f0' : 'transparent'
                            }}
                        >
                            <td>{producto.productID}</td>
                            <td>{producto.nombre}</td>
                            <td>
                                <img src={producto.productImage} alt={producto.nombre} style={{ width: '50px', height: '50px' }} />
                            </td>
                            <td>{producto.descripcion}</td>
                            <td>${producto.precio}</td>
                            <td>{producto.cantidad}</td>
                            <td>{producto.nombreCategoria}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TablaProductos;
