import "./SocialLinks.css";
import githubLogo from "../../assets/github.png";
import linkedinLogo from "../../assets/linkedin.png";
import instagramLogo from "../../assets/instagram.png";
import threadsLogo from "../../assets/threads.png";

const socialSites = [
  {name: "GitHub", logo: githubLogo, link: "https://github.com/imjacobtw"},
  {name: "LinkedIn", logo: linkedinLogo, link: "https://www.linkedin.com/in/imjacobtw/"},
  {name: "Instagram", logo: instagramLogo, link: "https://www.instagram.com/jacob.en/"},
  {name: "Threads", logo: threadsLogo, link: "https://www.threads.net/@jacob.en"},
];

const socialsLogoListeItems = socialSites.map(site => {
  return (
    <li>
      <a href={site.link}>
        <img alt={site.name} src={site.logo} />
      </a>
    </li>
  );
});

function SocialLinks() {
  return (
    <ul class="social-links-list">
      {socialsLogoListeItems}
    </ul>
  );
}

export default SocialLinks;