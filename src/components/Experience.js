import { motion } from "framer-motion";
import "../styles/Experience.css";

const Experience = () => {
  const experiences = [
    {
      company: "RideNext Software Solutions Private Limited",
      designation: "Software Engineer",
      duration: "July 2021 – Dec 2024",
      projects: [
        {
          title: "Probation Period",
          duration: "July 2021 – Dec 2021",
          client: "Internal Training",
        },
        {
          title: "Mint Payments Application",
          duration: "Jan 2022 – Aug 2023",
          client: "Mint Payments",
        },
        {
          title: "Equipment Maintenance System",
          duration: "Oct 2023 – Dec 2024",
          client: "Sumitomo Chemical",
        },
      ],
    },
  ];

  return (
    <section id="experience" className="experience-section">
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="background-image"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>

      <div className="experience-container">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="experience-title"
        >
          Experience
        </motion.h2>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="experience-card"
          >
            <h3 className="company-name">{exp.company}</h3>
            <p className="designation">{exp.designation}</p>
            <p className="duration">{exp.duration}</p>
            <div className="projects-grid">
              {exp.projects.map((project, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  className="project-item"
                >
                  <h4 className="project-title">{project.title}</h4>
                  <p className="project-client">{project.client}</p>
                  <p className="project-duration">{project.duration}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;