import React from 'react';
import '../styles/Nav.css';  // Asegúrate de que la ruta sea correcta

function Nav() {
  return (
    <div>
      <nav>
        <ul>
          <li><img src="/icon-home.png" alt="" srcset=""/>Inicio</li>
          <li><img src="/icon-about.png" alt="" srcset=""/>Sobre mi</li>
          <li><img src="/icon-education.png" alt="" srcset=""/>Educación</li>
          <li><img src="/icon-skills.png" alt="" srcset=""/>Habilidades</li>
          <li><img src="/icon-projects.png" alt="" srcset=""/>Proyectos</li>
        </ul>
        <div className="button-cv">
          Descargar CV
        </div>
      </nav>
    </div>
  );
}

export default Nav;
