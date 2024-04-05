// AgregarCategoria.jsx
import React, { useState } from 'react';
import { previewImageCF} from '../../js/imagePreviewPyC';
// previewImageCF 
function AgregarCategoria() {

    return (
        <div>
            <h2>Agregar Nuevo Categoria</h2>
            <form id="add-categoria-form" encType="multipart/form-data">
                <div className="form-group">
                    <label htmlFor="categoria-nombre">Nombre:</label>
                    <input
                        type="text"
                        id="categoria-nombre"
                        name="categoria-nombre"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="categoria-descripcion">Descripción:</label>
                    <textarea
                        id="categoria-descripcion"
                        name="categoria-descripcion"
                        required
                    ></textarea>
                </div>


                <div className="form-group">
                    <label htmlFor="selectedImageCA">Imagen:</label>
                    <input id="selectedImageCA" type="file" onChange={previewImageCF} />
                    <h2>Previsualización de la imagen:</h2>
                    <img id="ImageCA" alt="Imagen Seleccionada" />
                </div>

                <div className="right-align buttons">
                    <button type="submit" className="btn-agregar">Guardar</button>
                </div>
            </form>
        </div>
    );
}

export default AgregarCategoria;