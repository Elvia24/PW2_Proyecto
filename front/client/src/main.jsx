  import React from 'react'
  import ReactDOM from 'react-dom/client'
  import App from './App.jsx'
  // import './index.css'
  import './css/index.css'
  import './css/perfil.css'
  import {BrowserRouter} from 'react-router-dom'


  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </React.StrictMode>,
  )
