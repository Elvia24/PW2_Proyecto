// SectionNuevo.jsx
import React, { useState, useEffect } from 'react';
import ProductoItem from "./ProductoItem";
import axios from 'axios';

function SectionNuevo() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        // Hacer la solicitud GET para obtener los productos desde tu backend
        axios.get('http://localhost:3000/productos/')
            .then(response => {
                setProductos(response.data.data); // Actualizar el estado con los datos de productos recibidos
            })
            .catch(error => {
                console.error('Error al obtener los productos:', error);
            });
    }, []); // Ejecutar solo una vez al montar el componente

    return (
        <section className="section new-arrival">
            <div className="title">
                <h1>NUEVO</h1>
                <p>Descubre los nuevos productos que tenemos para ti</p>
            </div>
            <div className="product-center">
                {productos.map(producto => (
                    <ProductoItem
                        key={producto.productID}
                        producto={producto} // Pasar el objeto completo producto como una prop
                    />
                ))}
            </div>
        </section>
    );
}

export default SectionNuevo;
