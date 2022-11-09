import React from "react";
import profil from "../../../assets/images/profil.png";
import "./About.css";

const About = ({ reff }) => {
  return (
    <section
      ref={reff}
      id="about"
      className="py-5"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container">
        <h2 className="h1-responsive font-weight-bold text-center mb-5">
          About Me
        </h2>

        <div className="row">
          <div className="col-12 col-lg-4">
            <img className="d-block mx-auto mb-4" src={profil} alt="profil" />
          </div>
          <div className="col-lg-8">
            <p className="text-font text-justify">
              I am an engineering student in the fourth year of Information Technology
              at the United College Of Engineering And Research , Naini , Prayagraj , UP.
              <br /> Through my engineering studies, I acquired strong skills in
              the field of software engineering. The various projects and that I have carried out have enabled me to develop not
              only my hard skills but also my soft skills.
              <br /> Motivated, I know how to adapt, I have a sense of
              responsibility and organization.
              <br/>I have interest in problem solving and developing softwares.
              <br/> Happy Coding :)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;