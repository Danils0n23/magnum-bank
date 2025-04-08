import React from "react";
import { motion } from "framer-motion";
import w1 from "../assets/images/w1.png";
import w2 from "../assets/images/w2.png";
import w3 from "../assets/images/w3.png";
import w4 from "../assets/images/w4.png";

const reasons = [
  {
    title: "Gestão Especializada",
    image: w1,
    alt: "Gestão Especializada",
  },
  {
    title: "Investimento Seguro",
    image: w2,
    alt: "Investimento Seguro",
  },
  {
    title: "Negociação Instantânea",
    image: w3,
    alt: "Negociação Instantânea",
  },
  {
    title: "Clientes Satisfeitos",
    image: w4,
    alt: "Clientes Satisfeitos",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.4, ease: "easeOut" },
  }),
};

const WhyChooseUs = () => {
  return (
    <motion.section
      className="why_section layout_padding"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container">
        <motion.div
          className="heading_container heading_center"
          variants={fadeUp}
          custom={0}
        >
          <h2>
            Por que escolher <span>a gente</span>
          </h2>
        </motion.div>

        <div className="why_container row">
          {reasons.map((reason, index) => (
            <motion.div
              className="box col-lg-6 col-md-6 mb-4"
              key={index}
              variants={fadeUp}
              custom={index + 1}
              whileHover={{ scale: 0.04 }}
            >
              <div className="img-box mb-3">
                <img src={reason.image} alt={reason.alt} />
              </div>
              <div className="detail-box">
                <h5>{reason.title}</h5>
                <p>
                  Incidunt odit rerum tenetur alias architecto asperiores omnis
                  cumque doloribus aperiam numquam! Eligendi corrupti, molestias
                  laborum dolores quod nisi vitae voluptate ipsa? In tempore
                  voluptate ducimus officia id, aspernatur nihil. Tempore
                  laborum nesciunt ut veniam, nemo officia ullam repudiandae
                  repellat veritatis unde reiciendis possimus animi autem natus.
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="btn-box mt-4"
          variants={fadeUp}
          custom={reasons.length + 1}
        >
          <a href="#">Leia Mais</a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;
