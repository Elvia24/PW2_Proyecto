import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import AgregarProducto from "./components/AgregarProducto";

import TablaProductos from './components/TablaProductos';
import VerProducto from "./components/VerProducto";
import EditarProducto from "./components/EditarProducto";
import EliminarProducto from "./components/EliminarProducto";

function MisProductos() {
    // ---SECCIONES VISIBLES---
    // Estado para almacenar el identificador de la sección actualmente visible
    const [seccionVisible, setSeccionVisible] = useState('Ver-Producto');

    // Función para manejar el clic en los botones
    const handleClick = (seccion) => {
        setSeccionVisible(seccion); // Cambiar el estado a la sección clicada
        setProductoSeleccionado(null);

    };
    // ---SECCIONES VISIBLES---


    const [productoSeleccionado, setProductoSeleccionado] = useState(null);


    const productos = [
        { id: 1, nombre: 'Producto 1', imagen: `src/images/sample_images/product-1.jpg`, descripcion: 'Descripcion1', precio: 100, cantidad: 1, categoria: 'Categoria1' },
        { id: 2, nombre: 'Producto 2', imagen: `src/images/sample_images/product-2.jpg`, descripcion: 'Descripcion1', precio: 200, cantidad: 1, categoria: 'Categoria1' },
        { id: 3, nombre: 'Producto 3', imagen: `src/images/sample_images/product-3.jpg`, descripcion: 'Descripcion3', precio: 300, cantidad: 1, categoria: 'Categoria1' },
        { id: 4, nombre: 'Producto 4', imagen: `src/images/sample_images/product-4.jpg`, descripcion: 'Descripcion4', precio: 400, cantidad: 1, categoria: 'Categoria1' },
        { id: 5, nombre: 'Producto 5', imagen: `src/images/sample_images/product-5.jpg`, descripcion: 'Descripcion5', precio: 500, cantidad: 1, categoria: 'Categoria1' },
        { id: 6, nombre: 'Producto 6', imagen: `src/images/sample_images/product-6.jpg`, descripcion: 'Descripcion6', precio: 600, cantidad: 1, categoria: 'Categoria1' },

        // Añade más productos según necesites
    ];

    const handleProductoSeleccionado = (producto) => {
        setProductoSeleccionado(producto);

    };

    return (
        <div>
            <Navbar />
            {/* <!-- Barra de navegación --> */}
            <div className="container">
                <br />
                <div className="navbar">
                    <a href="/ArtemiShop_Perfil"><button><i className='bx bxs-left-arrow-alt' ></i></button></a>
                    <button className={seccionVisible === "Ver-Producto" ? "selected" : ""} onClick={() => handleClick("Ver-Producto")}>Ver Productos</button>
                    <button className={seccionVisible === "Agregar-Producto" ? "selected" : ""} onClick={() => handleClick("Agregar-Producto")}>Agregar Producto</button>
                    <button className={seccionVisible === "Editar-Producto" ? "selected" : ""} onClick={() => handleClick("Editar-Producto")}>Editar Producto</button>
                    <button className={seccionVisible === "Eliminar-Producto" ? "selected" : ""} onClick={() => handleClick("Eliminar-Producto")}>Eliminar Producto</button>
                </div>

                <br />


                {/* <!-- AGREGAR PRODUCTO --> */}
                <div className="principal"  >

                    <div style={{ display: seccionVisible === "Ver-Producto" ? "block" : "none" }}>
                        {productoSeleccionado && (
                            <VerProducto
                                productoSeleccionado={productoSeleccionado}
                                setProductoSeleccionado={setProductoSeleccionado}
                            />
                        )}
                        <br />

                        <h2>Ver Producto</h2>
                        *selecciona un producto
                        <TablaProductos productos={productos} onProductoSeleccionado={handleProductoSeleccionado} />
                    </div>

                    <div style={{ display: seccionVisible === "Agregar-Producto" ? "block" : "none" }}>
                        <AgregarProducto />
                    </div>

                    <div style={{ display: seccionVisible === "Editar-Producto" ? "block" : "none" }}>
                        {productoSeleccionado && (
                            <EditarProducto
                                productoSeleccionado={productoSeleccionado}
                                setProductoSeleccionado={setProductoSeleccionado}
                            />
                        )}
                        <br />
                        <h2>Editar Producto</h2>
                        *selecciona un producto
                        <TablaProductos productos={productos} onProductoSeleccionado={handleProductoSeleccionado} />
                    </div>
                    <div style={{ display: seccionVisible === "Eliminar-Producto" ? "block" : "none" }}>
                        {productoSeleccionado && (
                            <EliminarProducto
                                productoSeleccionado={productoSeleccionado}
                                setProductoSeleccionado={setProductoSeleccionado}
                            />
                        )}
                        <br />

                        <h2>Eliminar Producto</h2>
                        *selecciona un producto
                        <TablaProductos productos={productos} onProductoSeleccionado={handleProductoSeleccionado} />
                    </div>
                </div>

            </div>
        </div>
    );
}
export default MisProductos;