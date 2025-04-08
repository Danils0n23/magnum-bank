import React from "react";
import { Carousel } from "react-bootstrap";
import sliderImage from "../../assets/images/slider-red.png";

const sliderContent = [
  {
    title: "Cripto\nMoeda",
    description:
      "Entenda o que são as criptomoedas, como funcionam e o impacto delas no cenário financeiro atual.",
  },
  {
    title: "Blockchain\nSeguro",
    description:
      "Descubra como a tecnologia blockchain garante a segurança e a transparência das transações digitais.",
  },
  {
    title: "Investimento\nDigital",
    description:
      "Explore as oportunidades e riscos ao investir em ativos digitais como tokens e NFTs.",
  },
];

const SliderSection = () => {
  return (
    <section className="slider_section">
      <div id="customCarousel1" className="carousel slide">
        <Carousel>
          {sliderContent.map((item, index) => (
            <Carousel.Item key={index}>
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="detail-box">
                      <h1>
                        {item.title.split("\n").map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                      </h1>
                      <p>{item.description}</p>
                      <div className="btn-box">
                        <a href="#" className="btn1">
                          Saiba Mais
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="img-box">
                      <img src={sliderImage} alt="Imagem do Slider" />
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default SliderSection;
