import Navbar from "./components/Navbar";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
function ProductDetails() {
    const { id } = useParams();
    const [nombreCategoria, setNombreCategoria] = useState('');
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [imagen, setImagen] = useState('');


    const token = sessionStorage.getItem('token'); 
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/productos/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                        
                    }
                });
                if (response && response.data.data) {  
                    
                    const data = response.data.data;
                    console.log(data)
                    setNombreCategoria(data.nombreCategoria || '');
                    setNombre(data.nombre || '');
                    setPrecio(data.precio || '');
                    setCantidad(data.cantidad || '');
                    setDescripcion(data.descripcion || '');
                    setImagen(data.productImage || '');
                }
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchProduct();
    },[token]);


    return (
        <div>
            <Navbar />
            <div>
                <section className="section product-detail">
                    <div className="details container">
                        <div className="left image-container">
                            <div className="main">
                                <img src={`${imagen}`} id="zoom" alt="" />
                            </div>
                        </div>
                        <div className="right">
                            <span>{nombreCategoria}</span>
                            <h1>{nombre}</h1>
                            <div className="price">${precio}</div>

                            <form className="form">
                                <label htmlFor="number">{cantidad}:</label>
                                <input type="number" placeholder="1" min="1" />
                                <a href="carrito.html" className="addCart">Añadir a al Carrito</a>
                            </form>
                            <h3>DETALLE DEL PRODUCTO</h3>
                            <p>
                                {descripcion}
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default ProductDetails;
