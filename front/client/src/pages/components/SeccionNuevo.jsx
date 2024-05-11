import React, { useState, useEffect } from 'react';
import ProductoItem from "./ProductoItem";
import axios from 'axios';

function SectionNuevo() {
    const [productos, setProductos] = useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = sessionStorage.getItem('token');

        if (token) {
            setIsAuthenticated(true);
            // Hacer la solicitud GET para obtener los productos desde tu backend
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
        } else {
            setIsAuthenticated(false);
        }
    }, []); 

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