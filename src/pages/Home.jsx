import {useEffect} from 'react';
import '../styles/Home.css';
import Nav from '../components/Nav'

function Home() {
  useEffect(() => {
    document.title = "Portolio | Inicio ";
  }, []);

  return (
    <div>
        <Nav/>
        <main>
          <header>
            <div className="img">
            </div>
            <div className="header-body">
              <div className="tags">
              <div className="tag">FullStack Web Developer</div>
              <div className="tag">Técnico Informatico</div>
              </div>
              <div className='title'>Hola, soy Lautaro Viñales</div>
              <div className="sub-title">Soy un apasionado desarrollador web full stack. Disfruto trabajar en equipo, aportar soluciones creativas y cumplir con mis responsabilidades de programación de manera efectiva. </div>
              <div className="buttons-header">
                <a href="/about"><div className="button-about">Sobre mi</div></a>
                <a href="/skills"><div className="button-contact">Habilidades</div></a>
              </div>
            </div>
          </header>
        </main>
    </div>
  );
}

export default Home;