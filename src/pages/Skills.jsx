import '../styles/Education.css';
import Nav from '../components/Nav'

function Skills() {
  return (
    <div>
        <Nav/>
        <main>
        <div className="title">Habilidades</div>
        <div className="sub-title">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, non!</div>
        <div className="divisor"></div>
        <div className="title">Lenguajes de programación</div>
          <div className="flex-wrap-about">
          <div className="cont-wrap">
              <img src="/icon-frontend.png" alt="" srcset="" />
              <div className="title-sub-title">
                <div className="cont-title">Front-end</div>
                <div className="cont-body">HTML, CSS, Javascript</div>
              </div>
            </div>
            <div className="cont-wrap">
              <img src="/icon-tool.png" alt="" srcset="" />
              <div className="title-sub-title">
                <div className="cont-title">Frameworks</div>
                <div className="cont-body">React, Tailwind.css</div>
              </div>
            </div>
            <div className="cont-wrap">
              <img src="/icon-backend.png" alt="" srcset="" />
              <div className="title-sub-title">
                <div className="cont-title">Back-end</div>
                <div className="cont-body">Node.js, Express.js, SQL</div>
              </div>
            </div>
            </div>
            <div className="divisor"></div>
            <div className="title">Herramientas</div>
          <div className="flex-wrap-about">
          <div className="cont-wrap">
              <img src="/icon-tool.png" alt="" srcset="" />
              <div className="title-sub-title">
                <div className="cont-title">IDE</div>
                <div className="cont-body">Visual Studio Code</div>
              </div>
            </div>
            <div className="cont-wrap">
              <img src="/icon-so.png" alt="" srcset="" />
              <div className="title-sub-title">
                <div className="cont-title">Sistemas Operativos</div>
                <div className="cont-body">Windows 10, Windows 11</div>
              </div>
            </div>
            <div className="cont-wrap">
              <img src="/icon-git.png" alt="" srcset="" />
              <div className="title-sub-title">
                <div className="cont-title">Versionado</div>
                <div className="cont-body">Git, Github</div>
              </div>
            </div>
            <div className="cont-wrap">
              <img src="/icon-tool.png" alt="" srcset="" />
              <div className="title-sub-title">
                <div className="cont-title">Otros programas</div>
                <div className="cont-body">Postman, Trello</div>
              </div>
            </div>
            </div>
            <div className="divisor"></div>
            <div className="title">Soft skills</div>
<div className="flex-wrap-about">
  <div className="cont-wrap">
    <img src="/icon-talk.png" alt="" />
    <div className="title-sub-title">
      <div className="cont-title">Comunicación</div>
      <div className="cont-body">Expreso ideas de manera clara y efectiva, facilitando la colaboración en equipo.</div>
    </div>
  </div>
  <div className="cont-wrap">
    <img src="/icon-group.png" alt="" />
    <div className="title-sub-title">
      <div className="cont-title">Trabajo en equipo</div>
      <div className="cont-body">Colaboro eficientemente, compartiendo conocimientos para lograr objetivos comunes.</div>
    </div>
  </div>
  <div className="cont-wrap">
    <img src="/icon-warning.png" alt="" />
    <div className="title-sub-title">
      <div className="cont-title">Resolución de problemas</div>
      <div className="cont-body">Enfrento desafíos complejos con un enfoque lógico y creativo.</div>
    </div>
  </div>
  <div className="cont-wrap">
    <img src="/icon-skill.png" alt="" />
    <div className="title-sub-title">
      <div className="cont-title">Adaptabilidad</div>
      <div className="cont-body">Me adapto rápidamente a nuevas tecnologías y cambios en el entorno laboral.</div>
    </div>
  </div>
</div>
        </main>
    </div>
  );
}

export default Skills;