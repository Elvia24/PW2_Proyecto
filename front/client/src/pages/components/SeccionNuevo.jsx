import React, { useEffect, useState } from 'react';
import ProductoItem from "./ProductoItem";
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

function SectionNuevo() {
    const [productos, setProductos] = useState([]);
    const { isAuthenticated } = useAuth();

    useEffect(() => {
        if (isAuthenticated) {
            const token = sessionStorage.getItem('token');
            axios.get('http://localhost:3000/productos/', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => {
                setProductos(response.data.data);
            })
            .catch(error => {
                console.error('Error al obtener los productos:', error);
            });
        } else {
            toast.info('Por favor, regístrate o inicia sesión para ver los productos.');
        }
    }, [isAuthenticated]);

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
                            producto={producto}
                        />
                    ))}
                </div>
            ) : (
                <div className="product-center">
                    <p>Por favor, <a href="/registro">regístrate</a> o <a href="/login">inicia sesión</a> para ver los productos.</p>
                </div>
            )}
            <ToastContainer />
        </section>
    );
}

export default SectionNuevo;
