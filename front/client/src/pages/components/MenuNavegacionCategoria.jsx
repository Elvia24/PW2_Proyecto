import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom

const MenuNavegacionCategoria = ({ seccionActual, onCambioSeccion }) => (
    <div className="navbar">
        <Link to="/ArtemiShop_Perfil">
            <button><i className='bx bxs-left-arrow-alt'></i></button>
        </Link>
        <button onClick={() => onCambioSeccion("Ver-Categoria")} className={seccionActual === "Ver-Categoria" ? "selected" : ""}>
            Ver Categoria
        </button>
        <button onClick={() => onCambioSeccion("Agregar-Categoria")} className={seccionActual === "Agregar-Categoria" ? "selected" : ""}>
            Agregar Categoria
        </button>
        <button onClick={() => onCambioSeccion("Editar-Categoria")} className={seccionActual === "Editar-Categoria" ? "selected" : ""}>
            Editar Categoria
        </button>
        <button onClick={() => onCambioSeccion("Eliminar-Categoria")} className={seccionActual === "Eliminar-Categoria" ? "selected" : ""}>
            Eliminar Categoria
        </button>
    </div>
);



export default MenuNavegacionCategoria;