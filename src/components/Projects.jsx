import Section from './Section';

function Projects({ items }) {
  return (
    <Section id="projects" title="Projects">
      <div className="grid">
        {items.map((project) => (
          <article key={project.id} className="card">
            <h3>{project.name}</h3>
            <p className="tech">{project.tech}</p>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default Projects;
