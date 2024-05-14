import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import Navbar from "./components/Navbar";
import AgregarProducto from "./components/AgregarProducto";
import TablaProductos from './components/TablaProductos';
import VerProducto from "./components/VerProducto";
import EditarProducto from "./components/EditarProducto";
import EliminarProducto from "./components/EliminarProducto";
import MenuNavegacion from "./components/MenuNavegacion";
function MisProductos() {
    // ---SECCIONES VISIBLES---
    // Estado para almacenar el identificador de la sección actualmente visible
    const [seccionVisible, setSeccionVisible] = useState('Ver-Producto');
    const [productos, setProductos] = useState([]);
    const { userDetails } = useAuth();
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    
    
    useEffect(() => {
        const token = sessionStorage.getItem('token');  
        if (!isAuthenticated || !userDetails.userID) {
            navigate('/');
            return;
        }

        
        const fetchProductos = async () => {
            
            
            try {
                const response = await axios.get(`http://localhost:3000/productos/user`, {
                    headers: {
                        Authorization: `Bearer ${token}`,  
                        userid: userDetails.userID  
                    }
                });
                
                
                if (response && response.data.data) {
                    setProductos(response.data.data);
                    console.log(response.data.data);  
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProductos();
    }, [userDetails,isAuthenticated, userDetails.userID]);

    // Función para manejar el clic en los botones
    const handleClick = (seccion) => {
        setSeccionVisible(seccion); // Cambiar el estado a la sección clicada
        setProductoSeleccionado(null);

    };
    // ---SECCIONES VISIBLES---


    const [productoSeleccionado, setProductoSeleccionado] = useState(null);


   

    const handleProductoSeleccionado = (producto) => {
        setProductoSeleccionado(producto);

    };

    return (
        <div>
            <Navbar />
            {/* <!-- Barra de navegación --> */}
            <div className="container">
                <br />
                <MenuNavegacion seccionActual={seccionVisible} onCambioSeccion={setSeccionVisible} />

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