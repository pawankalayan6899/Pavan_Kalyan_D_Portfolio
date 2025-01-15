import { motion } from "framer-motion";
import "../styles/Projects.css";

const Projects = () => {
  const projects = [
    {
        title: <span style={{ color: 'gold' }}>Title: Equipment Maintenance System</span>,
        client: <span style={{ color: 'gold' }}>Client: Sumitomo Chemical</span>,
      skills: " Skills : ReactJS, Redux, Axios, RESTful APIs, HTML5, CSS3",
      description: [
        "Designed and implemented the Equipment Maintenance System, providing a user-friendly interface for technicians to access equipment information and maintenance requirements.",
        "Utilized Redux to manage application state efficiently, ensuring smooth data handling and improving performance in large-scale applications.",
        "Collaborated with designers to translate design concepts into a cohesive product, streamlining design integration and increasing user engagement by 25% while reducing bounce rates by 15% within three months.",
        "Employed RESTful APIs to fetch and manipulate data from backend services, ensuring optimal performance and providing real-time data updates for users.",
        "Performed thorough code reviews and provided constructive feedback to team members, maintaining high standards of code quality and consistency across the project.",
        "Leveraged ReactJS, React Router, Axios, HTML5, and CSS3 to build a responsive and efficient frontend, ensuring the application is accessible and functional across various devices.",
      ],
    },
    {
        title: <span style={{ color: 'gold' }}>Title: Mint Payments Application</span>,
        client: <span style={{ color: 'gold' }}>Client: Mint Payments</span>,
      skills: "Skills : React.js, JavaScript, HTML5, CSS3",
      description: [
        "Coordinated closely with the Team Lead to gather and analyze requirements, ensuring alignment with project goals.",
        "Developed user interfaces for both mobile platforms, ensuring a consistent and responsive user experience.",
        "Created the frontend of the web application based on design comps and information architecture, ensuring accurate implementation of the design vision.",
        "Integrated the frontend with the application’s business layer, ensuring seamless communication between frontend and backend.",
        "Developed frontend applications focusing on best web and app-design practices, particularly for the healthcare industry.",
        "Performed closely with UI and database development professionals to create a dynamic and functional user experience.",
        "Facilitated team development meetings, actively listening to include all client-required website features and ensuring effective communication within the team.",
        "Troubleshot and resolved issues, maintaining website functionality and ensuring compatibility across platforms.",
        "Updated software to ensure full functional compatibility, keeping the application up-to-date with the latest standards and technologies.",
        "Leveraged React.js, JavaScript, HTML5, and CSS3 to build a responsive and efficient frontend, ensuring the application is accessible and functional across various devices.",
      ],
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="projects-title"
        >
          Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="project-card"
            >
              <h3 className="project-title">{project.title}</h3>
              <p className="project-client">{project.client}</p>
              <p className="project-skills">{project.skills}</p>

              {/* Always use <ul> for the description */}
              <ul className="project-description">
                {project.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;