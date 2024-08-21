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
          <img src="/proyecto-zapa.jpg" alt="" />
          <div className="body-project">
            <div className="tags-project">
              <div className="tag-project">SQL</div>
              <div className="tag-project">NODE</div>
              <div className="tag-project">ESPRESS</div>
              <div className="tag-project">BACKEND</div>
              <div className="tag-project">FRONTEND</div>
            </div>
            <div className="title-project">E-commerce "Sneaker Spot"</div>
            <div className="link-project"><a href="https://github.com/lautarovinales/grupo_3_SneakerSpot">Repositorio</a></div>
            </div>
        </div>
        <div className="project-container">
          <img src="/proyecto-zapa.jpg" alt="" />
          <div className="body-project">
            <div className="tags-project">
              <div className="tag-project">SQL</div>
              <div className="tag-project">NODE</div>
              <div className="tag-project">ESPRESS</div>
              <div className="tag-project">BACKEND</div>
              <div className="tag-project">FRONTEND</div>
            </div>
            <div className="title-project">E-commerce "Sneaker Spot"</div>
            <div className="link-project"><a href="https://github.com/lautarovinales/grupo_3_SneakerSpot">Repositorio</a></div>
            </div>
        </div>
        <div className="project-container">
          <img src="/proyecto-zapa.jpg" alt="" />
          <div className="body-project">
            <div className="tags-project">
              <div className="tag-project">SQL</div>
              <div className="tag-project">NODE</div>
              <div className="tag-project">ESPRESS</div>
              <div className="tag-project">BACKEND</div>
              <div className="tag-project">FRONTEND</div>
            </div>
            <div className="title-project">E-commerce "Sneaker Spot"</div>
            <div className="link-project"><a href="https://github.com/lautarovinales/grupo_3_SneakerSpot">Repositorio</a></div>
            </div>
        </div>
      </main>
    </div>
  );
}

export default About;
