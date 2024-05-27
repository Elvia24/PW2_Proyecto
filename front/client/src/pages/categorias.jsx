import React, { useEffect, useState } from 'react';
import Navbar from "./components/Navbar";
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Categorias() {
    const [categorias, setCategorias] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(4);
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const defaultImage = 'https://via.placeholder.com/200';

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/');
            return;
        }

        fetchCategories();
    }, [isAuthenticated, currentPage]);

    const fetchCategories = () => {
        const token = sessionStorage.getItem('token');
        axios.get(`http://localhost:3000/categorias/pages?page=${currentPage}&limit=${itemsPerPage}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            setCategorias(response.data.data);
            setTotalPages(response.data.pagination.totalPages); 
            
        })
        .catch(error => {
            console.error('Error fetching categories:', error);
        });
    };

    function handlePageChange(newPage) {
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    }

    function handleCategoryClick(categoryID) {
        navigate(`/productos/${categoryID}`);
    }

    return (
        <div>
            <Navbar />
            <div>
                <div className="container">
                    <section className="section category">
                        <div className="top container">
                            <h1>Todas Las Categorias De Productos</h1>
                        </div>
                        <div className="cat-center ">
                            {categorias.map(categoria => (
                                <div className="cat" key={categoria.categoryID} onClick={() => handleCategoryClick(categoria.categoryID)}>
                                    <img src={categoria.categoryImage || defaultImage} alt={categoria.nombre} />
                                    <div>
                                        <p>{categoria.nombre}</p>
                                    </div>
                                    <span className="description">{categoria.descripcion}</span>
                                </div>
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
            </div>
        </div>
    );
}

export default Categorias;