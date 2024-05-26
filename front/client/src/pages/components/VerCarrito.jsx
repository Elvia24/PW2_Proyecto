import React from 'react';
import TablaCarrito from './TablaCarrito';

function VerCarrito({ items, onCantidadChange, onEliminar, subtotal, impuesto, total, handleCheckout }) {
    return (
        <div>
            <TablaCarrito items={items} onCantidadChange={onCantidadChange} onEliminar={onEliminar} />
            <div className="total-price">
                <table>
                    <tbody>
                        <tr>
                            <td>Subtotal</td>
                            <td>${subtotal.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Impuesto</td>
                            <td>${impuesto.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>${total.toFixed(2)}</td>
                        </tr>
                    </tbody>
                </table>
                <button className="checkout btn" onClick={handleCheckout}>Finalizar Compra</button>
            </div>
        </div>
    );
}

export default VerCarrito;