function PropertyRight({ url, desc, title }) {
  return (
    <div className="property-main">
      <div className="property-text-container">
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
      <div className="property-img">
        <img src={url} />
      </div>
    </div>
  );
}

export default PropertyRight;
