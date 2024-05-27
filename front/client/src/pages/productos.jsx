import React, { useEffect, useState } from 'react';
import Navbar from "./components/Navbar";
import ProductoItem from "./components/ProductoItem";
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useParams } from 'react-router-dom';

function Productos() {
    const [productos, setProductos] = useState([]);
    const [allProductos, setAllProductos] = useState([]); // Para almacenar todos los productos
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(8);
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const { categoryID } = useParams(); // Obtener categoryID de la URL

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/');
            return;
        }

        fetchAllProducts();
    }, [isAuthenticated]);

    useEffect(() => {
        filterProductsByCategory();
    }, [categoryID, allProductos]); // Filtrar productos cuando cambie categoryID o allProductos

    const fetchAllProducts = () => {
        const token = sessionStorage.getItem('token');
        axios.get(`http://localhost:3000/productos`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            setAllProductos(response.data.data);
            setTotalPages(Math.ceil(response.data.data.length / itemsPerPage));
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
    };

    const filterProductsByCategory = () => {
        if (categoryID) {
            const filteredProducts = allProductos.filter(producto => producto.categoryID === parseInt(categoryID));
            setProductos(filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage));
        } else {
            setProductos(allProductos.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage));
        }
    };

    function handlePageChange(newPage) {
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage);
            filterProductsByCategory();
        }
    }

    return (
        <div>
            <Navbar />
            <section className="section all-products" id="products">
                <div className="top container">
                    <h1>{categoryID ? `Productos de la Categoría ${categoryID}` : 'Todos Los Productos'}</h1>
                </div>
                <div className="product-center container">
                    {productos.map(producto => (
                        <ProductoItem key={producto.productID} producto={producto} />
                    ))}
                </div>
            </section>
            <section className="pagination">
                <div className="container">
                    <span onClick={() => handlePageChange(currentPage - 1)}>&lt;</span>
                    {[...Array(totalPages).keys()].map(page => (
                        <span key={page} onClick={() => handlePageChange(page + 1)}
                            className={page + 1 === currentPage ? 'active' : ''}>
                            {page + 1}
                        </span>
                    ))}
                    <span onClick={() => handlePageChange(currentPage + 1)}>&gt;</span>
                </div>
            </section>
        </div>
    );
}

export default Productos;