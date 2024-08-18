import React from 'react';
import '../styles/Nav.css';  // Asegúrate de que la ruta sea correcta
import { Link } from 'react-router-dom'; 

function Nav() {
  return (
    <div>
      <nav>
        <ul>
          <Link to="/Home"><li><img src="/icon-home.png" alt="" srcset=""/><p>Inicio</p></li></Link>
          <Link to="/about"><li><img src="/icon-about.png" alt="" /><p>Sobre mi</p></li></Link>
          <Link to="/education"><li><img src="/icon-education.png" alt="" srcset=""/><p>Educación</p></li></Link>
          <Link to="/skills"><li><img src="/icon-skills.png" alt="" srcset=""/><p>Habilidades</p></li></Link>
          <li><img src="/icon-projects.png" alt="" srcset=""/><p>Proyectos</p></li>
        </ul>
        <a href="https://drive.google.com/drive/folders/1p_GfsOpm0Mr9Uethuwnicj50m2ar7Pp6"><div className="button-cv">
          <img src="/icon-download.png" alt="" srcset="" /><p>Descargar CV</p>
        </div></a>
      </nav>
    </div>
  );
}

export default Nav;
