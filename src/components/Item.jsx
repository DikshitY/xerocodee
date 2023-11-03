function Item({ url, title, desc }) {
  return (
    <div className="item-container">
      <div className="item-img-container">
        <img src={url} />
      </div>
      <div className="item-text-container">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default Item;
