const projects = [
  {
    title: "UnforsRaySafe AB – Real-Time Metrics Dashboard",
    company: "UnforsRaySafe AB",
    description: [
      "Led development of a modular dashboard for medical instruments",
      "Built data visualization components using modern charting libraries",
      "Integrated CI/CD pipelines and optimized performance for scale",
      "Collaborated with cross-functional teams to ensure maintainability"
    ],
    year: "2024",
    techStack: ["React", "Chart.js", "Node.js", "Docker"]
  },
  {
    title: "Promosoft AB – Simulation & CRM Tools",
    company: "Promosoft AB",
    description: [
      "Developed simulation modules for desktop and tablet platforms using .NET",
      "Designed responsive UI components with a focus on clean code",
      "Worked closely with UX designers to enhance user experience",
      "Introduced architectural improvements to reduce system load"
    ],
    year: "2023",
    techStack: [".NET", "C#", "WPF", "SQL Server"]
  }
];

function Projects() {
  return (
    <section className="projects">
      <h2>Professional Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.title}</h3>
          <p><strong>Company:</strong> {project.company}</p>
          <p><strong>Year:</strong> {project.year}</p>
          <ul>
            {project.description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          <p><strong>Tech Stack:</strong> {project.techStack.join(", ")}</p>
        </div>
      ))}
    </section>
  );
}
export default Projects;
