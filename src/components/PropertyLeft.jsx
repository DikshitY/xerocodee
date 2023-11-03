function PropertyLeft({ url, title, desc,additional }) {
  return (
    <div className="property-main">
      <div className="property-img">
        <img id = {additional} src={url} />
      </div>
      <div className="property-text-container">
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default PropertyLeft;
