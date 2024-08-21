import React, { useEffect } from 'react';
import '../styles/Projects.css';
import Nav from '../components/Nav';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';
import Divider from '../components/Divider';
import ProjectCard from '../components/ProjectCard';

function About() {
  useEffect(() => {
    document.title = "Portolio | Proyectos";
  }, []);

  return (
    <div>
      <Nav />
      <main>
        <Title text={"Proyectos"} />
        <SubTitle text={"Estos son algunos de mis proyectos realizados a traves de mi camino como desarrollador web full stack. Debajo encontrarás proyectos tantos de Back-end como de Front-end cada uno con detalles importantes sobre los mismos."} />
        <Divider />

        <ProjectCard
          imageSrc="/proyecto-zapa.jpg"
          tags={["SQL", "NODE", "EXPRESS", "BACKEND", "FRONTEND"]}
          title={`E-commerce "Sneaker Spot"`}
          repoLink="https://github.com/lautarovinales/grupo_3_SneakerSpot"
        />
        <ProjectCard
          imageSrc="/proyecto-helado.jpg"
          tags={["SQL", "REACT", "FRONTEND"]}
          title={`Landing page "Heladeria"`}
          repoLink="https://github.com/lautarovinales/landing-page-trabajos"
        />
      </main>
    </div>
  );
}

export default About;
