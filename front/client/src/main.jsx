import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './css/index.css';
import './css/perfil.css';
import './css/ProductosCategorias.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';  // Asegúrate de tener la ruta correcta al contexto

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);