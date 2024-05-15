import React, { useState, useEffect, useCallback } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';  
import axios from 'axios';
import Navbar from "./components/Navbar";
import AgregarCategoria from "./components/AgregarCategoria";
import TablaCategorias from './components/TablaCategorias';
import VerCategoria from "./components/VerCategoria";
import EditarCategoria from "./components/EditarCategoria";
import EliminarCategoria from "./components/EliminarCategoria";
import MenuNavegacionCategoria from "./components/MenuNavegacionCategoria";

function MisCategorias() {
    const [seccionVisible, setSeccionVisible] = useState('Ver-Categoria');
    const [categorias, setCategorias] = useState([]);
    const [categoriaSeleccionado, setCategoriaSeleccionado] = useState(null);
    const { userDetails, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const fetchCategorias = useCallback(async () => {
        const token = sessionStorage.getItem('token');
        if (!isAuthenticated || !userDetails.userID) {
            navigate('/');
            return;
        }

        try {
            const response = await axios.get('http://localhost:3000/categorias/user', {
                headers: {
                    Authorization: `Bearer ${token}`,
                    userid: userDetails.userID
                }
            });
            if (response && response.data.data) {
                setCategorias(response.data.data);
            }
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    }, [userDetails.userID, isAuthenticated, navigate]);

    useEffect(() => {
        fetchCategorias();
    }, [fetchCategorias]);

    const handleClick = (seccion) => {
        setSeccionVisible(seccion);
        setCategoriaSeleccionado(null);
    };

    const handleCategoriaSeleccionado = (categoria) => {
        setCategoriaSeleccionado(categoria);
    };

    const handleResetView = () => {
        setSeccionVisible('Ver-Categoria');
        setCategoriaSeleccionado(null);
    };

    return (
        <div>
            <Navbar />
            <div className="container">
                <br />
                <MenuNavegacionCategoria seccionActual={seccionVisible} onCambioSeccion={setSeccionVisible} />
                <br />
                <div className="principal">
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

                    {seccionVisible === "Agregar-Categoria" && (
                        <AgregarCategoria onCategoryAdded={fetchCategorias} onResetView={handleResetView} />
                    )}

                    <div style={{ display: seccionVisible === "Editar-Categoria" ? "block" : "none" }}>
                        {categoriaSeleccionado && (
                            <EditarCategoria
                                categoriaSeleccionado={categoriaSeleccionado}
                                setCategoriaSeleccionado={setCategoriaSeleccionado}
                                onCategoryUpdated={fetchCategorias} // Agregado
                                onResetView={handleResetView} // Agregado
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
                                onCategoryDeleted={fetchCategorias} // Agregado
                                onResetView={handleResetView} // Agregado
                            />
                        )}
                        <br />
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