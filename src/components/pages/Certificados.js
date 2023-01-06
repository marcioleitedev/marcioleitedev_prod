import React, { Component, useEffect } from 'react';

import aos from 'aos'

function Certificados(){

    useEffect(() =>{
        aos.init({
            duration: 1000
        })
      })

    return(
        <section className="certificados">
        <h3>Certificados / Cursos</h3>
        <p>Segue grade curricular.</p>

        <div className="grade">

        <div className="box" data-aos="fade-right">
            <h2>PHP FullStack Development</h2>
            <p><span className="laranja">Carga Horária:</span> 200 Horas </p>
            <p>Sistema MVC OOP MYSQL</p>
            <p><span className="laranja">Inicio:</span> 01/11/2019</p>
            <p><span className="laranja">Conclusão:</span> 25/02/2021</p>
            <a href="diplomas/certificado-full-stack-php-developer.pdf" target="blank"><button>Diploma</button></a>
        </div>

        <div className="box" data-aos="fade-left">
            <h2>Git WorkFlow</h2>
            <p><span className="laranja">Carga Horária:</span> 15 Horas </p>
            <p>Git acesso e comandos</p>
            <p><span className="laranja">Inicio:</span> 11/11/2019</p>
            <p><span className="laranja">Conclusão:</span> 28/05/2021</p>
            <a href="diplomas/certificado-git-workflow.pdf" target="blank"><button>Diploma</button></a>
        </div>

        <div className="box" data-aos="fade-right">
            <h2>CSS Produtivo com Saas</h2>
            <p><span className="laranja">Carga Horária:</span> 10 Horas </p>
            <p>Css produtivo geração de CSS compactados para melhor desempenho de agilidade da aplicação</p>
            <p><span className="laranja">Inicio:</span> 25/05/2021</p>
            <p><span className="laranja">Conclusão:</span> 03/06/2021</p>
            <a href="diplomas/certificado-css-produtivo-com-sass.pdf" target="blank"><button>Diploma</button></a>
        </div>

        
        <div className="box" data-aos="fade-left">
            <h2>Composer na Prática</h2>
            <p><span className="laranja">Carga Horária:</span> 10 Horas </p>
            <p>Criação e consumo de bibliotecas PHP composer </p>
            <p><span className="laranja">Inicio:</span> 09/11/2019</p>
            <p><span className="laranja">Conclusão:</span> 29/05/2021</p>
            <a href="diplomas/certificado-css-produtivo-com-sass.pdf" target="blank"><button>Diploma</button></a>
        </div>

        
        
        <div className="box" data-aos="fade-right">
            <h2>Bootstrap Builder</h2>
            <p><span className="laranja">Carga Horária:</span> 25 Horas </p>
            <p>Criação de Templates utilizando biblioteca Bootstrap </p>
            <p><span className="laranja">Inicio:</span> 25/05/2021</p>
            <p><span className="laranja">Conclusão:</span> 18/06/2021</p>
            <a href="diplomas/certificado-bootstrap-builder.pdf" target="blank"><button>Diploma</button></a>
        </div>

                
        
        <div className="box" data-aos="fade-left">
            <h2>Jquey Essentials</h2>
            <p><span className="laranja">Carga Horária:</span> 35 Horas </p>
            <p>Utilizar Biblioteca Jquery para manipulação de DOM </p>
            <p><span className="laranja">Inicio:</span> 08/11/2019</p>
            <p><span className="laranja">Conclusão:</span> 25/05/2021</p>
            <a href="diplomas/certificado-jquery-essentials.pdf" target="blank"><button>Diploma</button></a>
        </div>

                
        <div className="box" data-aos="fade-right">
            <h2>MariaDB Essentials</h2>
            <p><span className="laranja">Carga Horária:</span> 30 Horas </p>
            <p>Banco de dados MariaDB </p>
            <p><span className="laranja">Inicio:</span> 25/05/2021</p>
            <p><span className="laranja">Conclusão:</span> 17/06/2021</p>
            <a href="diplomas/certificado-mariadb-essentials.pdf" target="blank"><button>Diploma</button></a>
        </div>

                        
        <div className="box" data-aos="fade-left">
            <h2>HTML5 CCS3 Essentials</h2>
            <p><span className="laranja">Carga Horária:</span> 45 Horas </p>
            <p>HTML5 CSS3 </p>
            <p><span className="laranja">Inicio:</span> 01/11/2019</p>
            <p><span className="laranja">Conclusão:</span> 01/05/2021</p>
            <a href="diplomas/certificado-html5-e-css3-essentials.pdf" target="blank"><button>Diploma</button></a>
        </div>

        <div className="box" data-aos="fade-right">
            <h2>PHP Orientado a Objetos</h2>
            <p><span className="laranja">Carga Horária:</span> 70 Horas </p>
            <p>PHP Orientado a Objetos</p>
            <p><span className="laranja">Inicio:</span> 22/06/2017</p>
            <p><span className="laranja">Conclusão:</span> 07/07/2017</p>
            <a href="diplomas/certificado-php-orientado-a-objetos.pdf" target="blank"><button>Diploma</button></a>
        </div>

        
        <div className="box" data-aos="fade-left">
            <h2>Ensino Médio</h2>
            <p><span className="laranja">Carga Horária:</span> -- Horas </p>
            <p>ENsino Médio</p>
            <p><span className="laranja">Inicio:</span> --/--/----</p>
            <p><span className="laranja">Conclusão:</span> 24/12/2022</p>
            <a href="diplomas/19857610846.pdf" target="blank"><button>Diploma</button></a>
        </div>
       
    

        </div>
        
        </section>
    )
}

export default Certificados