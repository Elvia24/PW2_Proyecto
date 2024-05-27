import {Route, Router, Routes} from 'react-router-dom';
import Inicio from './pages/inicio';
import Registro from './pages/registro';
import NotFound from './pages/NotFound';
import InicioSesion from './pages/inicio-sesion';
import Productos from './pages/productos';
import Categorias from './pages/categorias';
import Carrito from './pages/carrito';
import Perfil from './pages/perfil';
import MisProductos from './pages/misProductos';
import MisCategorias from './pages/misCategorias';
import ProductDetails from './pages/productDetails';
function App(){
  return (
    <Routes>
      <Route path='/' element={<Inicio/>}  />
      <Route path='/ArtemiShop_Registro' element={<Registro/>} />
      <Route path='*' element={<NotFound/>}></Route>
      <Route path='/ArtemiShop_IniciarSesion' element={<InicioSesion />} />
      <Route path='/ArtemiShop_Productos' element={<Productos />} />
      <Route path='/ArtemiShop_Categorias' element={<Categorias />} />
      <Route path='/ArtemiShop_Carrito' element={<Carrito />} />
      <Route path='/ArtemiShop_Perfil' element={<Perfil />} />
      <Route path='/ArtemiShop_MisProductos' element={<MisProductos />} />
      <Route path='/ArtemiShop_MisCategorias' element={<MisCategorias />} />
      <Route path='/ArtemiShop_productDetails/:id' element={<ProductDetails />} />
      <Route path="/productos/:categoryID" element={<Productos />} />
      
    </Routes>
  )
}
export default App