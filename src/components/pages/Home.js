import React, { useEffect } from 'react';
import aos from 'aos';

function Home() {

  useEffect(() => {
    aos.init({
      duration: 1000
    });
  }, []);

  return (
    <section className="home">
      <div className="avatar" data-aos="fade-right">
        {/* Exemplo de imagem */}
        {/* <img src="/meu-avatar.jpg" alt="Foto de Márcio Leite" /> */}
      </div>

      <div className="about" data-aos="fade-left">
        <h1>Marcio Leite Dev</h1>
        <h3>Desenvolvedor FullStack</h3>
        <p>Atuando no mercado de desenvolvimento de aplicações Web desde 2003...</p>
        {/* ... (restante do seu texto) */}
        <a href='https://github.com/MarcioLeiteDev' target='_blank' rel="noopener noreferrer">
          <button className='buttonGit' data-aos="fade-down"> GitHub </button>
        </a>
        <a href='https://www.linkedin.com/in/marcio-leite-dev/' target='_blank' rel="noopener noreferrer">
          <button className='buttonGit' data-aos="fade-up"> Linkedin </button>
        </a>
      </div>
    </section>
  );
}

export default Home;
