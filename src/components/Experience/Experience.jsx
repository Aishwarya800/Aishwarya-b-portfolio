import React, { useEffect, useRef, useState } from "react";
import styles from "./Experience.module.css";

export const Experience = () => {
  const [modalImage, setModalImage] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeSkillKey, setActiveSkillKey] = useState(null);
  const [progressMap, setProgressMap] = useState({});
  const trackRef = useRef(null);

  const skills = [
    { id: 1, title: "HTML", level: 80, iconClass: "devicon-html5-plain colored", certificate: "/certificates/html.jpg" },
    { id: 2, title: "CSS", level: 80, iconClass: "devicon-css3-plain colored", certificate: "/certificates/css.jpg" },
    { id: 3, title: "JavaScript", level: 75, iconClass: "devicon-javascript-plain colored", certificate: "/certificates/javascript.jpg" },
    { id: 4, title: "React", level: 75, iconClass: "devicon-react-original colored", certificate: "/certificates/react.jpg" },
    { id: 5, title: "GitHub", level: 90, iconClass: "devicon-github-original", certificate: "/certificates/github.jpg" },
    { id: 6, title: "MongoDB", level: 70, iconClass: "devicon-mongodb-plain colored", certificate: "/certificates/mongodb.jpg" },
  ];

  // Infinite scrolling
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let pos = 0;
    const speed = 0.7;
    let animationId;

    const loop = () => {
      if (!isPaused) {
        pos -= speed;
        if (Math.abs(pos) >= track.scrollWidth / 2) pos = 0;
        track.style.transform = `translateX(${pos}px)`;
      }
      animationId = requestAnimationFrame(loop);
    };

    animationId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  const handleSkillClick = (uniqueKey, skill) => {
    if (activeSkillKey === uniqueKey) {
      setActiveSkillKey(null);
      setIsPaused(false);
      return;
    }

    setActiveSkillKey(uniqueKey);
    setIsPaused(true);

    setProgressMap((prev) => ({ ...prev, [uniqueKey]: 0 }));

    let progress = 0;
    const interval = setInterval(() => {
      progress += 2;
      if (progress >= skill.level) {
        progress = skill.level;
        clearInterval(interval);
      }
      setProgressMap((prev) => ({ ...prev, [uniqueKey]: progress }));
    }, 20);
  };

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Languages & Certificates</h2>
      <p className={styles.subtitle}>Explore my technical expertise</p>

      <div className={styles.sliderWrapper}>
        <div className={styles.sliderTrack} ref={trackRef}>
          {[...skills, ...skills].map((skill, index) => {
            const uniqueKey = `${skill.id}-${index}`;
            const isActive = activeSkillKey === uniqueKey;

            return (
              <div
                key={uniqueKey}
                className={`${styles.skill} ${isActive ? styles.activeSkill : ""}`}
                onClick={() => handleSkillClick(uniqueKey, skill)}
              >
                <div className={styles.skillHeader}>
                  <i className={`${skill.iconClass} ${styles.icon}`}></i>
                  <p>{skill.title}</p>
                </div>

                {isActive && (
                  <>
                    <div className={styles.progressBar}>
                      <div
                        className={styles.progressFill}
                        style={{ width: `${progressMap[uniqueKey] || 0}%` }}
                      />
                    </div>
                    <span className={styles.percentLabel}>{progressMap[uniqueKey] || 0}%</span>
                    <button
                      className={styles.viewCertBtn}
                      onClick={(e) => {
                        e.stopPropagation();
                        setModalImage(skill.certificate);
                      }}
                    >
                      View Certificate
                    </button>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {modalImage && (
        <div className={styles.modalOverlay} onClick={() => setModalImage(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <img src={modalImage} alt="Certificate" />
            <button className={styles.closeBtn} onClick={() => setModalImage(null)}>
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
