import React, { useEffect } from 'react';
import '../styles/About.css';
import Nav from '../components/Nav';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';
import InfoCard from '../components/InfoCard';
import Divider from '../components/Divider';
import FlexWrap from '../components/FlexWrap';

function About() {
  useEffect(() => {
    document.title = "Portolio | Sobre mí";
  }, []);

  return (
    <div>
      <Nav />
      <main>
        <Title text="Sobre mí" />
        <SubTitle 
          text={
            <>
              Soy un apasionado desarrollador web Fullstack, graduado en{" "}
              <span className="href-site">
                <a href="https://www.digitalhouse.com/">Digital House</a>
              </span>
              , actualmente resido en San Nicolás de los Arroyos, Buenos Aires, Argentina. Disfruto crear aplicaciones web, con un enfoque especial en el desarrollo frontend. Tengo experiencia trabajando con metodologías ágiles y he desarrollado proyectos que van desde simples landing pages hasta complejos e-commerces con bases de datos.
            </>
          } 
        />
        <Divider />
        <Title text="Información útil" />
        <FlexWrap>
          <InfoCard iconSrc="/icon-name.png" title="Nombre" body="Lautaro Ramiro Viñales" />
          <InfoCard 
            iconSrc="/icon-location.png" 
            title="Localidad" 
            body={
              <span className="href-map">
                <a href="https://www.google.com/maps/place/San+Nicolás+de+los+Arroyos,+Buenos+Aires+Province/">
                  San Nicolás de los Arroyos, Buenos Aires Argentina
                </a>
              </span>
            } 
          />
          <InfoCard iconSrc="/icon-hearts.png" title="Estado civil" body="Soltero" />
          <InfoCard iconSrc="/icon-language.png" title="Idiomas" body="Español Nativo, Inglés intermedio" />
        </FlexWrap>
        <Divider />
        <Title text="Objetivos" />
        <FlexWrap>
          <InfoCard 
            iconSrc="/icon-pin.png" 
            title="Desarrollo profesional" 
            body="Quiero seguir creciendo como desarrollador web fullstack, aprendiendo las mejores prácticas tanto de backend como de frontend. Me interesa estar siempre al día con las últimas tecnologías y seguir capacitándome para ser un profesional más completo. Mi meta es poder crear soluciones innovadoras y aportar valor en cualquier proyecto en el que trabaje." 
          />
          <InfoCard 
            iconSrc="/icon-pin.png" 
            title="Colaborar con otros developers" 
            body="Me gustaría trabajar en equipo para aprender de otros profesionales, intercambiar ideas y llevar a cabo proyectos desafiantes juntos." 
          />
        </FlexWrap>
      </main>
    </div>
  );
}

export default About;
