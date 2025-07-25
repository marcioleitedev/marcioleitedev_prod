import { FaWhatsapp } from "react-icons/fa";
import { FaGlobe } from 'react-icons/fa';
import { FaMobile} from 'react-icons/fa';
import { FaWhmcs } from 'react-icons/fa';

function Servicos() {
    return (

        <div className="servicos">

            <h1>Serviços </h1>

            <div className="grade">
                <div className="box" data-aos="fade-up">
                    <h2><FaGlobe /> Criação / Manutenção de Sites</h2>

                    <ul>
                        <li>Criação e Manutenção de Sites Institucional</li>
                        <li>Hospedagem e manutenção</li>
                    </ul>
                    <p>Comunique-se de forma eficiente com seus clientes e fornecedores, tenha um e-mail profissional, e mantenha presença online de sua empresa.</p>
                    <a href="https://wa.me/5511951562814"> <button> <FaWhatsapp /> Orçamento WhatsApp</button></a>
                </div>

                <div className="box" data-aos="fade-up">
                    <h2> <FaMobile /> Criação de Aplicativos</h2>

                    <ul>
                        <li>Criação de Sites Aplicativos</li>
                       
                    </ul>
                    <p>Tem uma idéia para criar um aplicativo para o seu negócio, conheça minhas soluções.</p>
                   <a href="https://wa.me/5511951562814"> <button> <FaWhatsapp /> Orçamento WhatsApp</button></a>
                </div>


                <div className="box" data-aos="fade-up">
                    <h2> <FaWhmcs /> Criação de Sitemas (CRM)</h2>

                    <ul>
                        <li>Criação de Sistemas (CRM)</li>
                       
                    </ul>
                    <p>Precisa de um sistema de gestão para seu negócio, tenho uma solução.</p>
                    <a href="https://wa.me/5511951562814"> <button> <FaWhatsapp /> Orçamento WhatsApp</button></a>
                </div>

                
                <div className="box" data-aos="fade-up">
                    <h2> <FaWhmcs /> Automações Web</h2>

                    <ul>
                        <li>Automações WhatsApp</li>
                        <li>Automações De Redes Sociais</li>
                        <li>Automações de Sistemas </li>
                       
                    </ul>
                    <p>Voce tem alguma rotina monotoma para executar, crie um robo que faz isso para você.</p>
                    <a href="https://wa.me/5511951562814"> <button> <FaWhatsapp /> Orçamento WhatsApp</button></a>
                </div>


            </div>
        </div>
    )
}

export default Servicos