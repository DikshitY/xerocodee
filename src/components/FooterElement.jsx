function FooterElement({ title, elements }) {
  return (
    <div className="footer-element">
      <h3>{title}</h3>
      <ul>
        <li>{elements[0]}</li>
        <li>{elements[1]}</li>
        <li>{elements[2]}</li>
        <li>{elements[3]}</li>
        <li>{elements[4]}</li>
      </ul>
    </div>
  );
}

export default FooterElement;
