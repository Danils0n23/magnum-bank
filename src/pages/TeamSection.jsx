import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import team1 from "../assets/images/team-1.jpg";
import team2 from "../assets/images/team-2.jpg";
import team3 from "../assets/images/team-3.jpg";
import team4 from "../assets/images/team-4.jpg";

const teamMembers = [
  { name: "Joseph Brown", role: "Marketing Head", image: team1 },
  { name: "Nancy White", role: "UI/UX Designer", image: team2 },
  { name: "Earl Martinez", role: "Frontend Developer", image: team3 },
  { name: "Josephine Allard", role: "Project Manager", image: team4 },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const TeamSection = () => {
  return (
    <motion.section
      className="team_section layout_padding"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container-fluid">
        <motion.div
          className="heading_container heading_center"
          variants={fadeInUp}
        >
          <h2>
            Nossa <span>Equipe!</span>
          </h2>
        </motion.div>

        <motion.div className="team_container" variants={containerVariants}>
          <div className="row">
            {teamMembers.map((member, index) => (
              <motion.div
                className="col-lg-3 col-sm-6"
                key={index}
                variants={fadeInUp}
                whileHover={{
                  y: -10,
                  boxShadow: "0px 8px 24px rgba(0,0,0,0.15)",
                }}
              >
                <div className="box">
                  <div className="img-box">
                    <img
                      src={member.image}
                      className="img1"
                      alt={member.name}
                    />
                  </div>
                  <div className="detail-box">
                    <h5>{member.name}</h5>
                    <p>{member.role}</p>
                  </div>
                  <div className="social_box">
                    <a href="#">
                      <FaFacebookF />
                    </a>
                    <a href="#">
                      <FaTwitter />
                    </a>
                    <a href="#">
                      <FaLinkedinIn />
                    </a>
                    <a href="#">
                      <FaInstagram />
                    </a>
                    <a href="#">
                      <FaYoutube />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TeamSection;
