import React from 'react';
import '../styles/Nav.css';  // Asegúrate de que la ruta sea correcta

function Nav() {
  return (
    <div>
      <nav>
        <ul>
          <li><img src="/icon-home.png" alt="" srcset=""/><p>Inicio</p></li>
          <li><img src="/icon-about.png" alt="" srcset=""/><p>Sobre mi</p></li>
          <li><img src="/icon-education.png" alt="" srcset=""/><p>Educación</p></li>
          <li><img src="/icon-skills.png" alt="" srcset=""/><p>Habilidades</p></li>
          <li><img src="/icon-projects.png" alt="" srcset=""/><p>Proyectos</p></li>
        </ul>
        <div className="button-cv">
          <img src="/icon-download.png" alt="" srcset="" /><p>Descargar CV</p>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
