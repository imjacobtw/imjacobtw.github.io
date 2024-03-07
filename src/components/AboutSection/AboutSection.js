import "./AboutSection.css";
import headshot from "../../assets/headshot.jpg";

function AboutSection() {
  return (
    <div id="about-container">
      <section id="about">
        <div id="about-headshot-container">
          <img alt="Jacob Wikerson" src={headshot} />
        </div>
        <div id="about-summary-container">
          <h1>About Me</h1>
          <p>
            Computers have been a staple of my life since a young age. Whether
            it was for playing video games or building my own personal computer,
            I would spend many hours of my day using one.
            <br /><br />
            My first experience with coding dates back to high school. For my
            sophomore year, I decided to take a Project Lead the Way course
            that taught the fundamentals of programming using Scratch and Python.
            This was one of my favorite courses in high school, and it led me to
            taking another fundamental programming class in my junior year, where
            I learned Visual Basic.
            <br /><br />
            I've been studying computer science and software engineering for over
            4 years, because I enjoy solving problems and crafting innovative
            software applications. With these passions in mind, my academic journey
            has consisted of implementing elegant algorithms, building robust
            applications, and effectively communicating on collaborative projects
            with cross-functional development teams. 
          </p>
          <a href="../src/assets/resume.pdf" download>Download My Resume ↓</a>
        </div>
      </section>
    </div>
  );
}

export default AboutSection;