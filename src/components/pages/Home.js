import React, { Component, useEffect } from 'react';

import aos from 'aos'

function Home(){

  useEffect(() =>{
    aos.init({
        duration: 1000
    })
  })


    return (

     

        <section className="home" >

            <div className="avatar" data-aos="fade-right">

            </div>

            <div className="about" data-aos="fade-left">
            <h1>Marcio Leite Dev</h1>
            <h3>Desenvolvedor FullStack</h3>
            <p>Atuando no mercado de desenvolvimento de aplicações Web desde 2006, além de adorar desafios 
                é apaixonado por tecnologia e fascinado por inovações e resultados.
            </p>
            <p>Iniciando com criação de sites padrão <b>HTML/CSS</b> em meados de 2006, veio a necessidade de
                criar aplicações para gerenciamento de estoque, controle de entradas e saidas, geração de contratos
                 (CRM) e  
                comecei estudar PHP e Mysql meados de 2008 para atender as necessidades dos clientes e parceiros na época. 
            </p>
            <p>Com experiência de desenvolvimentos de dezenas de projetos à nivel FullStack na linguagem
                PHP , me trouxe grande expertice para começar aprender as novas tecnologia que o mercado
                vem consumindo.
            </p>
            <p>Então em meados de 2020 comecei estudar tecnologias de <b>Javascript</b> tanto a nivel <b>back-end</b> como
                <b> front-end</b>, tais como NodeJs, Express ,  React .  </p>
                <p>Em 2021 tive un projeto que front-end necessitava ser em <b>Angular</b>, assim estudei documentação  Angular como React
                    para atender os projetos da atualidade.  </p>
                    <p>Acredito que nesse tempo aprendi que uma de minhas virtudes é ser auto didata, consigo ler e interpretar
                        as documentações dos frameworks , podendo assim aplicar nos projetos de forma que consiga resolver problemas :)
                    </p>
                    <p>
                        Busco parceria com agências, empresas, equipes de desenvolvedores, para ajudar na elaboração, manutenção,
                        correção e atualizações de futuros projetos. (trabalho de forma remota ou hibrida)
                        de acordo com as necessidades de cada projeto.
                    </p>

                   <a href='https://github.com/MarcioLeiteDev'> <button className='buttonGit' data-aos="fade-down"> GitHub </button> </a>
                   <a href='https://www.linkedin.com/in/marcio-leite-82a50a227/'>  <button className='buttonGit' data-aos="fade-up"> Linkedin </button> </a>

                    
            </div>  

         
       
        </section>
        
    )
} 

export default Home