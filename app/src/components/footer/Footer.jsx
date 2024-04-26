import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem" onClick={() => navigate("/terms")}>
            Terms Of Use
          </li>
          <li className="menuItem" onClick={() => navigate("/privacy-policy")}>
            Privacy-Policy
          </li>
          <li className="menuItem" onClick={() => navigate("/about")}>
            About
          </li>
          <li className="menuItem" onClick={() => navigate("/blog")}>
            Blog
          </li>
          <li className="menuItem" onClick={() => navigate("/FAQ")}>
            FAQ
          </li>
        </ul>
        <div className="infoText">
          This is a demo movie streaming website made by Ankit and Shibasish.
        </div>
        <div className="socialIcons">
          <span className="icon">
            <a href="https://www.facebook.com/">
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
