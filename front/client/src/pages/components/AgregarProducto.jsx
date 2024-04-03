// AgregarProducto.jsx
import React, { useState } from 'react';
import { previewImagePF, previewImageCF } from '../../js/imagePreviewPyC';
function AgregarProducto() {

    return (
        <div>
            <h2>Agregar Nuevo Producto</h2>
            <form id="add-product-form" encType="multipart/form-data">
                <div className="form-group">
                    <label htmlFor="producto-nombre">Nombre:</label>
                    <input
                        type="text"
                        id="producto-nombre"
                        name="producto-nombre"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="producto-descripcion">Descripción:</label>
                    <textarea
                        id="producto-descripcion"
                        name="producto-descripcion"
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
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="producto-cantidad">Cantidad:</label>
                    <input
                        type="number"
                        id="producto-cantidad"
                        name="producto-cantidad"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="producto-categoria">Categoría:</label>
                    <select
                        id="producto-categoria"
                        name="producto-categoria"
                        required
                    >
                        <option value="categoria1">Categoría 1</option>
                        <option value="categoria2">Categoría 2</option>
                        <option value="categoria3">Categoría 3</option>
                        {/* Agrega más opciones según tus necesidades */}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="selectedImagePA">Imagen:</label>
                    <input id="selectedImagePA" type="file" onChange={previewImagePF} />
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