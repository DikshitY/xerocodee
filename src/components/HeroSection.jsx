import HeroImg from "../images/heroImg.png";
import Hero2 from '../images/hero2.png'
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-container"> 
        <h1 className="hero-title">Bulid your audience and grow your brand</h1>
        <p className="hero-desc">
          no more, no less. Deploy from our single pane of glass, manage them
          with ease and scale up as fast as your workload grows.
        </p>
        <button className="hero-btn">Get Started Now</button>
      </div>
      <img src={HeroImg} className="hero-img" />
      <div className="img-two">
        <img src={Hero2}/>
      </div>
    </div>
  );
}

export default HeroSection;
