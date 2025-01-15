import { motion } from "framer-motion";
import img1 from "../assets/htmlnew.webp";
import img2 from "../assets/css.webp";
import img3 from "../assets/javascript.png";
import img4 from "../assets/react.png";
import img5 from "../assets/responsive.jpg";
import img6 from "../assets/github-logo.png";
import img7 from "../assets/fetch api.png";
import img8 from "../assets/problem solving.jpg";
import img9 from "../assets/debugging.png";
import "../styles/Skills.css";

const Skills = () => {
  const skills = [
    { src: img1, alt: "HTML" },
    { src: img2, alt: "CSS" },
    { src: img3, alt: "JavaScript" },
    { src: img4, alt: "React.js" },
    { src: img5, alt: "Responsive Design" },
    { src: img6, alt: "GitHub" },
    { src: img7, alt: "Fetch API" },
    { src: img8, alt: "Problem Solving" },
    { src: img9, alt: "Debugging" },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="skills-title"
        >
          Skills
        </motion.h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="skill-card"
            >
              <img src={skill.src} alt={skill.alt} className="skill-image" />
              <p className="skill-name">{skill.alt}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;