import React from "react";
import aboutImg from "../../assets/images/about-img.png";

const AboutSection = () => {
  return (
    <section className="about_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>
            Sobre <span>Nós</span>
          </h2>
          <p>
            Magni quod blanditiis non minus sed aut voluptatum illum quisquam
            aspernatur ullam vel beatae rerum ipsum voluptatibus
          </p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="img-box">
              <img src={aboutImg} alt="Sobre nós" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="detail-box">
              <h3>Somos o Magnum Bank</h3>
              <p>
                Existem muitas variações de passagens de Lorem Ipsum
                disponíveis, mas a maioria sofreu algum tipo de alteração, seja
                por inserção de humor ou palavras aleatórias que não parecem nem
                um pouco reais. Se você pretende usar um trecho de Lorem Ipsum,
                é importante garantir que não haja nada embaraçoso escondido no
                meio do texto.
              </p>
              <p>
                Molestiae odio earum non qui cumque provident voluptates,
                repellendus exercitationem, possimus at iste corrupti officiis
                unde alias eius ducimus reiciendis soluta eveniet. Nobis ullam
                ab omnis quasi expedita.
              </p>
              <a href="#">Leia Mais</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
