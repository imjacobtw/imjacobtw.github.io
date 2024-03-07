import "./ProjectsSection.css";
import ProjectTile from "./ProjectTile";
import databaseProjectPhoto from "../../assets/relational-database-normalizer.PNG";
import g6Photo from "../../assets/g6.PNG";
import r2fPhoto from "../../assets/r2f.png";

const projects = [
  {
    title: "Relational Database Normalizer",
    text: "A Python script that takes a relation schema and its constraints as input, normalizes the schema to a desired normal form, and outputs the necessary SQL statements to generate the normalized relation schemas. This was an assignment for COMP SCI 5300 at Missouri S&T.",
    photo: databaseProjectPhoto,
    link: "https://github.com/imjacobtw/relational-database-normalizer"
  },
  {
    title: "G6 - Web Chat Application",
    text: "A web chat application for anonymous chatting in both public and private chat rooms. Built using Express, React, and Socket.IO. This was a group project for COMP SCI 5600 at Missouri S&T. ",
    photo: g6Photo,
    link: "https://github.com/imjacobtw/g6-web-chat-application"
  },
  {
    title: "R2F - Fitness Tracker Mobile App",
    text: "Designed a multi-platform fitness tracker mobile application with a team of undergraduate colleagues during our second software engineering capstone course. I developed responsive onboarding screens and optimized data initialization techniques for new end users using React Native and JavaScript.",
    photo: r2fPhoto,
    link: "https://github.com/terminator7/FitnessTracker"
  }
];

const projectTiles = projects.map(project => {
  return (
    <ProjectTile
      title={project.title}
      text={project.text}
      photo={project.photo}
      link={project.link}
    />
  );
});

function ProjectsSection() {
  return (
    <div id="projects-container">
      <section id="projects">
        <h1>Projects</h1>
        <div id="project-tiles-container">
          {projectTiles}
        </div>
      </section>
    </div>
  );
}

export default ProjectsSection;