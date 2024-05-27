import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import { useAuth } from '../../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PurchaseReport() {
    const [compras, setCompras] = useState([]);
    const { userDetails } = useAuth();
    const token = sessionStorage.getItem('token');

    useEffect(() => {
        const fetchCompras = async () => {
            try {
                const response = await axios.get('http://localhost:3000/auth/compras',  {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
                        userid: userDetails.userID
                    }
                });

                if (response.data.success) {
                    setCompras(response.data.data);
                    
                }
            } catch (error) {
                console.error('Error fetching purchase data:', error);
                toast.error('Error al obtener los datos de compras');
            }
        };

        fetchCompras();
    }, [userDetails.userID, token]);

    return (
        <div id="session-report-compra" style={{ display: "block" }}>
            <h2>Compras</h2>
            <div className="table-container-compras" id="table-container-compras">
                {compras.length > 0 ? (
                    <table id="compra-table">
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th>Total</th>
                                <th>Fecha de compra</th>
                            </tr>
                        </thead>
                        <tbody>
                            {compras.map((compra) => (
                                <tr key={compra.detalleID}>
                                    <td>
                                        <div className="cart-info">
                                            <img src={compra.Imagen} alt={compra.Producto} />
                                            <div>
                                                <p>{compra.Producto}</p>
                                                <span>Precio: ${compra.Precio}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{compra.CantidadComprada}</td>
                                    <td>${compra.Subtotal}</td>
                                    <td>{new Date(compra.FechaCompra).toLocaleDateString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No hay compras disponibles.</p>
                )}
            </div>
            <ToastContainer />
        </div>
    );
}

export default PurchaseReport;