import './Subscribe.css'
import Send from "../images/send.png";

function Subscribe() {
  return (
    <div className="sub-main">
      <div className="sub-img">
        <img src={Send} />
      </div>
      <div className="sub-text-container">
        <h1>Subscribe to Our Newsletter & get the Coupon code.</h1>
        <p>All your information is completely confidential</p>
      </div>
      <div className="sub-container">
        <input type="text" placeholder="Type your email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default Subscribe;
