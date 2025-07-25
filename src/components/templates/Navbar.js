import { Link } from 'react-router-dom';
import { FaRegSmile, FaFileCode, FaGlasses, FaPhone } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <Link to="/" className="navbar-brand">
        <img src="/image/logotipo.png" width="100" alt="Logotipo" />
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Alternar navegação"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link linkagem">
              <FaRegSmile /> Sobre
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/certificados" className="nav-link linkagem">
              <FaFileCode /> Certificações
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio" className="nav-link linkagem">
              <FaGlasses /> Portfólio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/servicos" className="nav-link linkagem">
              <FaFileCode /> Serviços
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contato" className="nav-link linkagem">
              <FaPhone /> Contato
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
