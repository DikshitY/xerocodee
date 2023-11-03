import './BlueBox.css'
import CSone from "../images/CSone.png";
import CStwo from "../images/CStwo.png";

function BlueBox() {
  return (
    <div className='bluebox-main'>
      <div className='bluebox-title'>
        <h1>
          Modernize apps, infrastructure with cloud native tech for resilience,
          scalability.
        </h1>
      </div>
      <div className='bluebox-component'>
        <div className='component-img'>
          <img src={CSone} />
        </div>
        <div className='component-text-container'>
          <h1>Real-time risk monitoring</h1>
          <p>
            Real-time risk monitoring across your infrastructure and application
            ecosystem will help you maintain ongoing compliance with more than
            05+ different regulatory standards.
          </p>
        </div>
      </div>
      <div className='bluebox-component'>
        <div className='component-text-container'>
          <h1>Collaborative workflows</h1>
          <p>
            Share artefacts easily and collaborate with team members, auditors,
            and pen testers via automated procedures. To manage daily compliance
            with automatic notifications and reminders, create, assign, and
            track tasks.
          </p>
        </div>
        <div className='component-img'>
          <img src={CStwo} />
        </div>
      </div>
    </div>
  );
}

export default BlueBox;
