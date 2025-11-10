import React, { useState } from "react";
import styles from "./About.module.css";

const features = [
  "Problem Solver",
  "Creative Thinker",
  "Team Player",
  "Continuous Learner",
  "Attention to Detail",
];

export const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState(styles.fadeIn);

  const handleDotClick = (index) => {
    if (index === activeIndex) return;

    // Trigger fade-out animation
    setFadeClass(styles.fadeOut);

    // Wait for animation to finish, then change feature
    setTimeout(() => {
      setActiveIndex(index);
      setFadeClass(styles.fadeIn);
    }, 300); // timing matches CSS animation
  };

  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>

      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <img
            src="/assets/about/aboutImage.jpg"
            alt="Aishwarya"
            className={styles.aboutImage}
          />
        </div>

        <div className={styles.aboutText}>
          <p>
            <p>
  I’m a detail-oriented and creative developer who enjoys turning complex ideas into simple, interactive designs.  
  My key strengths include quick learning, problem-solving, adaptability, and a genuine passion for building clean, responsive web interfaces.  
  I value teamwork, communication, and continuous improvement in everything I do.

  <p>
  I sometimes spend extra time perfecting small design details, which can slow my pace.  
  I’m also still gaining experience in advanced backend frameworks and large-scale project management.  
  However, I actively work on improving my time balance and expanding my technical depth through consistent practice and learning.
</p>

</p>

          </p>

          <div className={`${styles.feature} ${fadeClass}`}>
            <h3>{features[activeIndex]}</h3>
          </div>

          <div className={styles.dots}>
            {features.map((_, index) => (
              <span
                key={index}
                className={`${styles.dot} ${
                  activeIndex === index ? styles.activeDot : ""
                }`}
                onClick={() => handleDotClick(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
