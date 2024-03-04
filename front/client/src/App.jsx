import {Route, Router, Routes} from 'react-router-dom';
import inicio from './pages/inicio';
import registro from './pages/registro';
import NotFound from './pages/NotFound';

function App(){
  return (
    <Routes>
      <Route path='/' element={inicio} />
      <Route path='/ArtemiShop/Registro' element={registro} />
      <Route path='*' element={NotFound}></Route>
    </Routes>
  )
}
export default App