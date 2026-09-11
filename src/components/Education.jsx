// Education shows the schools I went to
function Education({ items }) {
  return (
    <section className="section" id="education">
      <h2>Education</h2>
      {items.map((item) => (
        <div className="card" key={item.programme}>
          <h3>{item.programme}</h3>
          <p>{item.institution}</p>
          <p>{item.year}</p>
        </div>
      ))}
    </section>
  );
}

export default Education;
