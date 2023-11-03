import "./footer.css";
import FooterElement from "./FooterElement";

function Footer() {
  const element1 = ["Home", "About us", "Integrations", "Team", "Blog"];
  const element2 = [
    "Infrastructure provisioning",
    "Netwrok infrastructure automation",
    "Cost optimization",
    "Cloud migration",
    "Kubernetes at scale",
  ];
  const element3 = [
    "FAQ",
    "Careers",
    "Privacy Policy",
    "Terms & Condition",
    "Support",
  ];

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-text">
          <p>
            You get just what you need to run your cloud workloads--no more, no
            less. Deploy from our single pane of glass, manage them with ease
            and scale up as fast as your workload grows
          </p>
        </div>
        <div className="element-container">
          <FooterElement title="Our Links" elements={element1} />
          <FooterElement title="Our Services" elements={element2} />
          <FooterElement title="Other Links" elements={element3} />
        </div>
      </div>
      <div className="footer-footer">
        <div>
          <p>Terms & Condition | Privacy Policy</p>
        </div>
        <div>
          <p>
            Copyright © 2023 <span className="bold">EXOCODE TECHNOLOGIES</span>{" "}
            | All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
