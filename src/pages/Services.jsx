import React from "react";
import { motion } from "framer-motion";
import "../assets/css/style.css";
import ImgWallet from "../assets/images/s1.png";
import ImgStorage from "../assets/images/s2.png";
import ImgSupport from "../assets/images/s3.png";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Services = () => {
  return (
    <motion.section
      className="service_section layout_padding"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="service_container">
        <div className="container">
          <motion.div
            className="heading_container heading_center"
            variants={fadeUp}
          >
            <h2>
              Nossos <span>Serviços</span>
            </h2>
            <p>
              Existem muitas variações de passagens do Lorem Ipsum disponíveis,
              mas a maioria sofreu alterações.
            </p>
          </motion.div>

          <motion.div className="row" variants={containerVariants}>
            {[
              {
                img: ImgWallet,
                title: "Carteira de Moeda",
                desc: "O fato de que um leitor se distrairá com o conteúdo legível de uma página ao analisar seu layout. O objetivo de usar",
              },
              {
                img: ImgStorage,
                title: "Armazenamento Seguro",
                desc: "O fato de que um leitor se distrairá com o conteúdo legível de uma página ao analisar seu layout. O objetivo de usar",
              },
              {
                img: ImgSupport,
                title: "Suporte Especializado",
                desc: "O fato de que um leitor se distrairá com o conteúdo legível de uma página ao analisar seu layout. O objetivo de usar",
              },
            ].map((service, index) => (
              <motion.div className="col-md-4" key={index} variants={fadeUp}>
                <div className="box">
                  <div className="img-box">
                    <img src={service.img} alt={service.title} />
                  </div>
                  <div className="detail-box">
                    <h5>{service.title}</h5>
                    <p>{service.desc}</p>
                    <a href="#">Leia Mais</a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="btn-box" variants={fadeUp}>
            <a href="#">Ver Todos</a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
