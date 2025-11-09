import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add subtle background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo}>Aishwarya.</div>

      {/* Desktop Navigation Links */}
      <ul className={styles.navLinks}>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Desktop Social Icons */}
      <div className={styles.desktopIcons}>
        <a
          href="https://www.linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>

      {/* Hamburger Icon */}
      <div
        className={`${styles.hamburger} ${menuOpen ? styles.active : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Slide Menu (Right Side) */}
      <div className={`${styles.menu} ${menuOpen ? styles.open : ""}`}>
        <ul className={styles.menuList}>
          <li>
            <a href="#about" onClick={handleLinkClick}>About</a>
          </li>
          <li>
            <a href="#experience" onClick={handleLinkClick}>Experience</a>
          </li>
          <li>
            <a href="#projects" onClick={handleLinkClick}>Projects</a>
          </li>
          <li>
            <a href="#contact" onClick={handleLinkClick}>Contact</a>
          </li>
          <li>
            <a href="#resume" onClick={handleLinkClick}>Resume</a>
          </li>
        </ul>

        {/* Mobile Icons */}
        <div className={styles.mobileIcons}>
          <a
            href="https://www.linkedin.com/in/aishwarya800/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Aishwarya800"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </nav>
  );
};
