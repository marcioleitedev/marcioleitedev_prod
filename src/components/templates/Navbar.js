import {Link} from 'react-router-dom'

import { FaRegSmile } from "react-icons/fa";
import { FaFileCode } from "react-icons/fa";
import { FaGlasses } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";





function Navbar(){
    return(

        <div>
        <nav className="navbar navbar-expand-lg navbar-dark ">
  <a className="navbar-brand" ><Link to="/">
    <img src="/image/logotipo.png" width="100" />
     </Link></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
       <Link to="/"> <span className='linkagem'><FaRegSmile/> Sobre</span> </Link>
      </li>
      <li className="nav-item">
         <Link to="/certificados"> <span className='linkagem'><FaFileCode/> Certificações</span></Link>
      </li>
      <li className="nav-item">
        <Link to="/portfolio">  <span className='linkagem'><FaGlasses/> Portfólio</span> </Link>
      </li>
      <li className="nav-item">
        <Link to="/servicos">  <span className='linkagem'><FaFileCode/> Serviços</span> </Link>
      </li>
      <li className="nav-item">
       <Link to="/contato"><span className='linkagem'><FaPhone/> Contato</span> </Link>
      </li>
     
    </ul>
  </div>
</nav>
        </div>
    )
}

export default Navbar