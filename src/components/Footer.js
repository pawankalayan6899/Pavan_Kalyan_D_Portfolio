import { motion } from "framer-motion";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer-section">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="footer-container"
      >
        <p className="footer-text">&copy; 2023 My Portfolio. All Rights Reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;