// Projects shows the school projects I have made
function Projects({ items }) {
  return (
    <section className="section" id="projects">
      <h2>Projects</h2>
      {items.map((project) => (
        <div className="card" key={project.name}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Projects;
