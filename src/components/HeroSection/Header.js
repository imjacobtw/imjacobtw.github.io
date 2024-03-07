import logo from "../../assets/logo.png";

const navbarLinks = [
  {text: "About", link: "#about"},
  {text: "Projects", link: "#projects"},
  {text: "Contact", link: "#contact"},
];

const navbarLinkListItems = navbarLinks.map(navbarLink => {
  return (
    <li>
      <a href={navbarLink.link}>
        {navbarLink.text}
      </a>
    </li>
  );
});

function Header() {
  return (
    <div id="header-container">
      <header>
        <div id="header-logo-container">
          <img alt="Jacob's Logo" id="header-logo" src={logo} />
        </div>
        <div id="header-navbar-container">
          <nav>
            <ul>{navbarLinkListItems}</ul>
          </nav>
        </div>
        <div id="header-button-container">
          <a href="mailto:imjacobtw@gmail.com" download>Get in Touch</a>
        </div>
      </header>
    </div>
  );
}

export default Header;