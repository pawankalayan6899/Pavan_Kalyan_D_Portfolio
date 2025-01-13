import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './App.css';


import logo from './assets/wmremove-transformed.jpeg';
import img1 from './assets/htmlnew.webp';
import img2 from './assets/css.webp';
import img3 from './assets/javascript.png';
import img4 from './assets/react.png';
import img5 from './assets/responsive.jpg';
import img6 from './assets/github-logo.png';
import img7 from './assets/fetch api.png';
import img8 from './assets/problem solving.jpg';
import img9 from './assets/debugging.png';

export default function App() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu visibility

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log('Form submitted:', formData);
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle mobile menu state
    };

    return (
        <>
            <nav className="navbar">
    <img src={logo} alt="Logo" className="logo" />
    <button className="mobile-menu-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
    </button>
    <div className={`nav-links ${isMobileMenuOpen ? 'show' : ''}`}>
        <a href="#home" className="nav-link">Home</a>
        <a href="#about" className="nav-link">About Me</a>
        <a href="#skills" className="nav-link">Skills</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#experience" className="nav-link">Experience</a>
        <a href="#contact" className="nav-link">Contact Me</a>
    </div>
</nav>

            <div className="main-content">
                <section id="home" className="section">
                    <div className="welcome-message">
                        <h1 className="welcome-title">Welcome to My Portfolio</h1>
                        <h2 className="name-title">Holla, I'm Pavan Kalyan D</h2>
                        <TypeAnimation
                            sequence={['Frontend Developer', 1000, 'Web Developer', 1000, 'UI Developer', 1000]}
                            speed={50}
                            style={{ fontSize: '2em' }}
                            repeat={Infinity}
                        />
                        <p className="subtext">- Code, Debug, Fix & Repeat</p>
                        
                        <div className="social-icons">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="facebook">
        <FontAwesomeIcon icon={faFacebook} />
    </a>
    
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="instagram">
        <FontAwesomeIcon icon={faInstagram} />
    </a>
    
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="linkedin">
        <FontAwesomeIcon icon={faLinkedin} />
    </a>
    
    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="github">
        <FontAwesomeIcon icon={faGithub} />
    </a>
    
    <a href="https://wa.me/8073197069" target="_blank" rel="noopener noreferrer" className="whatsapp">
        <FontAwesomeIcon icon={faWhatsapp} />
    </a>
</div>

<a href="/Pavan_Kalyan_D_Frontend_Developer.pdf" download className="download-cv-btn">
    <button className="button">Download CV</button>
</a>

                    </div>
                </section>
                
                <section id="about" className="section">
    <div className="about-box">
        <h2 className="title">About Me</h2>
        <p className="description">
            As a Frontend Developer with 3.6 years of hands-on experience, I am passionate about building interactive and dynamic web applications. My goal is to leverage my technical expertise to contribute effectively to a forward-thinking team.
        </p>
        <p className="description">
            I have successfully developed and maintained responsive web applications utilizing ReactJS, HTML5, CSS3, and JavaScript, ensuring a seamless user experience across various devices.
        </p>
        <p className="description">
            My proficiency in state management solutions, particularly Redux, enables efficient data handling in large-scale applications, enhancing performance and reliability.
        </p>
        <p className="description">
            Collaborating closely with UI/UX designers is a key aspect of my workflow, allowing me to ensure that design concepts are seamlessly integrated into the final product, resulting in visually appealing and user-friendly applications.
        </p>
        <p className="description">
            I am adept at utilizing RESTful APIs to fetch and manipulate data from backend services, which is crucial for delivering optimal performance and user satisfaction.
        </p>
        <p className="description">
            My commitment to code quality is demonstrated through conducting thorough code reviews and providing constructive feedback to peers, fostering a culture of excellence within the development team.
        </p>
        <p className="description">
            I actively participate in Agile/Scrum ceremonies, including sprint planning, daily stand-ups, and retrospectives, to ensure project alignment and timely delivery of high-quality products.
        </p>
    </div>
</section>

                <section id="skills" className="section">
                    <div className="skills-box">
                        <h2 className="title">Skills</h2>

                        {/* Image-Based Skills */}
                        <div className="image-container">
                            {[
                                { src: img1, alt: 'HTML' },
                                { src: img2, alt: 'CSS' },
                                { src: img3, alt: 'JavaScript' },
                                { src: img4, alt: 'React.js' },
                                { src: img6, alt: 'GitHub' },
                                { src: img5, alt: 'Responsive Design' },
                                { src: img7, alt: 'Fetch API' },
                                { src: img8, alt: 'Problem Solving' },
                                { src: img9, alt: 'Debugging' }
                            ].map((image, index) => (
                                <div className="img-wrapper" key={index}>
                                    <img src={image.src} alt={image.alt} />
                                </div>
                            ))}
                        </div>

                
                        <ul>
                            <li><strong>HTML & CSS:</strong> Proficient in building responsive and user-friendly websites with modern HTML5 and CSS3 techniques.</li>
                            <li><strong>JavaScript:</strong> Experience with JavaScript as well as ES6+ features. Proficient in DOM manipulation and event handling.</li>
                            <li><strong>React.js:</strong> Experienced in building dynamic, single-page applications using React.js. Familiar with React Hooks and state management using Redux.</li>
                            <li><strong>Version Control (Git):</strong> Proficient in using Git for version control, including GitHub for collaboration and code deployment.</li>
                            <li><strong>Responsive Web Design:</strong> Experienced in designing and developing websites that work across different devices and screen sizes.</li>
                            <li><strong>APIs & Fetch:</strong> Knowledgeable in consuming APIs using Fetch and Axios for dynamic data integration.</li>
                            <li><strong>Problem-Solving & Debugging:</strong> Strong debugging skills and analytical approach to solving front-end issues.</li>
                        </ul>

                    
                       
                    </div>
                </section>

                <section id="projects" className="section" style={{ padding: '50px' }}>
    <h2 className="title" style={{ color: 'cyan', marginBottom: '15px', fontFamily: 'Rubik Vinyl', fontSize: '2.5em', textAlign: 'center' }}>My Projects</h2>

    {/* Grid Container for Projects */}
    <div className="project-grid">
        {/* Project 1 */}
        <div className="project-card">
            <img src="https://placehold.co/400x250?text=Equipment+Maintenance+System" alt="Equipment Maintenance System" className="project-image" />
            <div className="project-info">
                <h3 className="project-title">1.Equipment Maintenance System</h3>
                <p className="project-description" style={{ color: 'deepskyblue' }}>
                    Client: Sumitomo Chemical
                    <br />
                    Skills: ReactJS, Redux, Axios, RESTful APIs, HTML5, CSS3
                </p>
                <p className="project-details">
                    • Designed and implemented the Equipment Maintenance System, providing a user-friendly interface for technicians to access equipment information and maintenance requirements.
                    <br />
                    • Utilized Redux to manage application state efficiently, ensuring smooth data handling and improving performance in large-scale applications.
                    <br />
                    • Collaborated with designers to translate design concepts into a cohesive product, increasing user engagement by 25% and reducing bounce rates by 15% within three months.
                    <br />
                    • Employed RESTful APIs to fetch and manipulate data from backend services, ensuring optimal performance and real-time data updates.
                    <br />
                    • Performed code reviews and provided feedback to team members, maintaining high standards of code quality and consistency.
                </p>
            </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
            <img src="https://placehold.co/400x250?text=Mint+Payments+Application" alt="Mint Payments Application" className="project-image" />
            <div className="project-info">
                <h3 className="project-title">2.Mint Payments Application</h3>
                <p className="project-description" style={{ color: 'deepskyblue' }}>
                    Client: Mint Payments
                    <br />
                    Skills: React.js, JavaScript, HTML5, CSS3
                </p>
                <p className="project-details">
  • Coordinated closely with the Team Lead to gather and analyze requirements, ensuring alignment with project goals.
  <br />
  • Developed user interfaces for both mobile platforms, ensuring a consistent and responsive user experience.
  <br />
  • Integrated frontend with the application’s business layer, ensuring seamless communication between frontend and backend.
  <br />
  • Worked with UI and database development teams to create a dynamic user experience.
  <br />
  • Troubleshot and resolved issues, ensuring website functionality and compatibility across platforms.
  <br />
  • Updated software to ensure full functional compatibility, keeping the application up-to-date with the latest standards and technologies.
</p>


            </div>
        </div>
    </div>
</section>

<section
  id="experience"
  className="section"
  style={{
    padding: '20px',
    backgroundColor: '#121212',
    color: 'whitesmoke',
    fontFamily: 'Times New Roman, serif',
  }}
>
  <h2
    className="title"
    style={{
      color: 'cyan',
      marginBottom: '20px',
      fontFamily: 'Rubik Vinyl',
      fontSize: '2.5em',
    }}
  >
    Work Experience
  </h2>

  

  {/* Work Experience Details */}

  <div className="experience-item" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>

    {/* Company Information and Designation */}
    <div className="company-details" style={{ gridColumn: 'span 3', padding: '15px', backgroundColor: '#1c1c1c', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }}>
      <h3 style={{ color: 'gold' }}>
        <strong>Company: RideNext Software Solutions Private Limited</strong>
      </h3>
      <p style={{ color: 'gold' }}><strong>Designation:</strong> Software Engineer</p>
      <p style={{ color: 'gold' }}><strong>Experience:</strong> 3.6 Years</p>
      <p style={{ color: 'gold' }}><strong>Duration:</strong> July 2021 – Dec 2024</p>
    </div>

   {/* Probation Period Title Card */}
<div className="project-details" style={{ gridColumn: 'span 1' }}>
  <strong style={{ color: 'deepskyblue' }}>Probation Period</strong>
  <p style={{ color: 'white' }}><strong>Duration:</strong> July 2021 – Dec 2021</p>
</div>

{/* Project 1 Title Card */}
<div className="project-details" style={{ gridColumn: 'span 1' }}>
  <strong style={{ color: 'deepskyblue' }}>Project 1: Mint Payments Application</strong>
  <p style={{ color: 'white' }}><strong>Client:</strong> Mint Payments</p>
  <p style={{ color: 'white' }}><strong>Duration:</strong> Jan 2022 – Aug 2023</p>
</div>

{/* Project 2 Title Card */}
<div className="project-details" style={{ gridColumn: 'span 1' }}>
  <strong style={{ color: 'deepskyblue' }}>Project 2: Equipment Maintenance System</strong>
  <p style={{ color: 'white' }}><strong>Client:</strong> Sumitomo Chemical</p>
  <p style={{ color: 'white' }}><strong>Duration:</strong> Oct 2023 – Dec 2024</p>
  
</div>

    
  </div>

  {/* Hover Effects and Styling */}
  <style>{`
    .project-details {
      padding: 15px;
      margin: 10px 0;
      background-color: #1c1c1c;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .project-details:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 16px rgba(0, 255, 255, 0.4);
    }

    .project-details strong {
      font-size: 1.2em;
      color: white;
      transition: color 0.3s ease;
    }

    .project-details strong:hover {
      color: #00e5ff;
    }
  `}</style>
</section>


                <section id="contact" className="section">
                    <h2 className="title">Contact Me</h2>
                    <form onSubmit={handleSubmit} className="contact-form">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="form-input"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="form-input"
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="form-textarea"
                        />
                        <button type="submit" className="button">Send Message</button>
                    </form>
                </section>

                <footer className="footer">&copy; 2023 My Portfolio. All Rights Reserved.</footer>
            </div>
        </>
    );
}