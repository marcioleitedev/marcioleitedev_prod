import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

import React, { Component, useEffect } from 'react';

import aos from 'aos'



function Contato(){
    useEffect(() =>{
        aos.init({
            duration: 1000
        })
      })
    return(
        <section className="contato" data-aos="fade-up">
        <h1>Contato</h1>
        <p><span className="laranja"><FaWhatsapp/>WhatsApp :</span> 55 + (11)94858-3294</p>
        <p><span className="laranja"><FaMailBulk />E-mail:</span> contato@marcioleitedev.com.br</p>
        <p><span className="laranja"><FaGithub/>GitHub:</span> https://github.com/MarcioLeiteDev/</p>
        <p><span className="laranja"><FaLinkedin/> LinkedIn:</span> https://www.linkedin.com/in/marcio-leite-a231b550/</p>

        </section>
    )
}

export default Contato