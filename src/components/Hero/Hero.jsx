import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Aishwarya</h1>
        <p className={styles.description}>
          Hello! I’m  a beginner full-stack developer with a creative mindset and a love for coding. I enjoy exploring new tools, building projects from scratch, and growing through every challenge.
        </p>
        <a  href="/myresume/Aishwarya_Resume.pdf"  // place your resume inside the "public/assets" folder
          download="Aishwarya_Resume.pdf"
          className={styles.contactBtn}
          >
            Download CV
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
