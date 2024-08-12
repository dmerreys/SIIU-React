import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import '../assets/css/general.css';


const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    
    <div class="ui-menu ui-menubar ui-widget ui-widget-content ui-corner-all ui-helper-clearfix">
      <ul className="menu-bar" class="ui-menu-list ui-helper-reset">
        <li className="menu-item">
          <span>Estudiante</span>
          <ul className="submenu" class="ui-widget ui-menuitem ui-corner-all ui-menu-parent">
            <li>
              <a href="#">Información personal</a>
            </li>
          </ul>
        </li>
        <li className="menu-item">
          <span>Reportes</span>
          <ul className="submenu">
            <li>
              <a href="#">Reimpresión resolución de solicitudes Tercera Matrícula</a>
            </li>
          </ul>
        </li>
        <div className="user-options">
          <i className="fa fa-user"></i>
          <span className="user-name" onClick={toggleMenu}>Dennis E.</span>
          {isMenuOpen && (
            <div className="context-menu">
              <a href="#" className="menu-item" onClick={handleLogout}>Cerrar Sesión</a>
            </div>
          )}
        </div>
      </ul>
    </div>
  );
};

export default Menu;
