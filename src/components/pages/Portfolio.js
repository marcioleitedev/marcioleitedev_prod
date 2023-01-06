import React, { Component, useEffect } from 'react';

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
        <p>Alguns dos projetos ainda em produção.</p>

        <div className="grade">

        <div className="box" data-aos="fade-up">
            <h2>Sense Translate</h2>
            
            <p>Sistema PHP MVC OOP </p>
            <p>Area Administrativa com níveis de usuário</p>
            <p>Árvore geneológica em Javascript</p>
            <p><span className="laranja">TECNOLOGIA UTILIZADA</span> </p>
            <p>Php , Javascript , Jquery , Mysql, MariaDB </p>
            <a href="https://www.sensetranslate.com" target="blank"><button>Visitar Projeto</button></a>
        </div>

        <div className="box" data-aos="fade-up">
            <h2>CRM - Rastreadores Protege</h2>
            
            <p>Sistema PHP MVC OOP </p>
            <p>Area Administrativa com níveis de usuário</p>
            <p>CRM ( cadastro de clientes, fornecedores, controle de estoque, geração de contratos )</p>
            <p><span className="laranja">TECNOLOGIA UTILIZADA</span> </p>
            <p>Php , Javascript , Jquery , Mysql, MariaDB </p>
            <a href="https://www.rastreadoresprotege.com.br/escritorio" target="blank"><button>Visitar Projeto</button></a>
        </div>

        <div className="box" data-aos="fade-up">
            <h2>CRM - Rastreadores INSAT</h2>
            <p>Site Institucional PHP framework Laravel</p>
            <p>Sistema PHP MVC OOP </p>
            <p>Area Administrativa com níveis de usuário</p>
            <p>CRM ( cadastro de clientes, fornecedores, controle de estoque, geração de contratos )</p>
            <p><span className="laranja">TECNOLOGIA UTILIZADA</span> </p>
            <p>Php , Laravel ,  Javascript , Jquery , Mysql, MariaDB </p>
            <a href="https://www.rastreadoresinsat.com" target="blank"><button>Visitar Projeto</button></a>
        </div>

                <div className="box" data-aos="fade-up">
            <h2>Digital Print - WordPress</h2>
            
            <p>Site institucional em WordPress </p>

            <p><span className="laranja">TECNOLOGIA UTILIZADA</span> </p>
            <p>Php , WordPress , Mysql, MariaDB </p>
            <a href="https://www.digitalprintetiquetas.com.br" target="blank"><button>Visitar Projeto</button></a>
        </div>

       
    

        </div>

        <p data-aos="fade-right">GitHub <a href="http://www.github.com/MarcioLeiteDev" target="blank">http://www.github.com/MarcioLeiteDev</a> </p>
        
        </section>
        
    )
}

export default Portfolio