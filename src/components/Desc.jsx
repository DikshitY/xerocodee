import './Desc.css'
import PropertyLeft from './PropertyLeft';
import PropertyRight from './PropertyRight';
import Heading from "./Heading";
import Rocket from "../images/Rocket.png";
import One from '../images/one.png'
import Two from '../images/two.png'
import Three from '../images/three.png'
import Four from '../images/four.png'
import Five from '../images/five.png'
import Six from '../images/six.png'
import Seven from '../images/seven.png'

function Desc() {
  return (
    <div className="desc-main">
      <div className="desc-title">
        <h1>The Xerocodee way </h1>
        <div className="rocket-img">
          <img src={Rocket} />
        </div>
      </div>
      <Heading
        number="01"
        title="Self serve Infrastructure"
        desc=" Accelerate by self-serving production-ready infrastructure and customize as you scale."
      />
      <PropertyLeft url = {One} title = "In Your Cloud" desc = "Your infrastructure runs on your AWS or GCP account. Never get locked in. Infinitely scalable.Azure support coming soon)"/>
      <Heading
        number="02"
        title="Deploy applications, fast!"
        desc="Set up automated deployments of your application in 5 minutes and get back to building stuff that matters."
      />
      <PropertyLeft url = {Two} title = "Configurable Build and Deploy pipelines" desc = "Portable builds powered by Dagger and continuous deployments powered by ArgoCD - you gain more control of your pipelines with composable custom, build, and deploy stages."/>
      <PropertyRight url = {Three} title = "Push to Deploy" desc = "Just connect your repo with one click and push. Argonaut’s deep integration with GitHub Actions and GitLab pipelines build and deploy your code on every push."/>
      <PropertyLeft url = {Four} title = "Multiple runtimes" desc = "Quickly deploy apps to containerized or serverless runtimes on your cloud and customize architectures to cost and performance constraints. Deploy on Kubernetes using dockerfiles or buildpacks, AWS Lambda, or GCP Cloud Functions."/>
      <PropertyRight url = {Five} title = "Scale infinitely" desc = "Every deployment is a zero-downtime deployment without you needing to choose custom configurations. You can easily configure auto-scaling, resource limits, and health-check URL to further optimize application uptime."/>
      <Heading
        number="03"
        title="Visibility into costs and metrics"
        desc="Automatically track resource costs, across clouds, on every change. Visualize k8s pod metrics - CPU, Network, and Memory."
      />
      <PropertyLeft url = {Six} title = "Customizable cost dashboards and reports" desc = "Stay on top of your cloud spending with custom cost dashboards and reports — sort, filter, and group by your various accounts, resources, and cloud regions." additional = "full-img"/>
      <PropertyRight url = {Seven} title = "Preview infra costs" desc = "See the cost of a specific resource while choosing it (before provisioning). It saves you the hassle of searching through the complex pricing pages of your cloud provider or tools." additional = "full-img"/>
    </div>
  );
}

export default Desc;
