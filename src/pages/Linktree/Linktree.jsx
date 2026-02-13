import { useState } from "react";
import Fade from "../../components/Fade/Fade";
import "./Linktree.css";
import avatar from "../../assets/biopic2026.jpg";

function Linktree() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const links = [
    {
      id: 1,
      title: "Latinx Electrónicx DJ Set Preview",
      url: "https://m.soundcloud.com/mmonocromo/perreo-vieja-escuela-dj-set",
    },
    {
      id: 3,
      title: "Perreo Old School DJ Set Preview",
      url: "https://m.soundcloud.com/mmonocromo/perreo-vieja-escuela-dj-set",
    },
    {
      id: 2,
      title: "Baile Funk DJ Set Preview",
      url: "https://m.soundcloud.com/mmonocromo/funk-dj-set",
    },
    {
      id: 4,
      title: "Bandcamp",
      url: "https://mncrmo.bandcamp.com",
    },
    {
      id: 5,
      title: "Main Website",
      url: "https://emirchacra.com",
    },
    {
      id: 6,
      title: "Contact",
      url: "mailto:music@emirchacra.com",
    },
    // Add more liks
    // {
    //   id: 4,
    //   title: "Mi Proyecto",
    //   url: "m.soundcloud.com/mmonocromo/funk-dj-set",
    //   type: "link",
    // },
  ];

  return (
    <Fade as="div" className="linktree-container">
      <div className="linktree-content">
        {/* here can be a logo or avatar if wanted */}
        <div className="linktree-header">
          <img className="linktree-avatar" src={avatar} alt="Avatar"/>
          <h1 className="linktree-name">monocromo</h1>
          <p className="linktree-bio">Music Producer · DJ · DSP Developer</p>
        </div>

        <div className="linktree-links">
          {links.map((link, index) => (
            <a
              key={link.id}
              href={link.url}
              target={link.url.startsWith("mailto:") ? "_self" : "_blank"}
              rel={
                link.url.startsWith("mailto:") ? "" : "noopener noreferrer"
              }
              className={`linktree-link`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                transform:
                  hoveredIndex === index
                    ? "translateY(-2px)"
                    : "translateY(0)",
              }}
            >
              <span className="link-title">{link.title}</span>
              <svg
                className="link-arrow"
                width="15"
                height="15"
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
