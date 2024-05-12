import React, { useEffect, useState } from 'react';
import ProductoItem from "./ProductoItem";
import axios from 'axios';
import { useAuth } from '../../context/AuthContext'; // Asegúrate de tener la ruta correcta al contexto

function SectionNuevo() {
    const [productos, setProductos] = useState([]);
    const { isAuthenticated } = useAuth(); // Usa isAuthenticated desde AuthContext

    useEffect(() => {
        if (isAuthenticated) {
            // Hacer la solicitud GET para obtener los productos desde tu backend
            const token = sessionStorage.getItem('token'); // Considera pasar el token desde AuthContext
            axios.get('http://localhost:3000/productos/', {
                headers: {
                    Authorization: `Bearer ${token}`  // Asegura que el token se envíe en la solicitud
                }
            })
            .then(response => {
                setProductos(response.data.data); // Actualizar el estado con los datos de productos recibidos
            })
            .catch(error => {
                console.error('Error al obtener los productos:', error);
            });
        }
    }, [isAuthenticated]);  // Dependencia de isAuthenticated para reaccionar a cambios

    return (
        <section className="section new-arrival">
            <div className="title">
                <h1>NUEVO</h1>
                <p>Descubre los nuevos productos que tenemos para ti</p>
            </div>
            {isAuthenticated ? (
                <div className="product-center">
                    {productos.map(producto => (
                        <ProductoItem
                            key={producto.productID}
                            producto={producto} // Pasar el objeto completo producto como una prop
                        />
                    ))}
                </div>
            ) : (
                <div className="product-center">
                    <p>Por favor, <a href="/registro">regístrate</a> o <a href="/login">inicia sesión</a> para ver los productos.</p>
                </div>
            )}
        </section>
    );
}

export default SectionNuevo;