import SocialLinks from "../SocialLinks/SocialLinks";

function HeroSpace() {
  return (
    <div id="hero-space-container">
      <div id="hero-space">
        <p id="hero-intro">Hello, I am</p>
        <h1>Jacob Wilkerson</h1>
        <p id="hero-summary">
          I always seek out opportunities to expand my knowledge and
          master emerging technologies.
        </p>
        <SocialLinks />
      </div>
    </div>
  );
}

export default HeroSpace;