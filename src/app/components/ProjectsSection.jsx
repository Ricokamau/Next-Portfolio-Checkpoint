"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Safari Challenge",
    description: "Safari Challenge is a mobile application that aims to help people to discover amazing locations and experiences in Kenya in a fun and interactive way. ",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://sites.google.com/students.tukenya.ac.ke/safari-challenge-app/home",
    previewUrl: "https://www.google.com/url?q=https%3A%2F%2Fxd.adobe.com%2Fview%2F70a53542-30bc-43da-8e5a-617b8d3ab84a-25f6%2F%3Ffullscreen&sa=D&sntz=1&usg=AOvVaw3youWaILSfKiK2lotJ1mXp",
  },
  {
    id: 2,
    title: "GearGrid Sports Store",
    description: "Official Website for the GearGrid Sports Store",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ricokamau/Bootstrap-Checkpoint",
    previewUrl: "https://github.com/Ricokamau/Bootstrap-Checkpoint",
  },
  {
    id: 3,
    title: "Madison Group",
    description: "Redesign Proposal for the Madison Insurance Website",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://xd.adobe.com/view/dbdb61b1-2d14-467c-853a-7d7b6a6c235d-8e88/",
    previewUrl: "https://xd.adobe.com/view/dbdb61b1-2d14-467c-853a-7d7b6a6c235d-8e88/",
  },
  {
    id: 4,
    title: "REED Animation Studio",
    description: "Website Design for REED Animation Studios",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Apparel Digital Magazine",
    description: "UI Design of the fashion digital magazine Apparel",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Ocean Sole Africa",
    description: "Rebranding and Website design for Ocean Sole Africa",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      {/*<div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>*/}
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
