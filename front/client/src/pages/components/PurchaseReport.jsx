import React from 'react';

function PurchaseReport() {
    return (
        <div id="session-report-compra" style={{ display: "block" }}>
            <h2>Compras</h2>
            <div className="table-container-compras">
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
                        {/* Repeat for each product, this data would ideally come from props or context */}
                        <tr>
                            <td>
                                <div className="cart-info">
                                    <img src="../../src/images/sample_images/product-3.jpg" alt="Product" />
                                    <div>
                                        <p>Boy’s T-Shirt</p>
                                        <span>Precio: $90.00</span>
                                    </div>
                                </div>
                            </td>
                            <td>1</td>
                            <td>$90.00</td>
                            <td>17/03/2023</td>
                        </tr>
                        {/* Additional rows as needed */}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default PurchaseReport;