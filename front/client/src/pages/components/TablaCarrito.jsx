import React from 'react';

function TablaCarrito({ items, onCantidadChange, onEliminar }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => (
                    <tr key={item.productID}>
                        <td>
                            <div className="cart-info">
                                <img src={item.imagenProducto} alt={item.nombreProducto} />
                                <div>
                                    <p>{item.nombreProducto}</p>
                                    <span>Precio: ${parseFloat(item.precio).toFixed(2)}</span> <br />
                                    <button className="btn-eliminar" onClick={() => onEliminar(item.productID)}>Eliminar</button>
                                </div>
                            </div>
                        </td>
                        <td>
                            <input 
                                type="number" 
                                value={Math.floor(item.cantidad)} 
                                min="1"
                                max={item.productosDisponibles} 
                                onChange={(event) => onCantidadChange(item.productID, event)} 
                            />
                        </td>
                        <td>${parseFloat(item.subtotal).toFixed(2)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default TablaCarrito;