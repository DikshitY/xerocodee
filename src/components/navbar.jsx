import Logo from "../images/logo.png";
import './navbar.css'

function Navbar() {
  return (
    <div className="main-navbar">
      <div className="main-logo">
        <img src={Logo} />
      </div>
      <ul className="navbar-items">
        <li>Home</li>
        <li>Team</li>
        <li>Contact</li>
        <li>Careers</li>
      </ul>
      <button className="signIn-btn">Sign In</button>
    </div>
  );
}

export default Navbar;
