// ProductoItem.js
import React from 'react';

function ProductoItem({ producto }) {
    const imagenDummy = 'https://via.placeholder.com/150' ;
    return (
        <div className="product-item">
            <div className="overlay">
                <a href="productDetails.html" className="product-thumb">
                    {/* Utiliza la imagen dummy si no hay una imagen proporcionada */}
                    <img src={ imagenDummy} alt={producto.nombre} />
                </a>
            </div>
            <div className="product-info">
                <span>{producto.categoryID}</span>
                <a href="productDetails.html">{producto.nombre}</a>
                <h4>{producto.precio}</h4>
            </div>
            <ul className="icons">
                <li><i className='bx bxs-show'></i></li>
                <li><i className="bx bx-cart"></i></li>
            </ul>
        </div>
    );
}

export default ProductoItem;

 