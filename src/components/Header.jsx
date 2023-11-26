import { Link } from "react-router-dom";
import "../styles/Header.css";
import { useState } from "react";
import profilePhoto from "../images/profilePhoto.jpeg";
import { HiMiniBars3 } from "react-icons/hi2";

const Header = () => {
  const [isNavigationBarShown, setNavigationBarShown] = useState(false);

  const handleBarClick = () => {
    setNavigationBarShown((prevShown) => !prevShown);
  };

  return (
    <header>
      <nav>
        <div className="mainNavigation">
          <div className="titleBar">
            <div id="websiteTitle">
              <figure>
                <Link to="/">
                  <img
                    id="profilePhoto"
                    src={profilePhoto}
                    alt="Profile image of Kuljeet Panesar"
                  />
                </Link>
                <Link to="/">
                  <figcaption id="profilePhotoCaption">
                    Kuljeet Panesar
                  </figcaption>
                </Link>
                <Link to="/">
                  <figcaption id="profilePhotoCaptionSmall">KP</figcaption>
                </Link>
              </figure>
            </div>
            <HiMiniBars3 onClick={handleBarClick} className="bars" />
          </div>

          <div>
            <ul
              onClick={handleBarClick}
              className={`navigationBar ${
                isNavigationBarShown ? "showNavigationBar" : ""
              }`}
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about-me">About Me</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
