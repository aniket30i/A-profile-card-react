import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

function App(params) {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="ironman.jpg" alt="Aniket" />;
}
function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="😋" color="skyblue" />
      <Skill skill="Html+CSS" emoji="😎" color="orangered" />
      <Skill skill="Javascript" emoji="😍" color="yellow" />
      <Skill skill="Python" emoji="👌" color="green" />
    </div>
  );
}
function Intro(params) {
  return (
    <div>
      <h1>Aniket Saha</h1>
      <p>Budding SoftwareDeveloper Dreams to make an impact on the world</p>
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
