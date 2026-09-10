// Projects: shows the student projects with a short description.
function Projects({ items }) {
  return (
    <section className="section" id="projects">
      <h2>Projects</h2>
      <div className="grid">
        {items.map((project) => (
          <div className="card" key={project.name}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
