import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import { useNavigate } from 'react-router-dom'; 
import { useAuth } from '../context/AuthContext';
import VerCarrito from './components/VerCarrito';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Carrito() {
    const [items, setItems] = useState([]);
    const [subtotal, setSubtotal] = useState(0);
    const [impuesto, setImpuesto] = useState(0);
    const [total, setTotal] = useState(0);
    const { userDetails, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const fetchCarrito = useCallback(async () => {
        const token = sessionStorage.getItem('token');

        if (!isAuthenticated || !userDetails.userID) {
            navigate('/');
            return;
        }

        try {
            const response = await axios.get(`http://localhost:3000/productos/user/carrito`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    userid: userDetails.userID
                },
            });

            if (response.data.success) {
                const fetchedItems = response.data.data;
                setItems(fetchedItems);
                console.log(fetchedItems );
                const calculatedSubtotal = fetchedItems.reduce((sum, item) => sum + parseFloat(item.subtotal), 0);
                const calculatedImpuesto = calculatedSubtotal * 0.25; // Asume 25% de impuesto
                const calculatedTotal = calculatedSubtotal + calculatedImpuesto;

                setSubtotal(calculatedSubtotal);
                setImpuesto(calculatedImpuesto);
                setTotal(calculatedTotal);
            }
        } catch (error) {
            console.error('Error fetching carrito:', error);
        }
    }, [userDetails.userID, isAuthenticated, navigate]);

    useEffect(() => {
        fetchCarrito();
    }, [fetchCarrito]);

    const handleUpdate = async (productID, newCantidad) => {
        const token = sessionStorage.getItem('token');
        try {
            const response = await axios.patch(`http://localhost:3000/productos/user/carrito`, {
                userID: userDetails.userID,
                productID: productID,
                cantidad: newCantidad
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (!response.data.success) {
                console.error('Error updating product quantity:', response.data.message);
                toast.error('Error al actualizar la cantidad del producto');
            } else {
                toast.success('Cantidad del producto actualizada');
            }
        } catch (error) {
            console.error('Error updating product quantity:', error);
            toast.error('Error al actualizar la cantidad del producto');
        }
    };

    const handleCantidadChange = (productID, event) => {
        const newCantidad = Number(event.target.value);
        setItems(items.map(item => {
            if (item.productID === productID) {
                item.cantidad = newCantidad;
                item.subtotal = (item.precio * newCantidad).toFixed(2);
            }
            return item;
        }));

        const calculatedSubtotal = items.reduce((sum, item) => sum + parseFloat(item.subtotal), 0);
        const calculatedImpuesto = calculatedSubtotal * 0.25;
        const calculatedTotal = calculatedSubtotal + calculatedImpuesto;

        setSubtotal(calculatedSubtotal);
        setImpuesto(calculatedImpuesto);
        setTotal(calculatedTotal);

        handleUpdate(productID, newCantidad); // Llamar a handleUpdate para enviar la petición
    };

    const handleEliminar = async (productID) => {
        const token = sessionStorage.getItem('token');

        try {
            const response = await axios.delete(`http://localhost:3000/productos/user/carrito`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    userid: userDetails.userID,
                    productid: productID
                },
            });
            
            if (response.data.success) {
                setItems(items.filter(item => item.productID !== productID));
                
                const calculatedSubtotal = items.reduce((sum, item) => sum + parseFloat(item.subtotal), 0);
                const calculatedImpuesto = calculatedSubtotal * 0.25;
                const calculatedTotal = calculatedSubtotal + calculatedImpuesto;

                setSubtotal(calculatedSubtotal);
                setImpuesto(calculatedImpuesto);
                setTotal(calculatedTotal);

                toast.success('Producto eliminado del carrito');
            } else {
                toast.error('Error al eliminar el producto del carrito');
            }
        } catch (error) {
            console.error('Error eliminando producto del carrito:', error);
            toast.error('Error al eliminar el producto del carrito');
        }
    };

    const handleCheckout = async () => {
        const token = sessionStorage.getItem('token');
        try {
            const response = await axios.post(`http://localhost:3000/auth/ventas`, {
                userID: userDetails.userID,
                items: items,
                total: total,
                fecha: new Date().toISOString().split('T')[0], // Formato YYYY-MM-DD
                pago: total // Asume pago completo, puedes ajustar según sea necesario
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.data.success) {
                // Limpiar el carrito después de la compra exitosa
                setItems([]);
                setSubtotal(0);
                setImpuesto(0);
                setTotal(0);
                toast.success('Compra realizada con éxito');
                setTimeout(() => {
                    navigate('/'); // Redirigir a la página de inicio después de 3 segundos
                }, 3000);
            } else {
                toast.error('Error al finalizar la compra');
            }
        } catch (error) {
            console.error('Error al finalizar la compra:', error);
            toast.error('Error al finalizar la compra');
        }
    };

    return (
        <div>
            <Navbar />
            <div className="container">
                {items.length === 0 ? (
                    <>
                        
                        <p className="login2-form form h1">Tu carrito está vacío.</p>
                        <div className="total-price">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Subtotal</td>
                                        <td>$0.00</td>
                                    </tr>
                                    <tr>
                                        <td>Impuesto</td>
                                        <td>$0.00</td>
                                    </tr>
                                    <tr>
                                        <td>Total</td>
                                        <td>$0.00</td>
                                    </tr>
                                </tbody>
                            </table>
                            <button className="checkout btn" disabled>Finalizar Compra</button>
                        </div>
                    </>
                ) : (
                    <VerCarrito 
                        items={items} 
                        onCantidadChange={handleCantidadChange} 
                        onEliminar={handleEliminar} 
                        subtotal={subtotal} 
                        impuesto={impuesto} 
                        total={total} 
                        handleCheckout={handleCheckout}
                    />
                )}
            </div>
            <ToastContainer />
        </div>
    );
}

export default Carrito;