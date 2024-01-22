import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
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
  return <img src="assets\devi1.png" width="442px" alt="Devi Shanmugam" />;
}
function Intro() {
  return (
    <div>
      <h1>Devi Shanmugam</h1>
      <p>
        I am a Frontend Developer in love with crafting website. I am on a
        misson to help millions of students on their coding journey. When not
        coding, i love to spent time on reading books, listening to music, and
        travel.
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      <Skill name="HTML + CSS" emoji="👍" color="orange" />
      <Skill name="JavaScript" emoji="👍" color="purple" />
      <Skill name="Bootstrap" emoji="👍" color="red" />
      <Skill name="ReactJs" emoji="👍" color="blue" />
      <Skill name="Github" emoji="👍" color="yellow" />
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.name}</span>
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
