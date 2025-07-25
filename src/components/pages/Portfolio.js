import React, { useEffect } from 'react';
import aos from 'aos';

function Portfolio() {
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="certificados">
      <h3>Portfólio</h3>
      <p>Um pouco sobre minha trajetória, contando projetos relevantes.</p>

      <div className="grade">

        {/* CAPITAL CONSIG */}
        <div className="box" data-aos="fade-up">
          <h2>Capital Consig</h2>
          <p><b>Atuação:</b> 02/2023 até 06/2025</p>
          <p><b>Modalidade:</b> híbrido</p>
          <p>Programador Full Stack</p>
          <p>Atuando com demandas internas do banco utilizando tecnologias modernas.</p>
          <p>API REST , Microserviços , Autenticação Keycloak </p>
          <p><span className="laranja">TECNOLOGIA UTILIZADA</span></p>
          <p>PHP, Laravel, Node.js, Python, Vue.js, MySQL, MariaDB, Apache, Nginx, Docker, DevOps</p>
          <button disabled>Projetos Internos</button>
        </div>

        {/* SENSE TRANSLATE */}
        <div className="box" data-aos="fade-up">
          <h2>Sense Translate</h2>
          <p>Sistema PHP MVC OOP (Laravel)</p>
          <p><b>Atuação:</b> 02/2021</p>
          <p><b>Modalidade:</b> remoto</p>
          <p>Área administrativa com níveis de usuário</p>
          <p>Árvore genealógica em JavaScript</p>
          <p>Criação de robô para web scraping</p>
          <p><span className="laranja">TECNOLOGIA UTILIZADA</span></p>
          <p>PHP, Laravel, JavaScript, jQuery, MySQL, MariaDB, Python, DevOps</p>
          <a
            href="https://www.sensetranslate.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Visitar Projeto</button>
          </a>
        </div>

        {/* RASTREADORES PROTEGE */}
        <div className="box" data-aos="fade-up">
          <h2>CRM - Rastreadores Protege</h2>
          <p><b>Atuação:</b> 04/2004 até 12/2012</p>
          <p><b>Modalidade:</b> presencial</p>
          <p>Sistema PHP MVC OOP</p>
          <p>Área administrativa com níveis de usuário</p>
          <p>CRM: cadastro de clientes, fornecedores, estoque, contratos</p>
          <p><span className="laranja">TECNOLOGIA UTILIZADA</span></p>
          <p>PHP, JavaScript, jQuery, MySQL, MariaDB</p>
          <button disabled>Empresa Encerrada na Pandemia</button>
        </div>

        {/* RASTREADORES INSAT */}
        <div className="box" data-aos="fade-up">
          <h2>CRM - Rastreadores INSAT</h2>
          <p><b>Atuação:</b> 04/2004 até 12/2012</p>
          <p><b>Modalidade:</b> híbrido</p>
          <p>Site Institucional com Laravel</p>
          <p>Sistema PHP MVC OOP</p>
          <p>Área administrativa com níveis de usuário</p>
          <p>CRM: cadastro de clientes, fornecedores, estoque, contratos</p>
          <p><span className="laranja">TECNOLOGIA UTILIZADA</span></p>
          <p>PHP, Laravel, JavaScript, jQuery, MySQL, MariaDB</p>
          <a
            href="https://www.rastreadoresinsat.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Visitar Projeto</button>
          </a>
        </div>

        {/* DFLIX CONTROL */}
        <div className="box" data-aos="fade-up">
          <h2>Dflix Control</h2>
          <p><b>Atuação:</b> 07/2025</p>
          <p><b>Modalidade:</b> Projeto Próprio</p>
          <p>SaaS para gestão de auto centers</p>
          <p>ERP: clientes, estoque, orçamentos, ordens de serviço, fluxo de caixa, NFe</p>
          <p><span className="laranja">TECNOLOGIA UTILIZADA</span></p>
          <p>PHP, Laravel, MySQL, Vue.js, Nginx, Docker, Ubuntu, DevOps</p>
          <a
            href="https://dflixcontrol.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Link do Projeto</button>
          </a>
        </div>

      </div>

      {/* LINK GITHUB */}
      <p data-aos="fade-right">
        GitHub:{' '}
        <a
          href="https://github.com/MarcioLeiteDev"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/MarcioLeiteDev
        </a>
      </p>
    </section>
  );
}

export default Portfolio;
