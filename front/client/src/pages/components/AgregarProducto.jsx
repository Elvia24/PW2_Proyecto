import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext'; 
import { useNavigate } from 'react-router-dom';

function AgregarProducto({ onProductAdded, onResetView }) {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [archivo, setArchivo] = useState(null);
    const [precio, setPrecio] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [categoryID, setCategoryID] = useState('');
    const [categorias, setCategorias] = useState([]);
    const { userDetails } = useAuth();
    const token = sessionStorage.getItem('token'); 
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCategorias = async () => {
            try {
                const response = await axios.get('http://localhost:3000/categorias', {
                    headers: {
                        Authorization: `Bearer ${token}`
                        
                    }
                });
                if (response && response.data.data) {
                    setCategorias(response.data.data);
                }
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategorias();
    }, [token]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'producto-nombre') {
            setNombre(value);
        } else if (name === 'producto-descripcion') {
            setDescripcion(value);
        } else if (name === 'producto-precio') {
            setPrecio(value);
        } else if (name === 'producto-cantidad') {
            setCantidad(value);
        } else if (name === 'producto-categoria') {
            setCategoryID(value);
        }
    };

    const previewImagePF = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            const preview = document.getElementById('ImagePA');
            preview.src = reader.result;
        };
        reader.readAsDataURL(file);
        setArchivo(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('nombre', nombre);
        formData.append('descripcion', descripcion);
        formData.append('productImage', archivo);
        formData.append('userID', userDetails.userID);
        formData.append('categoryID', categoryID);
        formData.append('precio', precio);
        formData.append('cantidad', cantidad);

        try {
            const response = await axios.post('http://localhost:3000/productos', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`
                }
            });
            if (response.status === 201) {
                onProductAdded(); 
                onResetView();
            }
        } catch (error) {
            console.error('Error al agregar producto:', error);
        }
    };

    return (
        <div>
            <h2>Agregar Nuevo Producto</h2>
            <form id="add-product-form" onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="form-group">
                    <label htmlFor="producto-nombre">Nombre:</label>
                    <input
                        type="text"
                        id="producto-nombre"
                        name="producto-nombre"
                        value={nombre}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="producto-descripcion">Descripción:</label>
                    <textarea
                        id="producto-descripcion"
                        name="producto-descripcion"
                        value={descripcion}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="producto-precio">Precio:</label>
                    <input
                        type="number"
                        id="producto-precio"
                        name="producto-precio"
                        step="0.01"
                        value={precio}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="producto-cantidad">Cantidad:</label>
                    <input
                        type="number"
                        id="producto-cantidad"
                        name="producto-cantidad"
                        value={cantidad}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="producto-categoria">Categoría:</label>
                    <select
                        id="producto-categoria"
                        name="producto-categoria"
                        value={categoryID}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Seleccione una categoría</option>
                        {categorias.map((categoria) => (
                            <option key={categoria.categoryID} value={categoria.categoryID}>
                                {categoria.nombre}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="selectedImagePA">Imagen:</label>
                    <input id="selectedImagePA" type="file" onChange={previewImagePF} required />
                    <h2>Previsualización de la imagen:</h2>
                    <img id="ImagePA" alt="Imagen Seleccionada" />
                </div>
                <div className="right-align buttons">
                    <button type="submit" className="btn-agregar">Guardar</button>
                </div>
            </form>
        </div>
    );
}

export default AgregarProducto;