import React, { useEffect, useState } from 'react';
import Navbar from "./components/Navbar";
import ProductoItem from "./components/ProductoItem";
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Productos() {
    const [productos, setProductos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(8);
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/');
            return;
        }

        fetchProducts();
    }, [isAuthenticated, currentPage]); // navigate removed from dependencies to prevent unnecessary calls

    const fetchProducts = () => {
        const token = sessionStorage.getItem('token');
        axios.get(`http://localhost:3000/productos/pages?page=${currentPage}&limit=${itemsPerPage}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            setProductos(response.data.data);
            setTotalPages(response.data.pagination.totalPages); // Ensure correct path to totalPages
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
    };

    function handlePageChange(newPage) {
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    }

    return (
        <div>
            <Navbar />
            <section className="section all-products" id="products">
                <div className="top container">
                    <h1>Todos Los Productos</h1>
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