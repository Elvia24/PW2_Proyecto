import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom

const MenuNavegacion = ({ seccionActual, onCambioSeccion }) => (
    <div className="navbar">
        <Link to="/ArtemiShop_Perfil">
            <button><i className='bx bxs-left-arrow-alt'></i></button>
        </Link>
        <button onClick={() => onCambioSeccion("Ver-Producto")} className={seccionActual === "Ver-Producto" ? "selected" : ""}>
            Ver Productos
        </button>
        <button onClick={() => onCambioSeccion("Agregar-Producto")} className={seccionActual === "Agregar-Producto" ? "selected" : ""}>
            Agregar Producto
        </button>
        <button onClick={() => onCambioSeccion("Editar-Producto")} className={seccionActual === "Editar-Producto" ? "selected" : ""}>
            Editar Producto
        </button>
        <button onClick={() => onCambioSeccion("Eliminar-Producto")} className={seccionActual === "Eliminar-Producto" ? "selected" : ""}>
            Eliminar Producto
        </button>
    </div>
);



export default MenuNavegacion;