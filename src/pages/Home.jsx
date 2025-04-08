import React from "react";
import { motion } from "framer-motion";
import "../assets/css/style.css";
import SliderSection from "../components/SliderSection/SliderSection";
import heroBg from "../../public/bank.png";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import AboutSection from "../components/AboutSection/AboutSection";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import TeamSection from "../components/TeamSection/TeamSection";
import ClientSection from "../components/ClientSection/ClientSection";

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.2,
      ease: "easeOut",
    },
  }),
};

const Home = () => {
  return (
    <div>
      <div className="hero_area">
        <div className="hero_bg_box">
          <div className="bg_img_box">
            <img src={heroBg} alt="Logo Magnum Bank" />
          </div>
        </div>
        <SliderSection />
      </div>
      {[
        ServicesSection,
        AboutSection,
        WhyChooseUs,
        TeamSection,
        ClientSection,
      ].map((Component, index) => (
        <motion.div
          key={index}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <Component />
        </motion.div>
      ))}
    </div>
  );
};

export default Home;
