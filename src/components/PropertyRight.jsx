function PropertyRight({ url, desc, title, additional }) {
  return (
    <div className="property-main reverse">
      <div className="property-text-container">
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
      <div className="property-img">
        <img id={additional} src={url} />
      </div>
    </div>
  );
}

export default PropertyRight;
