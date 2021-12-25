import React from "react";
import Typewriter from "typewriter-effect";
import "./styles/about.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

function About() {
  return (
    <div
      data-aos="fade-down"
      data-aos-delay="20"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      className="portfolio-block block-intro"
    >
      <div className="about-me">
        <img
          className="about-image"
          alt="About me"
          src="https://res.cloudinary.com/andreahabib/image/upload/v1629141375/236003965_6272724826086174_6549502244216007258_n_il6fe9.jpg"
        />
        <div className="column text">
          <h1>
            <strong>Hey! </strong>
            I'm Andrea Habib!
          </h1>
          <h3 className="text-muted">Based in NYC</h3>
          <span className="text-flag">
            <h3>GitHub Campus Expert</h3>
            <a
              title="github campus expert"
              href="https://githubcampus.expert/AndreaHabib/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt="github campus expert flag"
                src="https://img.icons8.com/color/48/000000/filled-flag.png"
              />
            </a>
          </span>
          <span className="text-flag">
            <h3>Microsoft LS Ambassador</h3>
            <a
              title="microsoft student ambassador"
              href="https://studentambassadors.microsoft.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt="star"
                src="https://img.icons8.com/fluency/48/000000/star.png"
              />
            </a>
          </span>
          <hr style={{ border: "1px solid #fa5679" }}></hr>
          <h5>
            Passionate, constantly learning and exploring new skills,
            technologies, and tech stacks.
          </h5>
          <h5 className="typewriter">
            <Typewriter
              className="typewriter"
              options={{
                strings: [
                  "Frontend",
                  "Backend",
                  "Object Oriented",
                  "Designing",
                  "Databases",
                  "Full Stack",
                  "Programming Languages",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </h5>
          <span className="icons">
            <a
              title="github"
              href="https://github.com/AndreaHabib"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a
              title="linkedin"
              href="https://www.linkedin.com/in/andrea-habib-730941198/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a
              title="resume"
              href="Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-file fa-2x"></i>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default About;
