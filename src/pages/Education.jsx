import React from 'react';
import '../styles/About.css';
import Nav from '../components/Nav';
import Title from '../components/Title';
import InfoCard from '../components/InfoCard';
import Divider from '../components/Divider';
import FlexWrap from '../components/FlexWrap';

function Education() {
  return (
    <div>
      <Nav />
      <main>
        <Title text="Educación" />
        <FlexWrap>
          <InfoCard iconSrc="/icon-confetti.png" title="Técnico en Informatica" body='Escuela técnica N°2 "Gral. Ing. Manuel N. Savio"' />
          <InfoCard iconSrc="/icon-confetti.png" title='Introducción a Desarrollo Web "Animate a Programar"' body='<span className="href-site2"><a href="https://revoluciondigital.com.ar/">Revolución Digital</a></span>' />
          <InfoCard iconSrc="/icon-confetti.png" title="Desarrollador Web FullStack" body='<span className="href-site"><a href="https://www.digitalhouse.com/">Digital House</a></span>' />
        </FlexWrap>
        <Divider />
        <Title text="Documentos" />
        <FlexWrap>
          <InfoCard iconSrc="/icon-document.png" title="Analitico completo Técnico Informatico" body='Escuela técnica N°2 "Gral. Ing. Manuel N. Savio" <div className="button-download">Descargar</div>' />
          <InfoCard iconSrc="/icon-document.png" title="Diploma Desarrollador web FullStack" body='<span className="href-site"><a href="https://www.digitalhouse.com/">Digital House</a></span> <div className="button-download">Descargar</div>' />
        </FlexWrap>
      </main>
    </div>
  );
}

export default Education;
