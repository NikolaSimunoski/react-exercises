import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// const testData = [
//   {
//     language: "JavaScript",
//     emoji: "🟨",
//     background: { backgroundColor: "#f0db4f" },
//   },
//   {
//     language: "Python",
//     emoji: "🐍",
//     background: { backgroundColor: "#306998" },
//   },
//   { language: "Java", emoji: "☕", background: { backgroundColor: "#b07219" } },
//   { language: "C++", emoji: "💻", background: { backgroundColor: "#00599C" } },
//   { language: "Ruby", emoji: "💎", background: { backgroundColor: "#701516" } },
//   { language: "Go", emoji: "🐹", background: { backgroundColor: "#00ADD8" } },
//   {
//     language: "Swift",
//     emoji: "🦅",
//     background: { backgroundColor: "#FA7343" },
//   },
//   {
//     language: "Kotlin",
//     emoji: "🚀",
//     background: { backgroundColor: "#0095D5" },
//   },
//   { language: "PHP", emoji: "🐘", background: { backgroundColor: "#4F5B93" } },
//   {
//     language: "TypeScript",
//     emoji: "🔷",
//     background: { backgroundColor: "#3178C6" },
//   },
// ];

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
  return (
    <img
      src="/T02FT9MJM-U018P4028SF-9ba7dfba077c-512.jpg"
      className="avatar"
      alt="face img"
    />
  );
}

function Intro() {
  return (
    <div>
      <h1>Nikola Simunoski</h1>
      <p>
        "It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English."
      </p>
    </div>
  );
  // return <p>{props.introText}</p>;
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="JavaScript" emoji="💪" background="blue" />
      <Skill skill="Python" emoji="🐍" background="yellow" />
      <Skill skill="Java" emoji="☕" background="green" />
      <Skill skill="C++" emoji="💻" background="purple" />
      <Skill skill="Swift" emoji="🦅" background="red" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.background }}>
      <div>{props.skill}</div>
      <div>{props.emoji}</div>
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
