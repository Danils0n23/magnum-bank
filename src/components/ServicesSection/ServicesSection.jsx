import React from "react";
import ImgWallet from "../../assets/images/s1.png";
import ImgStorage from "../../assets/images/s2.png";
import ImgSupport from "../../assets/images/s3.png";

const ServicesSection = () => {
  return (
    <section className="service_section layout_padding">
      <div className="service_container">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              Nossos <span>Serviços</span>
            </h2>
            <p>
              Existem muitas variações de passagens do Lorem Ipsum disponíveis,
              mas a maioria sofreu alterações.
            </p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="box">
                <div className="img-box">
                  <img src={ImgWallet} alt="Carteira de Moeda" />
                </div>
                <div className="detail-box">
                  <h5>Carteira de Moeda</h5>
                  <p>
                    O fato de que um leitor se distrairá com o conteúdo legível
                    de uma página ao analisar seu layout. O objetivo de usar
                  </p>
                  <a href="">Leia Mais</a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="box">
                <div className="img-box">
                  <img src={ImgStorage} alt="Armazenamento Seguro" />
                </div>
                <div className="detail-box">
                  <h5>Armazenamento Seguro</h5>
                  <p>
                    O fato de que um leitor se distrairá com o conteúdo legível
                    de uma página ao analisar seu layout. O objetivo de usar
                  </p>
                  <a href="">Leia Mais</a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="box">
                <div className="img-box">
                  <img src={ImgSupport} alt="Suporte Especializado" />
                </div>
                <div className="detail-box">
                  <h5>Suporte Especializado</h5>
                  <p>
                    O fato de que um leitor se distrairá com o conteúdo legível
                    de uma página ao analisar seu layout. O objetivo de usar
                  </p>
                  <a href="">Leia Mais</a>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <a href="">Ver Todos</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
