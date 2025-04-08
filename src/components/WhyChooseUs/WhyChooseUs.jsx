import React from "react";
import w1 from "../../assets/images/w1.png";
import w2 from "../../assets/images/w2.png";
import w3 from "../../assets/images/w3.png";
import w4 from "../../assets/images/w4.png";

const WhyChooseUs = () => {
  return (
    <section className="why_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>
            Por que escolher <span>a gente</span>
          </h2>
        </div>

        <div className="why_container">
          <div className="box">
            <div className="img-box">
              <img src={w1} alt="Gestão Especializada" />
            </div>
            <div className="detail-box">
              <h5>Gestão Especializada</h5>
              <p>
                Incidunt odit rerum tenetur alias architecto asperiores omnis
                cumque doloribus aperiam numquam! Eligendi corrupti, molestias
                laborum dolores quod nisi vitae voluptate ipsa? In tempore
                voluptate ducimus officia id, aspernatur nihil. Tempore laborum
                nesciunt ut veniam, nemo officia ullam repudiandae repellat
                veritatis unde reiciendis possimus animi autem natus.
              </p>
            </div>
          </div>

          <div className="box">
            <div className="img-box">
              <img src={w2} alt="Investimento Seguro" />
            </div>
            <div className="detail-box">
              <h5>Investimento Seguro</h5>
              <p>
                Incidunt odit rerum tenetur alias architecto asperiores omnis
                cumque doloribus aperiam numquam! Eligendi corrupti, molestias
                laborum dolores quod nisi vitae voluptate ipsa? In tempore
                voluptate ducimus officia id, aspernatur nihil. Tempore laborum
                nesciunt ut veniam, nemo officia ullam repudiandae repellat
                veritatis unde reiciendis possimus animi autem natus.
              </p>
            </div>
          </div>

          <div className="box">
            <div className="img-box">
              <img src={w3} alt="Negociação Instantânea" />
            </div>
            <div className="detail-box">
              <h5>Negociação Instantânea</h5>
              <p>
                Incidunt odit rerum tenetur alias architecto asperiores omnis
                cumque doloribus aperiam numquam! Eligendi corrupti, molestias
                laborum dolores quod nisi vitae voluptate ipsa? In tempore
                voluptate ducimus officia id, aspernatur nihil. Tempore laborum
                nesciunt ut veniam, nemo officia ullam repudiandae repellat
                veritatis unde reiciendis possimus animi autem natus.
              </p>
            </div>
          </div>

          <div className="box">
            <div className="img-box">
              <img src={w4} alt="Clientes Satisfeitos" />
            </div>
            <div className="detail-box">
              <h5>Clientes Satisfeitos</h5>
              <p>
                Incidunt odit rerum tenetur alias architecto asperiores omnis
                cumque doloribus aperiam numquam! Eligendi corrupti, molestias
                laborum dolores quod nisi vitae voluptate ipsa? In tempore
                voluptate ducimus officia id, aspernatur nihil. Tempore laborum
                nesciunt ut veniam, nemo officia ullam repudiandae repellat
                veritatis unde reiciendis possimus animi autem natus.
              </p>
            </div>
          </div>
        </div>

        <div className="btn-box">
          <a href="#">Leia Mais</a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
