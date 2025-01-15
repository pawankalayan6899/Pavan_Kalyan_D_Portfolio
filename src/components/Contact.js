import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="contact-title"
        >
          <h2>Contact Me</h2>
          <div className="title-underline"></div>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="contact-grid">
          {/* Left Column: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="contact-info"
          >
            <h3>Let's Connect</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <Mail className="icon" />
              </div>
              <div className="contact-info-text">
                <h4>Email</h4>
                <a href="mailto:your.email@example.com">pawankalyan6899@gmail.com</a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <Phone className="icon" />
              </div>
              <div className="contact-info-text">
                <h4>Phone</h4>
                <a href="tel:+1234567890">(+91) 8073197069</a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <MapPin className="icon" />
              </div>
              <div className="contact-info-text">
                <h4>Location</h4>
                <p>Bangalore, KA</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="contact-form"
          >
            <form>
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="form-input"
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="your.email@example.com"
                  className="form-input"
                />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Your message..."
                  className="form-textarea"
                ></textarea>
              </div>
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;