import { socialLinks } from "./MenuLinks";
import PageLinks from "./PageLinks";

const Footer = () => {
  return (
    <footer class="section footer">
      <PageLinks parentClass="footer-links" childClass="footer-link" />

      <ul class="footer-icons">
        {socialLinks.map((link) => {
          const { id, href, icon } = link;
          return (
            <li key={id}>
              <a
                href={href}
                target="_blank"
                class="footer-icon"
                rel="noreferrer"
              >
                <i class={icon}></i>
              </a>
            </li>
          );
        })}
        ;
      </ul>
      <p class="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
