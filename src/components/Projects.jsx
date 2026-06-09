import React from "react";
import "./Projects.css";

const Projects = () => {
  const uxProjects = [
    {
      title: "Visualisering av instrumentdata – Unfors Raysafe",
      description:
        "Design av flöden, interaktioner och prototyper för en grafapplikation som visualiserar instrumentdata i realtid.",
      tags: ["UX", "Interaktionsdesign", "Datavisualisering"],
      image: "/images/raysafe.png",
    },
    {
      title: "Simuleringssystem – Promosoft AB",
      description:
        "User flows, scenariodesign och användartester för ett simuleringssystem i desktop, iPad och mobil.",
      tags: ["UX", "User Flows", "Responsiv design"],
      image: "/images/promosoft.png",
    },
    {
      title: "Webbtjänst för vattenanalys – Vatten AB",
      description:
        "Användarresor, formulärdesign och informationsstruktur för en webbtjänst för vattenanalys och kundhantering.",
      tags: ["UX", "User Journey", "Formulärdesign"],
      image: "/images/vatten.png",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>UX Portfolio</h2>
      <p>Här är några av de UX-relaterade projekt jag har arbetat med.</p>

      <div className="projects-grid">
        {uxProjects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-img" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
