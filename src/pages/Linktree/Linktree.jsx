import { useState } from "react";
import Fade from "../../components/Fade/Fade";
import bandcampIcon from "../../assets/icons/bandcamp-svgrepo-com.svg";
import instagramIcon from "../../assets/icons/instagram-svgrepo-com.svg";
import mailIcon from "../../assets/icons/mail-svgrepo-com.svg";
import "./Linktree.css";

function Linktree() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const links = [
    {
      id: 1,
      title: "Bandcamp",
      url: "https://emirchacra.bandcamp.com",
      icon: bandcampIcon,
      type: "social",
    },
    {
      id: 2,
      title: "Instagram",
      url: "https://www.instagram.com/emirchacra",
      icon: instagramIcon,
      type: "social",
    },
    {
      id: 3,
      title: "Email",
      url: "mailto:contact@emirchacra.com",
      icon: mailIcon,
      type: "social",
    },
    // Add more liks
    // {
    //   id: 4,
    //   title: "Mi Proyecto",
    //   url: "https://ejemplo.com",
    //   type: "link",
    // },
  ];

  return (
    <Fade as="div" className="linktree-container">
      <div className="linktree-content">
        {/* here can be a logo or avatar if wanted */}
        <div className="linktree-header">
          <div className="linktree-avatar">
            <div className="avatar-placeholder">EC</div>
          </div>
          <h1 className="linktree-name">emir chacra</h1>
          <p className="linktree-bio">
            Musician · Producer · Good lawyer
          </p>
        </div>

        <div className="linktree-links">
          {links.map((link, index) => (
            <a
              key={link.id}
              href={link.url}
              target={link.url.startsWith("mailto:") ? "_self" : "_blank"}
              rel={link.url.startsWith("mailto:") ? "" : "noopener noreferrer"}
              className={`linktree-link ${
                link.type === "social" ? "social-link" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                transform:
                  hoveredIndex === index ? "translateY(-2px)" : "translateY(0)",
                boxShadow:
                  hoveredIndex === index
                    ? "0 4px 20px rgba(255, 151, 253, 0.3)"
                    : "0 2px 8px rgba(0, 0, 0, 0.2)",
              }}
            >
              {link.icon && (
                <div className="link-icon">
                  <img src={link.icon} alt={link.title} />
                </div>
              )}
              <span className="link-title">{link.title}</span>
              <svg
                className="link-arrow"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12L10 8L6 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          ))}
        </div>
        
        <div className="linktree-footer">
          <p>© {new Date().getFullYear()} emir chacra</p>
        </div>
      </div>
    </Fade>
  );
}

export default Linktree;
