import React, { useState } from "react";
import styles from "./Projects.module.css";
import projectsData from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Frontend", "Full Stack", "Internship"];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className={styles.container}>
      <h2 className={styles.title}>Projects</h2>

      {/* CATEGORY FILTER */}
      <div className={styles.categories}>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`${styles.categoryBtn} ${
              selectedCategory === cat ? styles.active : ""
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PROJECT CARDS */}
      <div className={styles.projects}>
        {filteredProjects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </section>
  );
};
