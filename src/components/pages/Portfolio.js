import React, { useEffect } from 'react';

import aos from 'aos'

function Portfolio(){
    useEffect(() =>{
        aos.init({
            duration: 1000
        })
      })

    return (

        <section className="certificados">
        <h3>Portfólio</h3>
        <p>Um pouco sobre minha trajetória, contando projetos relevantes.</p>

        <div className="grade">

              <div className="box" data-aos="fade-up">
            <h2>Capital Consig</h2>
            <p><b>Atuação:</b> 02/2023  até 06/2025 </p>
            <p><b>Modalidade:</b> hibrido </p>
            <p>Programador Full Stack </p>
            <p>Atuando com demandas internas do banco atuando com as principais tecnologias </p>

            <p><span className="laranja">TECNOLOGIA UTILIZADA</span> </p>
            <p>Php , Laravel , Node.js , Python , Vue.js ,  Mysql, MariaDB , Apache , Nginx , Docker , Devops </p>
            <a href="#" target="blank"><button>Projetos Internos </button></a>
        </div>


        <div className="box" data-aos="fade-up">
            <h2>Sense Translate</h2>
            
            <p>Sistema PHP MVC OOP (Laravel) </p>
            <p><b>Atuação:</b> 02/2021   </p>
            <p><b>Modalidade:</b> remoto </p>
            <p>Area Administrativa com níveis de usuário</p>
            <p>Árvore geneológica em Javascript</p>
            <p>Criação de Robo para trabalhos rotineiros (web scrapping)</p>
            <p><span className="laranja">TECNOLOGIA UTILIZADA</span> </p>
            <p>Php , Laravel , Javascript , Jquery , Mysql, MariaDB , Python , Devops </p>
            <a href="https://www.sensetranslate.com" target="blank"><button>Visitar Projeto</button></a>
        </div>

        <div className="box" data-aos="fade-up">
            <h2>CRM - Rastreadores Protege</h2>
            <p><b>Atuação:</b> 04/2004  até 12/2012 </p>
            <p><b>Modalidade:</b> presencial </p>
            <p>Sistema PHP MVC OOP </p>
            <p>Area Administrativa com níveis de usuário</p>
            <p>CRM ( cadastro de clientes, fornecedores, controle de estoque, geração de contratos )</p>
            <p><span className="laranja">TECNOLOGIA UTILIZADA</span> </p>
            <p>Php , Javascript , Jquery , Mysql, MariaDB </p>
            <a href="#" target="blank"><button>Empresa Encerrada na Pandemia</button></a>
        </div>

        <div className="box" data-aos="fade-up">
            <h2>CRM - Rastreadores INSAT</h2>
             <p><b>Atuação:</b> 04/2004  até 12/2012 </p>
            <p><b>Modalidade:</b> hibrido </p>
            <p>Site Institucional PHP framework Laravel</p>
            <p>Sistema PHP MVC OOP </p>
            <p>Area Administrativa com níveis de usuário</p>
            <p>CRM ( cadastro de clientes, fornecedores, controle de estoque, geração de contratos )</p>
            <p><span className="laranja">TECNOLOGIA UTILIZADA</span> </p>
            <p>Php , Laravel ,  Javascript , Jquery , Mysql, MariaDB </p>
            <a href="https://www.rastreadoresinsat.com" target="blank"><button>Visitar Projeto</button></a>
        </div>

              
                <div className="box" data-aos="fade-up">
            <h2>Dflix Control</h2>
             <p><b>Atuação:</b> 07/2025   </p>
            <p><b>Modalidade:</b> Projeto Próprio </p>
            <p>Criação de Saas (sistema de assinatura) para gestão de auto-center</p>
            <p>ERP para cadastro de clientes, controle de estoque , geração orçamento, geração ordem serviço ,fluxo de caixa, emissão de nota fiscal, sistema completo para gestão de auto centers.</p>

            <p><span className="laranja">TECNOLOGIA UTILIZADA</span> </p>
            <p>Php , Laravel , Mysql, Vue.js ,   Nginx , Docker , Ubuntu ,  Devops </p>
            <a href="https://dflixcontrol.com.br" target="blank"><button>Projetos Internos </button></a>
        </div>

       
    

        </div>

        <p data-aos="fade-right">GitHub <a href="http://www.github.com/MarcioLeiteDev" target="blank">http://www.github.com/MarcioLeiteDev</a> </p>
        
        </section>
        
    )
}

export default Portfolio