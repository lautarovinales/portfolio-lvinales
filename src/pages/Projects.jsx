import React, { useEffect } from 'react';
import '../styles/Projects.css';
import Nav from '../components/Nav';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';
import Divider from '../components/Divider';

function About() {
  useEffect(() => {
    document.title = "Portolio | Proyectos";
  }, []);

  return (
    <div>
      <Nav />
      <main>
        <Title text={"Proyectos"}></Title>
        <SubTitle text={"Estos son algunos de mis proyectos realizados a traves de mi camino como desarrollador web full stack. Debajo encontrarás proyectos tantos de Back-end como de Front-end cada uno con detalles importantes sobre los mismos."}></SubTitle>
        <Divider></Divider>
        <div className="project-container">
          <img src="" alt="" />
          <div className="body-project">
            <div className="tags-project">
              <div className="tag-project">HTML, CSS</div>
              <div className="tag-project">SQL</div>
              <div className="tag-project">NODE</div>
              <div className="tag-project">ESPRESS</div>
              <div className="tag-project">BACKEND</div>
              <div className="tag-project">FRONTEND</div>
            </div>
            <div className="title-project">E-commerce "Sneaker Spot"</div>
            <div className="body-p-project">Este proyecto fue desarrollado utilizando Node.js y Express, implementando un sistema CRUD (Crear, Leer, Actualizar y Eliminar) para la gestión de productos. La aplicación cuenta con una interfaz minimalista y amigable, diseñada con HTML y CSS, y es totalmente responsiva, garantizando una experiencia de usuario óptima en cualquier dispositivo.</div>
            <div className="sub-title-projects">Link</div>
            <div className="link-project"><a href="https://github.com/lautarovinales/grupo_3_SneakerSpot">Repositorio</a></div>
            <div className="sub-title-projects">Funcionalidades principales</div>
            <div className="cont-body-project">
              <div className="cont-sub-title-projects">Gestión de Productos</div>
              <div className="cont-body-p-project">Los usuarios pueden crear, visualizar, modificar y eliminar productos en la base de datos.</div>
            </div>
            <div className="cont-body-project">
              <div className="cont-sub-title-projects">Autenticación y Autorización</div>
              <div className="cont-body-p-project">El sistema permite el registro de usuarios y el inicio/cierre de sesión mediante Express. Los usuarios se clasifican en roles, donde los administradores tienen privilegios adicionales, como la capacidad de gestionar todos los productos.</div>
            </div>
            <div className="cont-body-project">
              <div className="cont-sub-title-projects">Base de Datos SQL</div>
              <div className="cont-body-p-project">Los datos se gestionan en una base de datos SQL, asegurando la integridad y eficiencia en el manejo de la información.</div>
            </div>
            <div className="cont-body-project">
              <div className="cont-sub-title-projects">Gestión de Productos</div>
              <div className="cont-body-p-project">Los usuarios pueden crear, visualizar, modificar y eliminar productos en la base de datos.</div>
            </div>
            <div className="cont-body-project">
              <div className="cont-sub-title-projects">Gestión de Productos</div>
              <div className="cont-body-p-project">Los usuarios pueden crear, visualizar, modificar y eliminar productos en la base de datos.</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default About;
