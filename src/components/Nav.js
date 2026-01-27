import logo from "../images/logo.svg";
import { socialLinks } from "./MenuLinks";
import PageLinks from "./PageLinks";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <PageLinks parentClass="nav-links" childClass="nav-link" />

        <ul className="nav-icons">
          {socialLinks.map((link) => {
            const { href, icon, key } = link;
            return (
              <li key={key}>
                <a href={href} target="_blank" className="nav-icon">
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
