import { Link } from "react-router-dom";
import "../styles/Footer.css";
import { RxLinkedinLogo } from "react-icons/rx";
import { RxGithubLogo } from "react-icons/rx";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer>
      <div class="footerSection">
        <div class="row">
          <div class="footerColumn">
            <h6>quick links</h6>
            <ul>
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

          <div class="footerColumn">
            <h6>social links</h6>
            <div class="socials">
              <a
                href="https://www.linkedin.com/in/kuljeetpanesar"
                target="_blank"
                rel="noreferrer noopener"
              >
                <RxLinkedinLogo />
              </a>
              <a
                href="https://github.com/KuljeetPanesar"
                target="_blank"
                rel="noreferrer noopener"
              >
                <RxGithubLogo />
              </a>
              <a
                href="mailto:kuljeetpanesar14@gmail.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <MdEmail />
              </a>
            </div>
          </div>
        </div>

        <div id="copyright">
          <a href="/">&copy;2023 Kuljeet Panesar</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
