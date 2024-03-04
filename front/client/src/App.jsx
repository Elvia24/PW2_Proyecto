import {Route, Router, Routes} from 'react-router-dom';
import inicio from './pages/inicio';
import Registro from './pages/registro';
import NotFound from './pages/NotFound';
import InicioSesion from './pages/inicio-sesion';

function App(){
  return (
    <Routes>
      <Route path='/' element={inicio} />
      <Route path='/ArtemiShop_Registro' element={<Registro/>} />
      <Route path='*' element={NotFound}></Route>
      <Route path='/ArtemiShop_IniciarSesion' element={<InicioSesion />} />
    </Routes>
  )
}
export default App