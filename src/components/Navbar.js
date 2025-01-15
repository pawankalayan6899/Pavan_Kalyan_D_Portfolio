import { motion } from "framer-motion";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="logo"
      >
        <h1>Portfolio</h1>
      </motion.div>

      {/* Nav Links */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="nav-links"
      >
        <a href="#home" className="nav-link">
          Home
        </a>
        <a href="#about" className="nav-link">
          About Me
        </a>
        <a href="#skills" className="nav-link">
          Skills
        </a>
        <a href="#projects" className="nav-link">
          Projects
        </a>
        <a href="#experience" className="nav-link">
          Experience
        </a>
        <a href="#contact" className="nav-link">
          Contact Me
        </a>
      </motion.div>
    </nav>
  );
};

export default Navbar;