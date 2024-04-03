import React, { useState } from 'react';
import Navbar from "./components/Navbar"
function Carrito() {
        // Suponiendo que cada producto tenga un estado para su cantidad
        /* TODO: al cambiar la cantidad el subtotal tambien cambiara
        es decir si tenemos 50 de precio original y el usuario cambia la cantidad 
        del producto a compar el sub total cambiara a 100*/
        const [cantidad, setCantidad] = useState(1);

        const handleCantidadChange = (event) => {
            setCantidad(event.target.value);
        };

    return (
        <div>
            <Navbar />
            <div className="container cart">
                <table>
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="cart-info">
                                    <img src="../../src/images/sample_images/product-2.jpg" alt="Boy’s T-Shirt" />
                                    <div>
                                        <p>Boy’s T-Shirt</p>
                                        <span>Precio: $50.00</span> <br />
                                        <a href="#">Eliminar</a>
                                    </div>
                                </div>
                            </td>
                            <td><input type="number" value={cantidad} min="1" onChange={handleCantidadChange} /></td>
                            <td>$50.00</td>
                        </tr>
                        {/* Repite los <tr> para los demás productos */}
                    </tbody>
                </table>
                <div className="total-price">
                    <table>
                        <tbody>
                            <tr>
                                <td>Subtotal</td>
                                <td>$200</td>
                            </tr>
                            <tr>
                                <td>Impuesto</td>
                                <td>$50</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>$250</td>
                            </tr>
                        </tbody>
                    </table>
                    <a href="#" className="checkout btn">Finalizar Compra</a>
                </div>
            </div>
        </div>
    );
}
export default Carrito;