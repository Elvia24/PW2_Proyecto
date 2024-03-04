import {Route, Router, Routes} from 'react-router-dom';
import inicio from './pages/inicio';
import registro from './pages/registro';
import NotFound from './pages/NotFound';
import inicioSesion from './pages/inicio-sesion';

function App(){
  return (
    <Routes>
      <Route path='/' element={inicio} />
      <Route path='/ArtemiShop_Registro' element={registro} />
      <Route path='*' element={NotFound}></Route>
      <Route path='/ArtemiShop_IniciarSesion' element={inicioSesion} />
    </Routes>
  )
}
export default App