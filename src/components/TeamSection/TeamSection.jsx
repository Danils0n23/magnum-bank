import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

// Importando as imagens
import team1 from "../../assets/images/team-1.jpg";
import team2 from "../../assets/images/team-2.jpg";
import team3 from "../../assets/images/team-3.jpg";
import team4 from "../../assets/images/team-4.jpg";

const teamMembers = [
  {
    name: "Joseph Brown",
    role: "Marketing Head",
    image: team1,
  },
  {
    name: "Nancy White",
    role: "UI/UX Designer",
    image: team2,
  },
  {
    name: "Earl Martinez",
    role: "Frontend Developer",
    image: team3,
  },
  {
    name: "Josephine Allard",
    role: "Project Manager",
    image: team4,
  },
];

const TeamSection = () => {
  return (
    <section className="team_section layout_padding">
      <div className="container-fluid">
        <div className="heading_container heading_center">
          <h2>
            Nossa <span> Equipe!</span>
          </h2>
        </div>

        <div className="team_container">
          <div className="row">
            {teamMembers.map((member, index) => (
              <div className="col-lg-3 col-sm-6" key={index}>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
