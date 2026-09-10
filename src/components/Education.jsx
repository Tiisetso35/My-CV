// Education: receives the education list as a prop and shows one card
// for each qualification using the map() function.
function Education({ items }) {
  return (
    <section className="section" id="education">
      <h2>Education</h2>
      {items.map((item) => (
        <div className="card" key={item.programme}>
          <h3>{item.programme}</h3>
          <p className="highlight">{item.institution}</p>
          <p>{item.year}</p>
        </div>
      ))}
    </section>
  );
}

export default Education;
