import React, { useState } from 'react';
import Navbar from "./components/Navbar";

import { useUserData } from '../js/data/userData';


function Perfil() {
    // ---DATOS USUARIO---
    const {
        nombreUser,
        handleNombreChange,
        mail,
        handlEmailChange,
        address,
        handlAddressChange,
        rol
    } = useUserData();
    // ---DATOS USUARIO---

    // ---SECCIONES VISIBLES---
    // Estado para almacenar el identificador de la sección actualmente visible
    const [seccionVisible, setSeccionVisible] = useState('editar-informacion');
    const [currentButton, setCurrentButton] = useState('editar-informacion');

    // Función para manejar el clic en los botones
    const handleClick = (seccion) => {
        setSeccionVisible(seccion); // Cambiar el estado a la sección clicada
        setCurrentButton(seccion); // Actualizar el botón actual
    };
    // ---SECCIONES VISIBLES---


    return (
        <div>
            <Navbar />
            <div className="container">
                <section className="user-info">
                    {/* <!-- PERFIL --> */}
                    <div className="info-section">
                        <h2>Datos del Usuario <i className="bx bx-user"></i></h2>
                        <ul>
                            <li><strong>Nombre De Usuario:</strong> {nombreUser}</li>
                            <li><strong>Correo:</strong> {mail}</li>
                            <li><strong>Dirección:</strong> {address}</li>
                            <li><strong>Rol:</strong> {rol}</li>
                            <li className="buttons button-group-perfil">
                                <br />
                                <hr />
                                <br />
                                <button onClick={() => handleClick("editar-informacion")} className={currentButton === 'editar-informacion' ? 'active' : ''}>Editar mi información</button>
                                <button onClick={() => handleClick("session-report-venta")} className={currentButton === 'session-report-venta' ? 'active' : ''}>Mis Ventas</button>
                                <button onClick={() => handleClick("session-report-compra")} className={currentButton === 'session-report-compra' ? 'active' : ''}>Mis Compras</button>
                                <br />
                                <hr />
                                <br />
                                <a href="/ArtemiShop_misProductos" className="button-group-perfil"><button >Mis Productos</button></a>
                                <a href="/ArtemiShop_misCategorias" className="button-group-perfil"><button >Mis Categorias</button></a>
                            </li>
                        </ul>
                    </div>
                    {/* <!-- PERFIL --> */}
                    {/* <!-- PERFIL EDITAR --> */}
                    <div className="edit-section" id="perfil-editar" style={{ display: seccionVisible === "editar-informacion" ? "block" : "none" }}>

                        <h2>Editar Información</h2>
                        <form id="user-info-form">
                            <div className="form-group">
                                <label htmlFor="nombreUser">Nombre De Usuario:</label>
                                <input
                                    type="text"
                                    id="nombreUser"
                                    name="nombreUser"
                                    value={nombreUser}
                                    onChange={handleNombreChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="correo">Correo:</label>
                                <input
                                    type="email"
                                    id="correo"
                                    name="correo"
                                    value={mail}
                                    onChange={handlEmailChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="direccion">Dirección:</label>
                                <input
                                    type="text"
                                    id="direccion"
                                    name="direccion"
                                    value={address}
                                    onChange={handlAddressChange}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn-editar">Guardar Cambios</button>
                        </form>
                    </div>
                    {/* <!-- PERFIL EDITAR --> */}
                </section>

                {/* <!-- SESSION REPORTES --> */}
                <div className="session-reports">
                    {/* <!-- reporte ventas --> */}
                    <div id="session-report-venta" style={{ display: seccionVisible === "session-report-venta" ? "block" : "none" }}>
                        <h2>Ventas</h2>
                        <div className="table-container-ventas" id="table-container-ventas">
                            <table id="ventas-table">
                                <thead>
                                    <tr>
                                        <th>Producto</th>
                                        <th>Cantidad</th>
                                        <th>Total</th>
                                        <th>Fecha de Venta</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="cart-info">
                                                <img src="../../src/images/sample_images/product-2.jpg" alt="" />
                                                <div>
                                                    <p>Boy’s T-Shirt</p>
                                                    <span>Precio: $50.00</span> <br />
                                                </div>
                                            </div>
                                        </td>
                                        <td>1</td>
                                        <td>$50.00</td>
                                        <td>17/03/2023</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="cart-info">
                                                <img src="../../src/images/sample_images/product-3.jpg" alt="" />
                                                <div>
                                                    <p>Boy’s T-Shirt</p>
                                                    <span>Precio: $90.00</span> <br />
                                                </div>
                                            </div>
                                        </td>
                                        <td>1</td>
                                        <td>$90.00</td>
                                        <td>17/03/2023</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="cart-info">
                                                <img src="../../src/images/sample_images/product-4.jpg" alt="" />
                                                <div>
                                                    <p>Boy’s T-Shirt</p>
                                                    <span>Precio: $60.00</span> <br />
                                                </div>
                                            </div>
                                        </td>
                                        <td>1</td>
                                        <td>$60.00</td>
                                        <td>17/03/2023</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="cart-info">
                                                <img src="../../src/images/sample_images/product-5.jpg" alt="" />
                                                <div>
                                                    <p>Boy’s T-Shirt</p>
                                                    <span>Precio: $60.00</span> <br />
                                                </div>
                                            </div>
                                        </td>
                                        <td>1</td>
                                        <td>$60.00</td>
                                        <td>17/03/2023</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="cart-info">
                                                <img src="../../src/images/sample_images/product-6.jpg" alt="" />
                                                <div>
                                                    <p>Boy’s T-Shirt</p>
                                                    <span>Precio: $60.00</span> <br />
                                                </div>
                                            </div>
                                        </td>
                                        <td>1</td>
                                        <td>$60.00</td>
                                        <td>17/03/2023</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="cart-info">
                                                <img src="../../src/images/sample_images/product-6.jpg" alt="" />
                                                <div>
                                                    <p>Boy’s T-Shirt</p>
                                                    <span>Precio: $60.00</span> <br />
                                                </div>
                                            </div>
                                        </td>
                                        <td>1</td>
                                        <td>$60.00</td>
                                        <td>17/03/2023</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="cart-info">
                                                <img src="../../src/images/sample_images/product-6.jpg" alt="" />
                                                <div>
                                                    <p>Boy’s T-Shirt</p>
                                                    <span>Precio: $60.00</span> <br />
                                                </div>
                                            </div>
                                        </td>
                                        <td>1</td>
                                        <td>$60.00</td>
                                        <td>17/03/2023</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* <!-- reporte ventas --> */}
                    {/* <!-- reporte compra --> */}
                    <div id="session-report-compra" style={{ display: seccionVisible === "session-report-compra" ? "block" : "none" }}>
                        <h2>Compras</h2>
                        <div className="table-container-compras">
                            <table id="compra-table">
                                <thead>
                                    <tr>
                                        <th>Producto</th>
                                        <th>Cantidad</th>
                                        <th>Total</th>
                                        <th>Fecha de compra</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="cart-info">
                                                <img src="../../src/images/sample_images/product-2.jpg" alt="" />
                                                <div>
                                                    <p>Boy’s T-Shirt</p>
                                                    <span>Precio: $50.00</span> <br />
                                                </div>
                                            </div>
                                        </td>
                                        <td>1</td>
                                        <td>$50.00</td>
                                        <td>17/03/2023</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="cart-info">
                                                <img src="../../src/images/sample_images/product-3.jpg" alt="" />
                                                <div>
                                                    <p>Boy’s T-Shirt</p>
                                                    <span>Precio: $90.00</span> <br />
                                                </div>
                                            </div>
                                        </td>
                                        <td>1</td>
                                        <td>$90.00</td>
                                        <td>17/03/2023</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="cart-info">
                                                <img src="../../src/images/sample_images/product-4.jpg" alt="" />
                                                <div>
                                                    <p>Boy’s T-Shirt</p>
                                                    <span>Precio: $60.00</span> <br />
                                                </div>
                                            </div>
                                        </td>
                                        <td>1</td>
                                        <td>$60.00</td>
                                        <td>17/03/2023</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="cart-info">
                                                <img src="../../src/images/sample_images/product-5.jpg" alt="" />
                                                <div>
                                                    <p>Boy’s T-Shirt</p>
                                                    <span>Precio: $60.00</span> <br />
                                                </div>
                                            </div>
                                        </td>
                                        <td>1</td>
                                        <td>$60.00</td>
                                        <td>17/03/2023</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="cart-info">
                                                <img src="../../src/images/sample_images/product-6.jpg" alt="" />
                                                <div>
                                                    <p>Boy’s T-Shirt</p>
                                                    <span>Precio: $60.00</span> <br />
                                                </div>
                                            </div>
                                        </td>
                                        <td>1</td>
                                        <td>$60.00</td>
                                        <td>17/03/2023</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="cart-info">
                                                <img src="../../src/images/sample_images/product-6.jpg" alt="" />
                                                <div>
                                                    <p>Boy’s T-Shirt</p>
                                                    <span>Precio: $60.00</span> <br />
                                                </div>
                                            </div>
                                        </td>
                                        <td>1</td>
                                        <td>$60.00</td>
                                        <td>17/03/2023</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="cart-info">
                                                <img src="../../src/images/sample_images/product-6.jpg" alt="" />
                                                <div>
                                                    <p>Boy’s T-Shirt</p>
                                                    <span>Precio: $60.00</span> <br />
                                                </div>
                                            </div>
                                        </td>
                                        <td>1</td>
                                        <td>$60.00</td>
                                        <td>17/03/2023</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* <!-- reporte compra --> */}
                </div>
                {/* <!-- SESSION REPORTES --> */}
            </div>

            <script src="../js/profileManners.js"></script>
        </div>

    );
}
export default Perfil;