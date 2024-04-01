import {Route, Router, Routes} from 'react-router-dom';
import Inicio from './pages/inicio';
import Registro from './pages/registro';
import NotFound from './pages/NotFound';
import InicioSesion from './pages/inicio-sesion';
import Productos from './pages/productos';
import Categorias from './pages/categorias';
function App(){
  return (
    <Routes>
      <Route path='/' element={<Inicio/>}  />
      <Route path='/ArtemiShop_Registro' element={<Registro/>} />
      <Route path='*' element={<NotFound/>}></Route>
      <Route path='/ArtemiShop_IniciarSesion' element={<InicioSesion />} />
      <Route path='/ArtemiShop_Productos' element={<Productos />} />
      <Route path='/ArtemiShop_Categorias' element={<Categorias />} />
    </Routes>
  )
}
export default App