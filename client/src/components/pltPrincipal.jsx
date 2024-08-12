import React from 'react';
import Cabecera from './pltCabecera';
import Menu from './pltMenu';
import Pie from './pltPie';

const PltPrincipal = ({ children }) => {
  return (
    <div className="dtic">
      {/* Cabecera */}
      <header id="cabecera" style={{ height: 'auto' }}>
        <Cabecera />
      </header>

      {/* Menú */}
      <nav id="menu">
        <Menu />
      </nav>

      {/* Contenido Principal */}
      <main id="content">
        <div className="wrapper">
          {children}
        </div>
      </main>

      {/* Pie de Página */}
      <footer id="pie" className="pie">
        <Pie />
      </footer>
    </div>
  );
};

export default PltPrincipal;
