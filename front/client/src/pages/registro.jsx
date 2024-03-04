
import Navbar from "./components/Navbar"
function registro(){
    return (
        <div>
                <div >
                <Navbar />
                </div>
{/*  */}
        <div className="container">
            <div className="login-form">
                <form id="formulario" action="../pages/inicio_sesion.html" method="get">
                    <h1>Registro</h1>

                    <label htmlFor="username">Nombre de Usuario</label>
                    <input type="text" placeholder="Introduzca su nombre de usuario" name="username" required />

                    <label htmlFor="email">Correo</label>
                    <input type="text" placeholder="Ingrese correo electrónico" name="email" required />

                    <label htmlFor="psw">Contraseña</label>
                    <input id="psw" type="password" placeholder="Introducir la contraseña" name="psw" onInput={validarContraseña} required />
                    <p id="mensaje"></p>

                    <label htmlFor="Dirección">Dirección</label>
                    <input type="text" placeholder="Introduzca su Dirección" name="Dirección" required />

                    <label htmlFor="Rol">Rol</label>
                    <select>
                        <option value="Cliente">Cliente</option>
                        <option value="Vendedor">Vendedor</option>
                        <option value="Administrador">Administrador</option>
                    </select>

                    <div className="buttons">
                        <a href="../index.html"><button type="button" className="cancelbtn">Cancelar</button></a>
                        <button type="submit" className="registrobtn" onClick="return iniciarRegistro()">Iniciar</button>
                    </div>
                </form>
            </div>
        </div>
{/*  */}

        </div>
    )
}
export default registro()