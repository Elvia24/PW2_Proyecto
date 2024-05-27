import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SalesReport() {
    const [ventas, setVentas] = useState([]);
    const { userDetails } = useAuth();
    const token = sessionStorage.getItem('token');

    useEffect(() => {
        const fetchVentas = async () => {
            try {
                const response = await axios.get('http://localhost:3000/auth/misVentas',  {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
                        userid: userDetails.userID
                    }
                });

                if (response.data.success) {
                    setVentas(response.data.data); 
                    
                }
            } catch (error) {
                console.error('Error fetching sales data:', error);
                toast.error('Error al obtener los datos de ventas');
            }
        };

        fetchVentas();
    }, [userDetails.userID, token]);

    return (
        <div id="session-report-venta" style={{ display: "block" }}>
            <h2>Ventas</h2>
            <div className="table-container-ventas" id="table-container-ventas">
                {ventas.length > 0 ? (
                    <table id="ventas-table">
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th>Total</th>
                                <th>Fecha de Venta</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ventas.map((venta) => (
                                <tr key={venta.detalleID}>
                                    <td>
                                        <div className="cart-info">
                                            <img src={venta.Imagen} alt={venta.Producto} />
                                            <div>
                                                <p>{venta.Producto}</p>
                                                <span>Precio: ${venta.Precio}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{venta.CantidadVendida}</td>
                                    <td>${venta.Subtotal}</td>
                                    <td>{new Date(venta.FechaVenta).toLocaleDateString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No hay ventas disponibles.</p>
                )}
            </div>
            <ToastContainer />
        </div>
    );
}

export default SalesReport;