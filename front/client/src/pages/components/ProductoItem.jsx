import React from 'react';

function ProductoItem({ producto }) {
   
    let imagenSrc = producto.productImage ? producto.productImage : 'https://via.placeholder.com/150';
    
    return (
        <div className="product-item">
            <div className="overlay">
                <a href="productDetails.html" className="product-thumb">
                    {/* Utiliza la imagen del producto si está disponible, de lo contrario, muestra una imagen dummy */}
                    <img src={imagenSrc} alt={producto.nombre} style={{ width: '100%', height: 'auto' }} />
                </a>
            </div>
            <div className="product-info">
                <span>{producto.nombreCategoria}</span>
                <a href="productDetails.html">{producto.nombre}</a>
                <h4>${producto.precio}</h4>
            </div>
            <ul className="icons">
                <li><i className='bx bxs-show'></i></li>
                <li><i className="bx bx-cart"></i></li>
            </ul>
        </div>
    );
}

export default ProductoItem;