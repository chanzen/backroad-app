import { pageLinks } from "./MenuLinks";

const PageLinks = ({ parentClass, childClass }) => {
  return (
    <ul className={parentClass} id="nav-links">
      {pageLinks.map((link) => {
        return (
          <li key={link.id}>
            <a
              href={link.href}
              target="_blank"
              className={childClass}
              rel="noopener noreferrer"
            >
              {link.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default PageLinks;
