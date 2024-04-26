import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          This is a demo movie streaming website made by Ankit and Shibasish.
        </div>
        <div className="socialIcons">
          <span className="icon">
            <a href="https://www.facebook.com/" >
              <FaFacebookF />
            </a>
          </span>
          <span className="icon">
            <a href="https://www.instagram.com/meta">
              <FaInstagram />
            </a>
          </span>
          <span className="icon">
            <a href="https://twitter.com/home">
              <FaTwitter />
            </a>
          </span>
          <span className="icon">
            <a href="https://www.linkedin.com">
              <FaLinkedin />
            </a>
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
