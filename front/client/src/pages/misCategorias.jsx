import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import AgregarCategoria from "./components/AgregarCategoria";

import TablaCategorias from './components/TablaCategorias';
 import VerCategoria from "./components/VerCategoria";
 import EditarCategoria from "./components/EditarCategoria";
 import EliminarCategoria from "./components/EliminarCategoria";

function MisCategorias() {
    // ---SECCIONES VISIBLES---
    // Estado para almacenar el identificador de la sección actualmente visible
    const [seccionVisible, setSeccionVisible] = useState('Ver-Categoria');

    // Función para manejar el clic en los botones
    const handleClick = (seccion) => {
        setSeccionVisible(seccion); // Cambiar el estado a la sección clicada
        setCategoriaSeleccionado(null);

    };
    // ---SECCIONES VISIBLES---


    const [categoriaSeleccionado, setCategoriaSeleccionado] = useState(null);


    const categorias = [
        { id: 1, nombre: 'Categoria 1', imagen: `src/images/sample_images/cat1.jpg`, descripcion: 'Descripcion1' },
        { id: 2, nombre: 'Categoria 2', imagen: `src/images/sample_images/cat2.jpg`, descripcion: 'Descripcion1' },
        { id: 3, nombre: 'Categoria 3', imagen: `src/images/sample_images/cat3.jpg`, descripcion: 'Descripcion3' },
        { id: 4, nombre: 'Categoria 4', imagen: `src/images/sample_images/accessories.jpg`, descripcion: 'Descripcion4' },
        { id: 5, nombre: 'Categoria 5', imagen: `src/images/sample_images/cat1.jpg`, descripcion: 'Descripcion5' },
        { id: 6, nombre: 'Categoria 6', imagen: `src/images/sample_images/cat2.jpg`, descripcion: 'Descripcion6' },

        // Añade más categorias según necesites
    ];

    const handleCategoriaSeleccionado = (categoria) => {
        setCategoriaSeleccionado(categoria);

    };

    return (
        <div>
            <Navbar />
            {/* <!-- Barra de navegación --> */}
            <div className="container">
                <br />
                <div className="navbar">
                    <a href="/ArtemiShop_Perfil"><button><i className='bx bxs-left-arrow-alt' ></i></button></a>
                    <button className={seccionVisible === "Ver-Categoria" ? "selected" : ""} onClick={() => handleClick("Ver-Categoria")}>Ver Categorias</button>
                    <button className={seccionVisible === "Agregar-Categoria" ? "selected" : ""} onClick={() => handleClick("Agregar-Categoria")}>Agregar Categoria</button>
                    <button className={seccionVisible === "Editar-Categoria" ? "selected" : ""} onClick={() => handleClick("Editar-Categoria")}>Editar Categoria</button>
                    <button className={seccionVisible === "Eliminar-Categoria" ? "selected" : ""} onClick={() => handleClick("Eliminar-Categoria")}>Eliminar Categoria</button>
                </div>

                <br />


                {/* <!-- AGREGAR PRODUCTO --> */}
                <div className="principal"  >

                    <div style={{ display: seccionVisible === "Ver-Categoria" ? "block" : "none" }}>
                        {categoriaSeleccionado && (
                            <VerCategoria
                                categoriaSeleccionado={categoriaSeleccionado}
                                setCategoriaSeleccionado={setCategoriaSeleccionado}
                            />
                        )}
                        <br />

                        <h2>Ver Categoria</h2>
                        *selecciona un categoria
                        <TablaCategorias categorias={categorias} onCategoriaSeleccionado={handleCategoriaSeleccionado} />
                    </div>

                    <div style={{ display: seccionVisible === "Agregar-Categoria" ? "block" : "none" }}>
                        <AgregarCategoria />
                    </div>

                    <div style={{ display: seccionVisible === "Editar-Categoria" ? "block" : "none" }}>
                        {categoriaSeleccionado && (
                            <EditarCategoria
                                categoriaSeleccionado={categoriaSeleccionado}
                                setCategoriaSeleccionado={setCategoriaSeleccionado}
                            />
                        )}
                        <br />
                        <h2>Editar Categoria</h2>
                        *selecciona un categoria
                        <TablaCategorias categorias={categorias} onCategoriaSeleccionado={handleCategoriaSeleccionado} />
                    </div>
                    <div style={{ display: seccionVisible === "Eliminar-Categoria" ? "block" : "none" }}>
                        {categoriaSeleccionado && (
                            <EliminarCategoria
                                categoriaSeleccionado={categoriaSeleccionado}
                                setCategoriaSeleccionado={setCategoriaSeleccionado}
                            />
                        )}
                        <br />
                        *selecciona un categoria
                        <h2>Eliminar Categoria</h2>
                        *selecciona un categoria
                        <TablaCategorias categorias={categorias} onCategoriaSeleccionado={handleCategoriaSeleccionado} />
                    </div>
                </div>

            </div>
        </div>
    );
}
export default MisCategorias;