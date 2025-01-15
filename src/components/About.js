import { motion } from "framer-motion";
import "../styles/AboutMe.css";

const AboutMe = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Heading with Framer Motion */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }} // Animation triggers only once
          className="about-title"
        >
          About Me {/* Directly display the text */}
        </motion.h2>

        {/* Paragraphs with Framer Motion */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }} // Animation triggers only once
          className="about-content"
        >
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="description"
          >
            As a Frontend Developer with 3.6 years of hands-on experience, I am passionate about building interactive and dynamic web applications. My goal is to leverage my technical expertise to contribute effectively to a forward-thinking team.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="description"
          >
            I have successfully developed and maintained responsive web applications utilizing ReactJS, HTML5, CSS3, and JavaScript, ensuring a seamless user experience across various devices.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="description"
          >
            My proficiency in state management solutions, particularly Redux, enables efficient data handling in large-scale applications, enhancing performance and reliability.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="description"
          >
            Collaborating closely with UI/UX designers is a key aspect of my workflow, allowing me to ensure that design concepts are seamlessly integrated into the final product, resulting in visually appealing and user-friendly applications.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
            className="description"
          >
            I am adept at utilizing RESTful APIs to fetch and manipulate data from backend services, which is crucial for delivering optimal performance and user satisfaction.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
            className="description"
          >
            My commitment to code quality is demonstrated through conducting thorough code reviews and providing constructive feedback to peers, fostering a culture of excellence within the development team.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            viewport={{ once: true }}
            className="description"
          >
            I actively participate in Agile/Scrum ceremonies, including sprint planning, daily stand-ups, and retrospectives, to ensure project alignment and timely delivery of high-quality products.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;