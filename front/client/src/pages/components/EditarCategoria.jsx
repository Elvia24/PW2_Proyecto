import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext'; 
import { useNavigate } from 'react-router-dom';

function EditarCategoria({ categoriaSeleccionado, onCategoryUpdated, onResetView }) {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [archivo, setArchivo] = useState(null);
    const [categoryID, setCategoryID] = useState(categoriaSeleccionado.categoryID);
    const { userDetails } = useAuth();
    const token = sessionStorage.getItem('token'); 
    const navigate = useNavigate(); 

    useEffect(() => {
        if (categoriaSeleccionado) {
            setNombre(categoriaSeleccionado.nombre || '');
            setDescripcion(categoriaSeleccionado.descripcion || '');
            setCategoryID(categoriaSeleccionado.categoryID);
        }
    }, [categoriaSeleccionado]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'categoria-nombre') {
            setNombre(value);
        } else if (name === 'categoria-descripcion') {
            setDescripcion(value);
        }
    };

    const previewImageCF = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            const preview = document.getElementById('ImageCA');
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
            formData.append('categoryImage', archivo);
        }
        formData.append('userID', userDetails.userID);
        formData.append('categoryID', categoryID);

        try {
            const response = await axios.put('http://localhost:3000/categorias', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`
                }
            });
            if (response.status === 200) {
                onCategoryUpdated(); 
                onResetView();
            }
        } catch (error) {
            console.error('Error al actualizar categoría:', error);
        }
    };

    return (
        <div>
            <h2>Editar Categoría</h2>
            <form id="edit-categoria-form" onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="form-group">
                    <label>ID:</label>
                    <input
                        type="text"
                        name="id"
                        value={categoryID}
                        disabled
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="categoria-nombre">Nombre:</label>
                    <input
                        type="text"
                        id="categoria-nombre"
                        name="categoria-nombre"
                        value={nombre}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="categoria-descripcion">Descripción:</label>
                    <textarea
                        id="categoria-descripcion"
                        name="categoria-descripcion"
                        value={descripcion}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="selectedImageCA">Imagen:</label>
                    <input id="selectedImageCA" type="file" onChange={previewImageCF} />
                    <h2>Previsualización de la imagen:</h2>
                    <img id="ImageCA" src={categoriaSeleccionado.categoryImage || ''} alt="Imagen Seleccionada" />
                </div>
                <div className="right-align buttons">
                    <button type="submit" className="btn-editar">Guardar Cambios</button>
                </div>
            </form>
        </div>
    );
}

export default EditarCategoria;