import '../styles/Education.css';
import Nav from '../components/Nav'

function Education() {
  return (
    <div>
        <Nav/>
        <main>
        <div className="title">Educación</div>
          <div className="flex-wrap-about">
          <div className="cont-wrap">
              <img src="/icon-confetti.png" alt="" srcset="" />
              <div className="title-sub-title">
                <div className="cont-title">Técnico en Informatica</div>
                <div className="cont-body">Escuela técnica N°2 "Gral. Ing. Manuel N. Savio"</div>
              </div>
            </div>
            <div className="cont-wrap">
              <img src="/icon-confetti.png" alt="" srcset="" />
              <div className="title-sub-title">
                <div className="cont-title">Introducción a Desarrollo Web "Animate a Programar"</div>
                <div className="cont-body"><span className='href-site2'><a href="https://revoluciondigital.com.ar/">Revolución Digital</a></span></div>
              </div>
            </div>
            <div className="cont-wrap">
              <img src="/icon-confetti.png" alt="" srcset="" />
              <div className="title-sub-title">
                <div className="cont-title">Desarrollador Web FullStack</div>
                <div className="cont-body"><span className='href-site'><a href="https://www.digitalhouse.com/">Digital House</a></span></div>
              </div>
            </div>
            </div>
            <div className="divisor"></div>
            <div className="title">Documentos</div>
            <div className="flex-wrap-about">
          <div className="cont-wrap">
              <img src="/icon-document.png" alt="" srcset="" />
              <div className="title-sub-title">
                <div className="cont-title">Analitico completo Técnico Informatico</div>
                <div className="cont-body">Escuela técnica N°2 "Gral. Ing. Manuel N. Savio"</div>
                <div className="button-download">Descargar</div>
              </div>
            </div>
            <div className="cont-wrap">
              <img src="/icon-document.png" alt="" srcset="" />
              <div className="title-sub-title">
                <div className="cont-title">Diploma Desarrollador web FullStack</div>
                <div className="cont-body"><span className='href-site'><a href="https://www.digitalhouse.com/">Digital House</a></span></div>
                <div className="button-download">Descargar</div>
              </div>
            </div>
            </div>
        </main>
    </div>
  );
}

export default Education;