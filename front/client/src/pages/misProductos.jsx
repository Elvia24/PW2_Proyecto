import React, { useState } from 'react';
import Navbar from "./components/Navbar";

import AgregarProducto from "./components/AgregarProducto";
function MisProductos() {
    // ---SECCIONES VISIBLES---
    // Estado para almacenar el identificador de la sección actualmente visible
    const [seccionVisible, setSeccionVisible] = useState('Agregar-Producto');

    // Función para manejar el clic en los botones
    const handleClick = (seccion) => {
        setSeccionVisible(seccion); // Cambiar el estado a la sección clicada
    };
    // ---SECCIONES VISIBLES---
    return (
        <div>
            <Navbar />
            {/* <!-- Barra de navegación --> */}
            <div className="container">
                <br />
                <div className="navbar">
                    <button >Ver Productos</button>
                    <button onClick={() => handleClick("Agregar-Producto")}>Agregar Producto</button>
                    <button onClick={() => handleClick("Editar-Producto")}>Editar Producto</button>
                    <button>Eliminar Producto</button>
                </div>
                <br />


                {/* <!-- AGREGAR PRODUCTO --> */}
                <div className="principal"  >

                    <div style={{ display: seccionVisible === "Agregar-Producto" ? "block" : "none" }}>
                    <AgregarProducto />
                    </div>

                    <div style={{ display: seccionVisible === "Editar-Producto" ? "block" : "none" }}>
                    Editar-Producto
                    </div>
                </div>

            </div>
        </div>
    );
}
export default MisProductos;