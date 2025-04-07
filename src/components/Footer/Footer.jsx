import React from "react";

import {
  FaMapMarker,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section className="info_section layout_padding2">
      <div className="container">
        <div className="row">
          {/* Informações de Contato */}
          <div className="col-md-6 col-lg-3 info_col">
            <div className="info_contact">
              <h4>Endereço</h4>
              <div className="contact_link_box">
                <a href="#">
                  <FaMapMarker />
                  <span>Localização</span>
                </a>
                <a href="#">
                  <FaPhone />
                  <span>Ligue +01 1234567890</span>
                </a>
                <a href="#">
                  <FaEnvelope />
                  <span>demo@gmail.com</span>
                </a>
              </div>
            </div>
            <div className="info_social">
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Detalhes */}
          <div className="col-md-6 col-lg-3 info_col">
            <div className="info_detail">
              <h4>Informações</h4>
              <p>
                Necessário, tornando-se o primeiro gerador real da Internet. Ele
                utiliza um dicionário com mais de 200 palavras latinas,
                combinado com alguns termos.
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="col-md-6 col-lg-2 mx-auto info_col">
            <div className="info_link_box">
              <h4>Links</h4>
              <div className="info_links">
                <a className="active" href="index.html">
                  Início
                </a>
                <a href="about.html">Sobre</a>
                <a href="service.html">Serviços</a>
                <a href="why.html">Por que nós</a>
                <a href="team.html">Equipe</a>
              </div>
            </div>
          </div>

          {/* Inscrição */}
          <div className="col-md-6 col-lg-3 info_col">
            <h4>Inscreva-se</h4>
            <form action="#">
              <input type="text" placeholder="Digite seu e-mail" />
              <button type="submit">Inscrever</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
