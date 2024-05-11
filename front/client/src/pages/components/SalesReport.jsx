import React from 'react';

function SalesReport() {
    return (
        <div id="session-report-venta" style={{ display: "block" }}>
            <h2>Ventas</h2>
            <div className="table-container-ventas" id="table-container-ventas">
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
                        {/* Repeat for each product, this data would ideally come from props or context */}
                        <tr>
                            <td>
                                <div className="cart-info">
                                    <img src="../../src/images/sample_images/product-2.jpg" alt="Product" />
                                    <div>
                                        <p>Boy’s T-Shirt</p>
                                        <span>Precio: $50.00</span>
                                    </div>
                                </div>
                            </td>
                            <td>1</td>
                            <td>$50.00</td>
                            <td>17/03/2023</td>
                        </tr>
                        {/* Additional rows as needed */}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default SalesReport;