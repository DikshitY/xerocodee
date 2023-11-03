function Heading({ number, title, desc }) {
  return (
    <div className="heading-main">
      <h1>{number} <span><hr /></span></h1>
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
}

export default Heading;
