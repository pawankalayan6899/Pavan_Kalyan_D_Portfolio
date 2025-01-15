import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    // Toggle mobile menu visibility
    mobileMenuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });

    // Hide mobile menu when a nav-link is clicked
    const navLinksList = document.querySelectorAll(".nav-link");
    navLinksList.forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
          navLinks.classList.remove("show");
          setIsMobileMenuOpen(false); // Update state to close the menu
        }
      });
    });

    // Hide mobile menu when clicking outside
    document.addEventListener("click", (event) => {
      if (
        !event.target.closest(".mobile-menu-toggle") &&
        !event.target.closest(".nav-links")
      ) {
        navLinks.classList.remove("show");
        setIsMobileMenuOpen(false); // Update state to close the menu
      }
    });

    // Cleanup event listeners on component unmount
    return () => {
      mobileMenuToggle.removeEventListener("click", () => {
        navLinks.classList.toggle("show");
      });

      navLinksList.forEach((link) => {
        link.removeEventListener("click", () => {
          if (window.innerWidth <= 768) {
            navLinks.classList.remove("show");
            setIsMobileMenuOpen(false);
          }
        });
      });

      document.removeEventListener("click", (event) => {
        if (
          !event.target.closest(".mobile-menu-toggle") &&
          !event.target.closest(".nav-links")
        ) {
          navLinks.classList.remove("show");
          setIsMobileMenuOpen(false);
        }
      });
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <nav className="navbar">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Add your logo or brand name here */}
      </motion.div>

      {/* Mobile Menu Toggle */}
      <button
        className={`mobile-menu-toggle ${isMobileMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Nav Links */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`nav-links ${isMobileMenuOpen ? "show" : ""}`}
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