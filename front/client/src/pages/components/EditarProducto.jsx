import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext'; 
import { useNavigate } from 'react-router-dom';

function EditarProducto({ productoSeleccionado, onProductUpdated, onResetView }) {
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

    useEffect(() => {
        if (productoSeleccionado) {
            setNombre(productoSeleccionado.nombre || '');
            setDescripcion(productoSeleccionado.descripcion || '');
            setPrecio(productoSeleccionado.precio || '');
            setCantidad(productoSeleccionado.cantidad || '');
            setCategoryID(productoSeleccionado.categoryID || '');
        }
    }, [productoSeleccionado]);

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
            const preview = document.getElementById('ImagePE');
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
        if (archivo) {
            formData.append('productImage', archivo);
        }
        formData.append('userID', userDetails.userID);
        formData.append('categoryID', categoryID);
        formData.append('precio', precio);
        formData.append('cantidad', cantidad);
        formData.append('productID', productoSeleccionado.productID); // Asegúrate de que este es el campo correcto para el ID del producto

        try {
            const response = await axios.put('http://localhost:3000/productos', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`
                }
            });
            if (response.status === 200) {
                onProductUpdated(); 
                onResetView();
            }
        } catch (error) {
            console.error('Error al actualizar producto:', error);
        }
    };

    return (
        <div>
            <h2>Editar Producto</h2>
            <form id="edit-product-form" onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="form-group">
                    <label>ID:</label>
                    <input
                        type="text"
                        name="id"
                        value={productoSeleccionado.productID}
                        disabled
                    />
                </div>
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
                <div className="form-group" style={{  justifyContent: 'center' }}>
                    <label htmlFor="selectedImagePE">Imagen:</label>
                    <input id="selectedImagePE" type="file" onChange={previewImagePF} />
                    <h2>Previsualización de la imagen:</h2>
                    <img id="ImagePE" src={productoSeleccionado.productImage || ''} alt="Imagen Seleccionada" style={{ maxWidth: '200px', }} />
                </div>
                <div className="right-align buttons">
                    <button type="submit" className="btn-editar">Guardar Cambios</button>
                </div>
            </form>
        </div>
    );
}

export default EditarProducto;