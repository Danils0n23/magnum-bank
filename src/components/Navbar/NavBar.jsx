import React from "react";
import { FaUser, FaSearch } from "react-icons/fa";
import Logo from "../../../public/magnum.png";

const Navbar = () => {
  return (
    <header className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container">
          <a className="navbar-brand" href="/">
            <img src={Logo} alt="Logo Magnum Bank" style={{ height: "40px" }} />
            <span>Magnum Bank</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Alternar navegação"
          >
            <span className=""></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Início
                  <span className="sr-only"></span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  Sobre
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/services">
                  Serviços
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/why">
                  Por que nós?
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/team">
                  Equipe
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  <FaUser /> Entrar
                </a>
              </li>
            </ul>

            <form className="d-flex" role="search">
              <button className="btn nav_search-btn" type="submit">
                <FaSearch />
              </button>
            </form>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
