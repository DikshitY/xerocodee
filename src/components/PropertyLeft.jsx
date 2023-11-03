function PropertyLeft({ url, title, desc }) {
  return (
    <div className="property-main">
      <div className="property-img">
        <img src={url} />
      </div>
      <div className="property-text-container">
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default PropertyLeft;
