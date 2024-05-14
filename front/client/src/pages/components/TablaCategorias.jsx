import React, { useState } from 'react';

function TablaCategorias({ categorias, onCategoriaSeleccionado }) {
    const [hoveredRow, setHoveredRow] = useState(null);
    const [selectedRow, setSelectedRow] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredRow(index);
    };

    const handleMouseLeave = () => {
        setHoveredRow(null);
    };

    const handleRowClick = (categoria, index) => {
        setSelectedRow(index);
        onCategoriaSeleccionado(categoria);
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

                    </tr>
                </thead>
                <tbody>
                    {categorias.map((categoria, index) => (
                        <tr
                            key={categoria.categoryID}
                            onClick={() => handleRowClick(categoria, index)}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                            style={{
                                cursor: 'pointer', backgroundColor : hoveredRow === index ? '#f0f0f0' : 'transparent'
                            }}
                        >
                            <td>{categoria.categoryID}</td>
                            <td>{categoria.nombre}</td>
                            <td>
                                <img src={categoria.categoryImage} alt={categoria.nombre} style={{ minWidth: '50%', minHeight: '50%' }} />
                            </td>
                            <td>{categoria.descripcion}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TablaCategorias;
