import { FaPhp } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { FaMdb } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaNpm } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { FaDev } from "react-icons/fa";


function Footer(){
    return(
        <footer className="footer">
            <p className="org">Todos direitos reservados &copy;- <b>Marcio Leite Dev</b>  - 2022</p>
            <p className="org">Projetos orgulhosamente desenvolvidos com as tecnologias</p>
            <div className="icons">
            <FaHtml5/> <FaCss3/>    <FaReact/> <FaAngular/> <FaBootstrap/>
            </div>
            <div className="icons">
             <FaNodeJs/>  <FaNode/>  <FaNpm/> <FaJs/>
            </div>
            <div className="icons">
            <FaPhp/> <FaLaravel/> <FaGit/>   
            </div>
            <div className="icons">
             <FaPython/> <FaMdb/>
            </div>
            <div className="icons">
                <FaDev />
            </div>
        </footer>
    )
}

export default Footer