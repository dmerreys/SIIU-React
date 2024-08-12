import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './assets/css/general.css'; // Importa tus estilos generales
import './assets/css/fontStyles.css';
import './assets/css/animate.css';
import './assets/css/style.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
