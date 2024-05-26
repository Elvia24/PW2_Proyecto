import Navbar from "./components/Navbar";
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from '../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [nombreCategoria, setNombreCategoria] = useState('');
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [cantidad, setCantidad] = useState(1);
    const [productosDisponibles, setProductosDisponibles] = useState(0);
    const [descripcion, setDescripcion] = useState('');
    const [imagen, setImagen] = useState('');

    const { userDetails, isAuthenticated } = useAuth();
    const token = sessionStorage.getItem('token');

    useEffect(() => {
        const fetchProduct = async () => {
            if (!isAuthenticated || !userDetails.userID) {
                navigate('/');
                return;
            }

            try {
                const response = await axios.get(`http://localhost:3000/productos/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                if (response && response.data.data) {
                    const data = response.data.data;
                    console.log(data);
                    setNombreCategoria(data.nombreCategoria || '');
                    setNombre(data.nombre || '');
                    setPrecio(data.precio || '');
                    
                    setProductosDisponibles(data.cantidad || 0);
                    setCantidad(1); // default quantity
                    setDescripcion(data.descripcion || '');
                    setImagen(data.productImage || '');
                }
            } catch (error) {
                console.error('Error fetching product:', error);
                toast.error('Error al obtener los detalles del producto');
            }
        };

        fetchProduct();
    }, [id, token, isAuthenticated, userDetails.userID, navigate]);

    const handleAddToCart = async (event) => {
        event.preventDefault();

        if (productosDisponibles === 0) {
            toast.error('El producto está agotado y no se puede agregar al carrito');
            return;
        }

        try {
            const response = await axios.post(`http://localhost:3000/productos/user/carrito`, {
                userID: userDetails.userID,
                productID: id,
                precio: precio,
                cantidad: cantidad
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.status === 201) {
                toast.success('Producto añadido al carrito');
                navigate('/ArtemiShop_Carrito'); // Redirect to the cart page
            }
        } catch (error) {
            console.error('Error adding product to cart:', error);
            toast.error('Error al añadir el producto al carrito');
        }
    };

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
                            <span>Categoria: {nombreCategoria}</span>
                            <h1>{nombre}</h1>
                            <div className="price">${precio}</div>

                            <form className="form" onSubmit={handleAddToCart}>
                                {productosDisponibles > 0 ? (
                                    <>
                                        <label htmlFor="number" style={{ marginRight: '10px' }}>Productos disponibles: {Math.floor(productosDisponibles)}</label>
                                        <input
                                            type="number"
                                            placeholder="1"
                                            min="1"
                                            max={productosDisponibles}
                                            value={cantidad}
                                            onChange={(e) => setCantidad(Number(e.target.value))}
                                        />
                                        <button type="submit" className="addCart">Añadir al Carrito</button>
                                    </>
                                ) : (
                                    <p style={{ color: 'red' }}>Agotado</p>
                                )}
                            </form>
                            <h3>DETALLE DEL PRODUCTO</h3>
                            <p>{descripcion}</p>
                        </div>
                    </div>
                </section>
            </div>
            <ToastContainer />
        </div>
    );
}

export default ProductDetails;