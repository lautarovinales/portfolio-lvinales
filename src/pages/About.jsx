import '../styles/About.css';
import Nav from '../components/Nav'

function About() {
  return (
    <div>
        <Nav/>
        <main>
          <div className="title">Sobre mi</div>
          <div className="sub-title">Soy un apasionado desarrollador web Fullstack, graduado en <span className='href-site'><a href="https://www.digitalhouse.com/">Digital House</a></span>, actualmente resido en San Nicolás de los Arroyos, Buenos Aires, Argentina. Disfruto crear aplicaciones web, con un enfoque especial en el desarrollo frontend. Tengo experiencia trabajando con metodologías ágiles y he desarrollado proyectos que van desde simples landing pages hasta complejos e-commerces con bases de datos.</div>
          <div className="divisor"></div>
          <div className="title">Información útil</div>
          <div className="flex-wrap-about">
          <div className="cont-wrap">
              <img src="/icon-name.png" alt="" srcset="" />
              <div className="title-sub-title">
                <div className="cont-title">Nombre</div>
                <div className="cont-body">Lautaro Ramiro Viñales</div>
                <div className="cont-title">D.N.I</div>
                <div className="cont-body">42.593.603</div>
                <div className="cont-title">Edad</div>
                <div className="cont-body">23 años</div>
                <div className="cont-title">Género</div>
                <div className="cont-body">Masculino</div>
              </div>
            </div>
            <div className="cont-wrap">
              <img src="/icon-location.png" alt="" srcset="" />
              <div className="title-sub-title">
                <div className="cont-title">Localidad</div>
                <div className="cont-body"><span className='href-map'><a href="https://www.google.com/maps/place/San+Nicolás+de+los+Arroyos,+Buenos+Aires+Province/">San Nicolás de los Arroyos, Buenos Aires Argentina</a></span></div>
              </div>
            </div>
            <div className="cont-wrap">
              <img src="/icon-hearts.png" alt="" srcset="" />
              <div className="title-sub-title">
                <div className="cont-title">Estado civil</div>
                <div className="cont-body">Soltero</div>
              </div>
            </div>
            <div className="cont-wrap">
              <img src="/icon-language.png" alt="" srcset="" />
              <div className="title-sub-title">
                <div className="cont-title">Idiomas</div>
                <div className="cont-body">Español Nativo, Inglés intermedio</div>
              </div>
            </div>
          </div>
          <div className="divisor"></div>
          <div className="title">Objetivos</div>
          <div className="flex-wrap-about">
          <div className="cont-wrap">
              <img src="/icon-pin.png" alt="" srcset="" />
              <div className="title-sub-title">
                <div className="cont-title">Desarrollo profesional</div>
                <div className="cont-body">Quiero seguir creciendo como desarrollador web fullstack, aprendiendo las mejores prácticas tanto de backend como de frontend. Me interesa estar siempre al día con las últimas tecnologías y seguir capacitándome para ser un profesional más completo. Mi meta es poder crear soluciones innovadoras y aportar valor en cualquier proyecto en el que trabaje.</div>
              </div>
          </div>
          <div className="cont-wrap">
              <img src="/icon-pin.png" alt="" srcset="" />
              <div className="title-sub-title">
                <div className="cont-title">Colaborar con otros developers</div>
                <div className="cont-body">Me gustaría trabajar en equipo para aprender de otros profesionales, intercambiar ideas y llevar a cabo proyectos desafiantes juntos.</div>
              </div>
            </div>
          </div>
        </main>
    </div>
  );
}

export default About;
