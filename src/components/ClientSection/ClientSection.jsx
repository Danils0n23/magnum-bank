import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // ✅ Importa o módulo de autoplay
import "swiper/css";

// Importe suas imagens
import client1 from "../../assets/images/client1.jpg";
import client2 from "../../assets/images/client2.jpg";

const testimonials = [
  {
    name: "LusDen",
    desc: "magna aliqua. Ut",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
    image: client1,
  },
  {
    name: "Zen Court",
    desc: "magna aliqua. Ut",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
    image: client2,
  },
  {
    name: "LusDen",
    desc: "magna aliqua. Ut",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
    image: client1,
  },
  {
    name: "Zen Court",
    desc: "magna aliqua. Ut",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
    image: client2,
  },
];

const ClientSection = () => {
  return (
    <section className="client_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center psudo_white_primary mb_45">
          <h2>
            O que dizem nossos <span>Clientes</span>
          </h2>
        </div>
        <div className="carousel-wrap">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }} // ✅ 5 segundos de intervalo
            modules={[Autoplay]} // ✅ Inclui o módulo Autoplay
          >
            {testimonials.map((client, index) => (
              <SwiperSlide key={index}>
                <div className="box">
                  <div className="img-box">
                    <img
                      src={client.image}
                      alt={client.name}
                      className="box-img"
                    />
                  </div>
                  <div className="detail-box">
                    <div className="client_id">
                      <div className="client_info">
                        <h6>{client.name}</h6>
                        <p>{client.desc}</p>
                      </div>
                      <FaQuoteLeft />
                    </div>
                    <p>{client.text}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
