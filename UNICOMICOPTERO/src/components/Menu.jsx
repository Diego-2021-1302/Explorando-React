// src/components/Menu.jsx
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
      <div className="container">
          <img
            src="./Ghost.png"
            alt="Logo"
            className="me-3"
            width="30px"
            height=""
            style={{ objectFit: 'cover' }}
          />
        <Link className="navbar-brand fw-bold" to="/">UNICOMICOPTERO</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav gap-2">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sumadora">Sumadora</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/numero-a-letras">Traductor</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/multiplicacion">Tabla</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/experiencia">Experiencia</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
