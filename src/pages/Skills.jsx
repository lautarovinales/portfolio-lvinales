import React from 'react';
import '../styles/About.css';
import Nav from '../components/Nav';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';
import InfoCard from '../components/InfoCard';
import Divider from '../components/Divider';
import FlexWrap from '../components/FlexWrap';

function Skills() {
  return (
    <div>
      <Nav />
      <main>
        <Title text="Habilidades" />
        <SubTitle text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, non!" />
        <Divider />
        <Title text="Lenguajes de programación" />
        <FlexWrap>
          <InfoCard iconSrc="/icon-frontend.png" title="Front-end" body="HTML, CSS, Javascript" />
          <InfoCard iconSrc="/icon-tool.png" title="Frameworks" body="React, Tailwind.css" />
          <InfoCard iconSrc="/icon-backend.png" title="Back-end" body="Node.js, Express.js, SQL" />
        </FlexWrap>
        <Divider />
        <Title text="Herramientas" />
        <FlexWrap>
          <InfoCard iconSrc="/icon-tool.png" title="IDE" body="Visual Studio Code" />
          <InfoCard iconSrc="/icon-so.png" title="Sistemas Operativos" body="Windows 10, Windows 11" />
          <InfoCard iconSrc="/icon-git.png" title="Versionado" body="Git, Github" />
          <InfoCard iconSrc="/icon-tool.png" title="Otros programas" body="Postman, Trello" />
        </FlexWrap>
        <Divider />
        <Title text="Soft skills" />
        <FlexWrap>
          <InfoCard iconSrc="/icon-talk.png" title="Comunicación" body="Expreso ideas de manera clara y efectiva, facilitando la colaboración en equipo." />
          <InfoCard iconSrc="/icon-group.png" title="Trabajo en equipo" body="Colaboro eficientemente, compartiendo conocimientos para lograr objetivos comunes." />
          <InfoCard iconSrc="/icon-warning.png" title="Resolución de problemas" body="Enfrento desafíos complejos con un enfoque lógico y creativo." />
          <InfoCard iconSrc="/icon-skill.png" title="Adaptabilidad" body="Me adapto rápidamente a nuevas tecnologías y cambios en el entorno laboral." />
        </FlexWrap>
      </main>
    </div>
  );
}

export default Skills;
