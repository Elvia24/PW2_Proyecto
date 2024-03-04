
import Navbar from "./components/Navbar"
function inicio_sesion(){
    return (
        <div>
                <div >
                <Navbar />
                </div>
{/*  */}
        <div className="container">
            <div className="login-form">
                <form action="">
                <h1>Inicio Sesión</h1>

                <label for="name">Nombre Usuario</label>
                <input type="text" placeholder="Ingrese Nombre De Usuario" name="name" required />

                <label for="psw">Contraseña</label>
                <input
                    type="password"
                    placeholder="Introducir la contraseña"
                    name="psw"
                    required
                />

                <label for="Rol">Rol</label>
                <select>
                    <option value="Cliente">Cliente</option>
                    <option value="Vendedor">Vendedor</option>
                    <option value="Administrador">Administrador</option>
                </select>

                <div className="buttons">
                    <a href="../index.html"><button type="button" className="cancelbtn">Cancelar</button></a>
                    <button type="submit" className="registrobtn">Iniciar</button>
                </div>
                </form>
            </div>
        </div>
{/*  */}

        </div>
    )
}
export default inicio_sesion()