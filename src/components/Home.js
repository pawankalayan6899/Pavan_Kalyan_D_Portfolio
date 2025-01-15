import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "../styles/Home.css";


const Home = () => {
  return (
    <section id="home" className="home-section">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="home-content"
      >
        <h1 className="welcome-title">Welcome to My Portfolio</h1>
        <h2 className="name-title">Holla, I'm Pavan Kalyan D</h2>
        <TypeAnimation
          sequence={["Frontend Developer", 1000, "Web Developer", 1000, "UI Developer", 1000]}
          speed={50}
          className="type-animation"
          repeat={Infinity}
        />
        <p className="subtext">- Code, Debug, Fix & Repeat</p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="facebook">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="instagram">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="linkedin">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="github">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://wa.me/8073197069" target="_blank" rel="noopener noreferrer" className="whatsapp">
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          </a>
        </div>
        <br />
        <a href="/Pavan_Kalyan_D_Frontend_Developer.pdf" download className="download-cv-btn">
          <button className="button">Download CV</button>
        </a>
      </motion.div>
    </section>
  );
};

export default Home;