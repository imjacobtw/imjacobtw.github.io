function navMenuOpen() {
  document.getElementById("nav-menu").style.transform = "translateY(0%)";
  document.querySelector("body").style.overflowY = "hidden";
}

function navMenuClose() {
  document.getElementById("nav-menu").style.transform = "translateY(-100%)";
  document.querySelector("body").style.overflowY = "visible";
}

const logosSlide = document.getElementsByClassName("logos-slide")[0];
logosSlide.after(logosSlide.cloneNode(true));
logosSlide.after(logosSlide.cloneNode(true));

class Project {
  constructor(title, description, githubLink, liveLink, imageSrc) {
    this.title = title;
    this.description = description;
    this.githubLink = githubLink;
    this.liveLink = liveLink;
    this.imageSrc = imageSrc;
  }
}

const projects = [
  new Project(
    "Trivia",
    "A trivia web application that allows the user to choose how many questions they want, what topic the trivia is about, the trivia's difficulty, and more. Built using the Open Trivia Database API.",
    "https://github.com/imjacobtw/trivia-web-app",
    "https://jtwilkerson.dev/trivia-web-app/",
    "./assets/images/projects/trivia-web-app.png"
  ),
  new Project(
    "Password Manager",
    "A GUI application for creating, reading, and managing passwords for various websites and emails. Built using Python and Tkinter.",
    "https://github.com/imjacobtw/angela-yu-python-course-projects/tree/main/030-improved-password-manager",
    null,
    "./assets/images/projects/password-manager.png"
  ),
  new Project(
    "My Top 10 Movies",
    "A web application for finding one's top 10 movies list. Users can search for movies, rate them, review them, and store their list in a local SQLite database. Built using Python, Flask, SQLAlchemy, and The Movie Database API.",
    "https://github.com/imjacobtw/angela-yu-python-course-projects/tree/main/064-my-top-10-movies",
    null,
    "./assets/images/projects/my-top-10-movies.png"
  ),
  new Project(
    "Fitness Tracker",
    "Designed a multi-platform fitness tracker mobile application with a team of undergraduate colleagues during our second software engineering capstone course. I developed responsive onboarding screens and optimized data initialization techniques for new end users using React Native and JavaScript.",
    "https://github.com/terminator7/FitnessTracker",
    null,
    "./assets/images/projects/fitness-tracker-mobile-app.png"
  ),
  new Project(
    "Web Chat Application",
    "A web chat application for anonymous chatting in both public and private chat rooms. Built using Express, React, and Socket.IO. This was a group project for COMP SCI 5600 at Missouri S&T.",
    "https://github.com/imjacobtw/g6-web-chat-application",
    null,
    "./assets/images/projects/g6-web-chat-app.png"
  ),
  new Project(
    "Relational Database Normalization Script",
    "A Python script that takes a relation schema and its constraints as input, normalizes the schema to a desired normal form, and outputs the necessary SQL statements to generate the normalized relation schemas. This was an assignment for COMP SCI 5300 at Missouri S&T.",
    "https://github.com/imjacobtw/relational-database-normalizer",
    null,
    "./assets/images/projects/relational-database-normalizer.png"
  ),
];

const projectsGrid = document.getElementById("projects-grid");

{/* <a
  href="https://github.com/terminator7/FitnessTracker"
  class="project-card"
>
  <div>
    <h1>Fitness Tracker Mobile Application</h1>
    <p>
      Designed a multi-platform fitness tracker mobile application
      with a team of undergraduate colleagues during our second
      software engineering capstone course. I developed responsive
      onboarding screens and optimized data initialization
      techniques for new end users using React Native and
      JavaScript.
    </p>
  </div>
</a> */}

let projectsGridInnerHtml = "";

for (const project of projects) {
  projectsGridInnerHtml += `
    <a
      href=${project.liveLink || project.githubLink}
      class="project-card"
    >
      <div>
        <h1>${project.title}</h1>
        <img src=${project.imageSrc} alt=${project.title} />
        <p>${project.description}</p>
      </div>
    </a>
  `
}

projectsGrid.innerHTML = projectsGridInnerHtml;
