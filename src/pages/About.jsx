import React from "react";
import { motion } from "framer-motion";
import "../assets/css/style.css";
import aboutImage from "../assets/images/about-img.png";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemFadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const About = () => {
  return (
    <motion.section
      className="about_section layout_padding"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container">
        <motion.div
          className="heading_container heading_center"
          variants={containerVariants}
        >
          <motion.h2 variants={itemFadeUp}>
            Sobre <span>Nós</span>
          </motion.h2>
          <motion.p variants={itemFadeUp}>
            Magni quod blanditiis non minus sed aut voluptatum illum quisquam
            aspernatur ullam vel beatae rerum ipsum voluptatibus
          </motion.p>
        </motion.div>

        <div className="row">
          <motion.div className="col-md-6" variants={itemFadeUp}>
            <div className="img-box">
              <motion.img
                src={aboutImage}
                alt="Equipe discutindo projeto"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>

          <motion.div className="col-md-6" variants={containerVariants}>
            <div className="detail-box">
              <motion.h3 variants={itemFadeUp}>Somos a Magnum Bank</motion.h3>
              <motion.p variants={itemFadeUp}>
                Existem muitas variações dos trechos do Lorem Ipsum disponíveis,
                mas a maioria sofreu algum tipo de alteração...
              </motion.p>
              <motion.p variants={itemFadeUp}>
                Moléstias, ódio, dores que não cessam, benefícios providos...
              </motion.p>
              <motion.a href="/about" className="btn" variants={itemFadeUp}>
                Leia Mais
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
