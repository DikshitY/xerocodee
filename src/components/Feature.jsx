import "./Feature.css";
import Item from "./Item";
import FeatureMain from "../images/FeatureMain.png";
import FeatureOne from "../images/FeatureOne.png";
import FeatureTwo from "../images/FeatureTwo.png";
import Infra from "../images/Infra.png";
import Network from "../images/Network.png";
import Security from "../images/Security.png";
import Application from "../images/Application.png";

function Feature() {
  return (
    <div className="feature-box">
      <div className="heading">Features</div>
      <div className="text-container">
        <h1>
          <span className="blue">Save 1000s</span> of expensive coders hours
        </h1>
        <p>
          With cloud native technologies, we assist in modernising
          infrastructure and applications for resilience and scalability.
        </p>
      </div>
      <div className="button-container">
        <button>Apps</button>
        <button>App Configs</button>
        <button>Pipelines</button>
        <button>Infra Creation</button>
        <button>Cost</button>
        <button>Add-Ons</button>
        <button>Monitoring</button>
        <button>Connections</button>
      </div>
      <div className="feature-main-img">
        <img src={FeatureMain}></img>
      </div>
      <div className="comparison">
        <div className="inner-div">
          Without Xerocodee
          <img src={FeatureOne} />
        </div>
        <div className="inner-div">
          With Xerocodee
          <img src={FeatureTwo} />
        </div>
      </div>
      <h1 className="lower-title">
        Self serve infrastructure platform{" "}
        <span className="blue">for scaling teams</span>
      </h1>
      <div className="item-main">
        <div className="item-one">
          <Item
            url={Infra}
            title="Infrastructure"
            desc="Automated Cloud Infrastructure Workflow"
          />
          <Item
            url={Security}
            title="Security"
            desc="Modern Secure Infrastructure Approach"
          />
        </div>
        <div className="item-one">
          <Item
            url={Network}
            title="Networking"
            desc="Flexible Secure Application Connectivity"
          />
          <Item
            url={Application}
            title="Applications"
            desc="Automate Application Deployment for Agility"
          />
        </div>
      </div>
    </div>
  );
}

export default Feature;
